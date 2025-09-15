variable "base_name" {
    description = "the base name for the resource"
    type = string
}

variable "default_separator" {
  description = "The default seperator to use for naming resources."
  type = string
}

variable "st_name" {
  description = "The name of the storage account to override the default."
  type = string
}

variable "resource_group_name" {
  description = "The name of the resource group the storage account is in."
  type = string
}

variable "region" {
  description = "The region in which to work."
  type = string
}

variable "account_tier" {
  description = "The tier of the storage account"
  type = string
  default = "Standard"
}

variable "account_replication_type" {
  description = "The type of replication configured for the storage account"
  type = string
  default = "LRS"
}

variable "tags" {
  description = "The tags to apply to the resources"
  type = map(any)
}

locals {
  st_name = var.st_name == "" ? "${var.base_name}st" : var.st_name
}