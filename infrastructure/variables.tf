variable "image_tag" {
  type    = string
  default = "96bfab5c81d235864855a5c667a7bea231b684e5"
}

variable "location" {
  description = "The Azure region where resources will be created"
  type        = string
  default     = "East US"
}

variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
  default     = "krypticthadon-app-dev-rg"
}