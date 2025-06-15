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

output "managed_identity_id" {
  description = "The ID of the managed identity"
  value       = azurerm_user_assigned_identity.aca_identity.id
}

output "managed_identity_principal_id" {
  description = "The principal ID of the managed identity"
  value       = azurerm_user_assigned_identity.aca_identity.principal_id
}

