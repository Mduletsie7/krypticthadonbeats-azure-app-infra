module "rg" {
  source   = "./modules/resource_group"
  name     = var.resource_group_name
  location = var.location
}

module "acr" {
  source              = "./modules/acr"
  acr_name            = var.container_registry_name
  resource_group_name = module.rg.name
  location            = module.rg.location
  sku                 = var.container_registry_sku
  admin_enabled       = var.container_registry_admin
}

module "aca" {
  source              = "./modules/aca"
  container_app_name  = var.container_app_name
  resource_group_name = module.rg.name
  location            = module.rg.location
  acr_login_server    = module.acr.login_server
  acr_id              = module.acr.acr_id
}

module "storage_account" {
  source                   = "./modules/storage_account"
  resource_group_name      = module.rg.name
  location                 = module.rg.location
  storage_account_name     = var.storage_account_name
  account_tier             = var.account_tier
  account_replication_type = var.account_replication_type
  storage_container_name   = var.storage_container_name
  container_access_type    = var.container_access_type
}