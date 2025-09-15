variable "base_name" {
    description = "The base name for resources."
    type = string
}

variable "default_separator" {
    description = "The default separator to use for naming resources."
    type = string
}

variable "region" {
    description = "The region in which to work."
    type = string
}

variable "rg_tags" {
    description = "The tags to apply to the resources."
    type        = map(any)
}

variable "rg_name" {
    description = "The name of the resource group to override the default."
    type = string
    default = ""
}

locals {
    rg_name = var.rg_name == "" ? "${var.base_name}${var.default_separator}rg" : var.rg_name
}