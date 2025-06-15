module "rg" {
  source   = "./modules/resource_group"
  name     = "krypticthadon-app-dev-rg"
  location = "East US"
}

module "acr" {
  source              = "./modules/acr"
  acr_name            = "krypticthadonbeatsapp"
  resource_group_name = module.rg.name
  location            = module.rg.location
  sku                 = "Basic"
  admin_enabled       = false
}

module "aca" {
  source              = "./modules/aca"
  container_app_name  = "krypticthadonbeats"
  resource_group_name = module.rg.name
  location            = module.rg.location
  acr_login_server    = module.acr.login_server
  acr_id              = module.acr.acr_id
}

