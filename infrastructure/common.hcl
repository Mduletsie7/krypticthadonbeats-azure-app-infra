locals {
    original_dir = get_original_terragrunt_dir()
    repo_root = get_repo_root()
    root_path = replace(local.original_dir, local.repo_root, "")
    parsed_root_elements = split("/", local.root_path)
    root_elements = slice(local.parsed_root_elements, 1, length(local.parsed_root_elements))
    root_elements_count = length(local.root_elements)

    # Azure roots are parsed as: azure/ENVIRONMENT/REGION/APPLICATION/COMPONENT/SUB_COMPONENT_1/SUB_COMPONENT_2/...
    provider = local.root_elements[0]
    environment = local.root_elements[1]
    region = local.root_elements[2]
    application = local.root_elements[3]
    component = local.root_elements[4]

    environment_root = "${get_repo_root()}/${local.provider}/${local.environment}"
    region_root = "${local.environment_root}/${local.region}"
    application_root = "${local.region_root}/${local.application}"
    component_root = "${local.application_root}/${local.component}"

    sub_components_list = local.root_elements_count == 5 ? [] : slice(local.root_elements, 5 , local.root_elements_count)
    sub_components = {
        for i, v in local.sub_components_list: i => replace(v, "_", "-")
    }

    component_name = lower(replace(local.component, "_", "-"))

    default_index = "001"
    region_data_map = {
        southafricanorth = {
            alias = "zanorth"
            name = "South African North"
            code = "ZA"
        }
        eastus = {
            alias = "eastus"
            name = "United States"
            code = "US"
        }
    }
    region_name = local.region_data_map[local.region].name
    region_code = local.region_data_map[local.region].code
    region_alias = local.region_data_map[local.region].alias

    short_env = substr(local.environment, 0, 4)

# Use map to capture resource group, storage account, & container in azure
# that will be used to configure remote state on terragrunt.hcl file 
# terragrunt.hcl -> Line 9 
    account_map = {
        dev = {
            eastus = {
                rg_name  = "rg-dev-eastus-tfstate"
                st_name = "stdeveastustfstate"
                ct_name = "tfstate"
            }
        }
    }

    account = local.account_map[local.environment][local.region]

    # NOTE: These are the defaults for naming only.
    default_separator = "-"

    base_name_list = [
        local.short_env,
        local.application,
        local.region_alias,
    ]
    base_name_compact = compact(local.base_name_list)
    base_name_joined = join(local.default_separator, local.base_name_compact)
    base_name = lower(local.base_name_joined)

    tf_root = substr(
        trimprefix(get_original_terragrunt_dir(), get_repo_root()),
        1,
        -1
    )

    default_tags = {
        Application           = title(local.application)
        Environment           = title(local.environment)
        TerraformManaged      = true
        TerraformRoot         = local.tf_root
    }

    resource_tags = merge(
        local.default_tags,
        {
            BuildDate           = formatdate("EEE MMM DD hh:mm:ss ZZZ+2 YYYY", timeadd(timestamp(), "2h"))
            BuiltBy             = "Terraform"
            ResourceCriticality = "SinglePointOfFailure"
        }
    )
    
    primary_tenant_id = get_env("ARM_TENANT_ID", "")
    primary_subscription_id = get_env("ARM_SUBSCRIPTION_ID", "")
    primary_client_id = get_env("ARM_CLIENT_ID", "")
    primary_client_secret = get_env("ARM_CLIENT_SECRET", "")
}
 