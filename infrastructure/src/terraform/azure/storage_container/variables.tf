variable "base_name" {
    description = "The base name for resources."
    type = string
}

variable "default_separator" {
    description = "The default separator to use for naming resources."
    type = string
}

variable "ct_name" {
    description = "The name of the storage container"
    type = string
}

variable "storage_account_name" {
    description = "The name of the storage account in which the container is in."
    type = string
}

variable "container_access_type" {
  description = "Access type of container public or private."
  type = string
  default = "private"
}

locals {
    ct_name = var.ct_name == "" ? "${var.base_name}ct" : var.ct_name
}