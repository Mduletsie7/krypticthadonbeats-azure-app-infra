variable "resource_group_name" {
  type        = string
  description = "Name of Resource Group."
}

variable "location" {
  type        = string
  description = "Location of Resource Group."
}

variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "account_tier" {
  description = "Storage account tier"
  type        = string
}

variable "account_replication_type" {
  description = "Storage account replication type"
  type        = string
}

variable "storage_container_name" {
  description = "Storage container name"
  type        = string
}


variable "container_access_type" {
  description = "Storage account access type"
  type        = string
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

