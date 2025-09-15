output "storage_account_name" {
  description = "The name of the storage account."
  value = azurerm_storage_account.storage.name
}

output "storage_account_id" {
  description = "The ID of the storage account."
  value = azurerm_storage_account.storage.id
}

output "storage_account_location" {
  description = "The location of the storage account."
  value = azurerm_storage_account.storage.location
}