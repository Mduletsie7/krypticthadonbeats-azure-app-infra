output "container_name" {
    description = "The name of the storage container."
    value = azurerm_storage_container.container.name
}

output "container_id" {
    description = "The ID of the storage container."
    value = azurerm_storage_container.container.id
}
