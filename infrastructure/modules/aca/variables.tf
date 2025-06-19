variable "container_app_name" {}
variable "resource_group_name" {}
variable "location" {}
variable "acr_login_server" {}
variable "acr_id" {}
variable "image_tag" {
  default = "latest"
}

