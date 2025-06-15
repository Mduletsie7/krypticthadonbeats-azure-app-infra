terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.5.0" # allows any 3.x version, avoids breaking changes from 4.x
    }
  }
}

provider "azurerm" {
  features {}
}
