variable "env" {
  description = "Deployment environment (e.g., dev, prod)"
  type        = string
}

variable "project_name" {
  type = string
  description = "The name of the project"
}

variable "tags" {
  type = map(string)
  default = {
    "Project"     = "krypticthadon-app-infra"
    "Owner"       = "Mdumisi Kelvin Letsie"
    "Terraform" = "True"
    "Environment" = "Dev"
  }
  description = "Common tags to apply to all resources"
}

variable "cidr_block" {
  description = "The CIDR block for the VPC"
  type        = string
}

variable "availability_zones" {
  description = "value"
  type = list(string)
  default = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
}

variable "public_subnets" {
  type = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  }

variable "private_subnets" {
  type = list(string)
  default = ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"]
  }