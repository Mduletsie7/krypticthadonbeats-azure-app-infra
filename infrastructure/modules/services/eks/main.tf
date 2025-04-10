data "aws_caller_identity" "current" {}

module "eks" {
  # invoke public eks module
  source  = "terraform-aws-modules/eks/aws"
  version = "19.15.3"

  # eks cluster name and version
  cluster_name    = var.eks_cluster_name
  cluster_version = var.k8s_version

  # vpc id where the eks cluster security group needs to be created
  vpc_id = var.vpc_id

  # subnets where the eks cluster needs to be created
  control_plane_subnet_ids = var.control_plane_subnet_ids

  # to enable public and private access for eks cluster endpoint
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true

  # create an OpenID Connect Provider for EKS to enable IRSA
  enable_irsa = true

  # install eks managed addons
  cluster_addons = {
    coredns = {
      preserve    = true
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
    vpc-cni = {
      most_recent = true
    }
  }

  # subnets where the eks node groups needs to be created
  subnet_ids = var.eks_node_groups_subnet_ids

  # eks managed node group named worker
  eks_managed_node_groups = var.workers_config
}

# Add this after your EKS module but before the service account resource
provider "kubernetes" {
  host                   = module.eks.cluster_endpoint
  cluster_ca_certificate = base64decode(module.eks.cluster_certificate_authority_data)
  exec {
    api_version = "client.authentication.k8s.io/v1beta1"
    command     = "aws"
    args = [
      "eks",
      "get-token",
      "--cluster-name",
      module.eks.cluster_name,
      "--region",
      var.region  # Make sure you have this variable defined
    ]
  }
}

# These resources should be outside the eks module
resource "kubernetes_service_account" "ecr_puller" {
  metadata {
    name      = "ecr-puller"
    namespace = "default"
    annotations = {
      "eks.amazonaws.com/role-arn" = aws_iam_role.ecr_puller.arn
    }
  }

  depends_on = [module.eks]
}

resource "aws_iam_role" "ecr_puller" {
  name = "ecr-puller-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/${replace(module.eks.cluster_oidc_issuer_url, "https://", "")}"
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "${replace(module.eks.cluster_oidc_issuer_url, "https://", "")}:sub" = "system:serviceaccount:default:ecr-puller"
          }
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecr_puller" {
  role       = aws_iam_role.ecr_puller.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

# Enable Amazon Managed Prometheus 
resource "aws_prometheus_workspace" "main" {
  alias = "eks-monitoring"
}