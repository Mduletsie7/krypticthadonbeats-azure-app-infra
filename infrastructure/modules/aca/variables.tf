variable "container_app_name" {
  description = "Name of the contaier app."
  type        = string
}
variable "resource_group_name" {
  description = "Name of the resource group."
  type        = string
}
variable "location" {
  description = "Resource group location."
  type        = string
}
variable "acr_login_server" {
  description = "Azure container registry login server."
  type        = string
}
variable "acr_id" {
  description = "Azure container registry ID."
  type        = string
}
variable "image_tag" {
  description = "Image tag of image to deploy to Azure Container App."
  default     = "latest"
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

