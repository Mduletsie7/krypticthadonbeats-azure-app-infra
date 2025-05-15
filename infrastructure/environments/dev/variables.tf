variable "module_root" {
  type = string
  description = "value"
  default = "../../modules/"
}

variable "env" {
  type        = string
  description = "The environment name (e.g., dev, prod)"
}

variable "project_name" {
  type = string
  description = "The name of the project"
}

variable "tags" {
  type = map(string)
  default = {
    "Project"     = "krypticthadon-app-infra"
    "Environment" = "Dev"
    "Owner"       = "Mdumisi Kelvin Letsie"
  }
  description = "Common tags to apply to all resources"
}



variable "force_delete" {
  type = bool
  default = true
}