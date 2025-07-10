resource "azurerm_log_analytics_workspace" "log_analytics_ws" {
  name                = "krypticthadonbeats-loganalytics"
  location            = var.location
  resource_group_name = var.resource_group_name
  sku                 = "PerGB2018"
  retention_in_days   = 30

  tags = var.common_tags
}

resource "azurerm_container_app_environment" "aca_environment" {
  name                       = "KrypticThaDonBeats-App-Environment"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.log_analytics_ws.id

  tags = var.common_tags
}


resource "azurerm_container_app" "aca" {
  name                         = var.container_app_name
  resource_group_name          = var.resource_group_name
  container_app_environment_id = azurerm_container_app_environment.aca_environment.id
  revision_mode                = "Single"

  tags = var.common_tags

  identity {
    type = "SystemAssigned"
  }

  template {
    container {
      name   = "krypticthadonbeatsapp-run"
      image  = "krypticthadonbeatsapp.azurecr.io/krypticthadonbeatsapp:96bfab5c81d235864855a5c667a7bea231b684e5"
      cpu    = 0.25
      memory = "0.5Gi"
    }

    min_replicas = 1
    max_replicas = 1

  }

  ingress {
    external_enabled = true
    target_port      = 3000
    transport        = "auto"

    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }

  registry {
    server   = "krypticthadonbeatsapp.azurecr.io"
    identity = "SystemAssigned"
  }

  lifecycle {
    ignore_changes = all
  }
}
