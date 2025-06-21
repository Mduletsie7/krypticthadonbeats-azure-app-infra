variable "container_app_name" {}
variable "resource_group_name" {}
variable "location" {}
variable "acr_login_server" {}
variable "acr_id" {}
variable "image_tag" {
  default = "latest"
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

