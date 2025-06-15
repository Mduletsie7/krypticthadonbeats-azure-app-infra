resource "azurerm_log_analytics_workspace" "log_analytics_ws" {
  name                = "krypticthadonbeats-loganalytics"
  location            = var.location
  resource_group_name = var.resource_group_name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_container_app_environment" "aca_environment" {
  name                       = "KrypticThaDonBeats-App-Environment"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.log_analytics_ws.id
}

resource "azurerm_user_assigned_identity" "aca_identity" {
  name                = "aca-managed-identity"
  location            = var.location
  resource_group_name = var.resource_group_name
}

resource "azurerm_role_assignment" "acr_pull" {
  principal_id         = azurerm_user_assigned_identity.aca_identity.principal_id
  role_definition_name = "AcrPull"
  scope                = var.acr_id
}

resource "azurerm_container_app" "aca" {
  depends_on = [
    azurerm_role_assignment.acr_pull
  ]
  name                         = "krypticthadonbeats"
  container_app_environment_id = azurerm_container_app_environment.aca_environment.id
  resource_group_name          = var.resource_group_name
  revision_mode                = "Single"

  identity {
    type         = "UserAssigned"
    identity_ids = [azurerm_user_assigned_identity.aca_identity.id]
  }

  template {
    container {
      name  = "krypticthadonbeats-app"
      image = "krypticthadonbeatsapp.azurecr.io/krypticthadonbeatsapp:96bfab5c81d235864855a5c667a7bea231b684e5"

      cpu    = 0.25
      memory = "0.5Gi"
    }
  }

  ingress {
    external_enabled = true
    target_port      = 3000
    transport        = "auto"

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }
  }
}
