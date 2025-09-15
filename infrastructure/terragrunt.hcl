locals {
    common = read_terragrunt_config("${get_repo_root()}/common.hcl")
    plan_output = "plan.out"
    tf_root = trimprefix(path_relative_to_include(), get_repo_root())
}

# Configure Terraform to use container in Azure storage account for remote state management
# Setup config by referencing locals variables from map in common.hcl file || Starting on line 47
remote_state {
  backend = "azurerm"
  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }
  config = {
    resource_group_name  = local.common.locals.account.rg_name
    storage_account_name = local.common.locals.account.st_name
    container_name = local.common.locals.account.ct_name
    key = "${local.tf_root}/terraform.tfstate"
  }
}

terraform {
  # Force Terraform to not ask for input value if some variables are undefined.
  extra_arguments "disable_input" {
    commands  = get_terraform_commands_that_need_input()
    arguments = ["-input=false"]
  }
  extra_arguments "locking" {
    commands  = get_terraform_commands_that_need_locking()
    arguments = [
      "-lock-timeout=20m",
      "-lock=true"
    ]
  }
  extra_arguments "create_plan_out" {
    commands  = [
      "plan"
    ]
    arguments = [
      "-out=${local.plan_output}"
    ]
  }
  extra_arguments "use_plan_out" {
    commands  = [
      "apply"
    ]
    arguments = [
      "${local.plan_output}"
    ]
  }
}