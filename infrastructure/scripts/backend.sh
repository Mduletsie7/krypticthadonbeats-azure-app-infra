# Set variables
RESOURCE_GROUP_NAME="terraform-state-rg"
STORAGE_ACCOUNT_NAME="tfstatekrypticinfra"
CONTAINER_NAME="tfstate"
LOCATION="East US"

# Create resource group
az group create --name $RESOURCE_GROUP_NAME --location "$LOCATION"

# Create storage account
az storage account create \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $STORAGE_ACCOUNT_NAME \
  --sku Standard_LRS \
  --encryption-services blob

# Create storage container
az storage container create \
  --name $CONTAINER_NAME \
  --account-name $STORAGE_ACCOUNT_NAME



