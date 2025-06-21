variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
  default     = "krypticthadon-app-dev-rg"
}

variable "location" {
  description = "The Azure region where resources will be created"
  type        = string
  default     = "East US"
}

variable "container_app_name" {
  description = "The name of the Azure container app"
  type        = string
  default     = "krypticthadonbeats"
}

variable "container_registry_name" {
  description = "The name of the Azure container registry"
  type        = string
  default     = "krypticthadonbeatsapp"
}

variable "container_registry_sku" {
  description = "The SKU of the Azure container registry"
  type        = string
  default     = "Basic"
}

variable "container_registry_admin" {
  description = "The container registry admin enabled or disabled"
  type        = bool
  default     = false
}

variable "image_tag" {
  type    = string
  default = "96bfab5c81d235864855a5c667a7bea231b684e5"
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
  default     = "krypticthadonstorage"
}

variable "account_tier" {
  description = "Storage account tier"
  type        = string
  default     = "Standard"
}

variable "account_replication_type" {
  description = "Storage account replication type"
  type        = string
  default     = "LRS"
}

variable "storage_container_name" {
  description = "Storage container name"
  type        = string
  default     = "media"
}

variable "container_access_type" {
  description = "Storage account access type"
  type        = string
  default     = "private"
}

variable "common_tags" {
  description = "Common tags to apply across all resources."
  type        = map(string)
  default = {
    environment = "dev"
    project     = "Kryptic Tha Don Beats"
    owner       = "mdumisidev@gmail.com"
    department  = "engineering"
    managedBy   = "Terraform"
    createdBy   = "Terraform"
  }
}
