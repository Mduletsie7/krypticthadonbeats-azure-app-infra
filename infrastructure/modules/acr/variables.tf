variable "acr_name" {
  type        = string
  description = "The name of the Azure Container Registry."
}

variable "resource_group_name" {
  type        = string
  description = "The name of the resource group."
}

variable "location" {
  type        = string
  description = "Azure region."
}

variable "sku" {
  type        = string
  default     = "Basic"
  description = "The SKU of the ACR."
}

variable "admin_enabled" {
  type        = bool
  default     = false
  description = "Enable admin access?"
}
