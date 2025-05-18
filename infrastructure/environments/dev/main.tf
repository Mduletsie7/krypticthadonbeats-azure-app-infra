locals {
  project_name = "krypticthadonbeats"
  region = "us-east-1"
}

# terrafom plan --var-file=dev.tfvars

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "5.21.0"

  name = "${var.project_name}-vpc"
  cidr = var.cidr_block

  azs             = var.availability_zones
  private_subnets = var.private_subnets
  public_subnets  = var.public_subnets

  enable_nat_gateway = false
  enable_vpn_gateway = false

 tags = var.tags
}