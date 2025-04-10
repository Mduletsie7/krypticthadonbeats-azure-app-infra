variable "env" {
  type        = string
  description = "The environment name (e.g., dev, prod)"
}

variable "tags" {
  type = map(string)
  default = {
    "Project"     = "Kryptic-Terraform-Devops"
    "Environment" = "Dev"
    "Owner"       = "Mdumisi Kelvin Letsie"
  }
  description = "Common tags to apply to all resources"
}

variable "vpc_name" {
  type        = string
  description = "name of the vpc to be created"
  default     = "mdu-eks-vpc"
}

variable "vpc_cidr" {
  type        = string
  description = "vpc cidr block to be used"
  default     = "10.0.0.0/16"
}

variable "k8s_version" {
  type        = string
  description = "kubernetes version"
  default     = "1.32"
}

variable "force_delete" {
  type = bool
  default = true
}