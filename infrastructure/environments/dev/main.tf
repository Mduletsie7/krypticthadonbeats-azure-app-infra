module "ecr" {
    source = "../../modules/services/ecr"
    ecr_name = "kryptic-ecr-repo-${var.env}"
    tags = var.tags
}

module  "vpc_with_subnets" {
    source = "../../modules/networking/vpc"
    vpc_cidr = var.vpc_cidr
    tags = var.tags
}

module "eks_with_node_group" {
  source = "../../modules/services/eks"
 
  # passing the required parameters
  eks_cluster_name = "kryptic-eks-cluster-${var.env}"
  k8s_version      = var.k8s_version
 
  # pass vpc and subnet details from vpc_with_subnets module
  vpc_id                     = module.vpc_with_subnets.vpc_id
  eks_node_groups_subnet_ids = module.vpc_with_subnets.private_subnets
  control_plane_subnet_ids   = module.vpc_with_subnets.private_subnets
}