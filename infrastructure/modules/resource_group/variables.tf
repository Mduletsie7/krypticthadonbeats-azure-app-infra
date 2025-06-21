variable "name" {
  type        = string
  description = "Name of Resource Group."
  default     = "krypticthadon-app-dev-rg"
}

variable "location" {
  type        = string
  description = "Location of Resource Group."
  default     = "East US"
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