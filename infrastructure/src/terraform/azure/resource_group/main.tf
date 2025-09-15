resource "azurerm_resource_group" "main" {
    name = local.rg_name
    location = var.region
    tags = var.rg_tags

    lifecycle {
        ignore_changes = [tags["BuildDate"]]
    }
}