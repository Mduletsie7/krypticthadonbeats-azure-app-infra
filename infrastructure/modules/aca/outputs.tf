output "container_app_fqdn" {
  value = azurerm_container_app.aca.latest_revision_fqdn
}

output "container_app_url" {
  value = "https://${azurerm_container_app.aca.name}.${azurerm_container_app.aca.location}.azurecontainerapps.io"
}

output "container_app_name" {
  description = "The name of the container app"
  value       = azurerm_container_app.aca.name
}

output "container_app_id" {
  description = "The ID of the container app"
  value       = azurerm_container_app.aca.id
}

output "container_app_environment_id" {
  description = "The resource ID for the container app environment"
  value       = azurerm_container_app_environment.aca_environment.id
}

output "log_analytics_workspace_id" {
  description = "ID of the Log Analytics Workspace"
  value       = azurerm_log_analytics_workspace.log_analytics_ws.id
}
