variable "ecr_name" {
    type = string
    description = "The name of the ECR registry where container images will be stored."
}

variable "img_tag_mutability" {
  type = string
  default = "MUTABLE"
   description = "The tag mutability setting for the repository"
}

variable "scan_on_push" {
    type = bool
    default = true
    description = "Enable image scanning on push"
}

variable "tags" {
  type = map(string)
  description = "Common tags to apply to all resources"
}

variable "user_region" {
  type = string
  default = "us-east-1"
}

variable "force_delete" {
  type = bool
}