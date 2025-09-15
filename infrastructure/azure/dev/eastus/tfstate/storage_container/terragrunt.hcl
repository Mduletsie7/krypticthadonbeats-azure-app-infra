include {
  path = find_in_parent_folders()
}

include "provider" {
    path = find_in_parent_folders("provider.hcl")
    expose = true
    merge_strategy = "deep"
}

include "common" {
    path = find_in_parent_folders("common.hcl")
    expose = true
    merge_strategy = "deep"
}

dependency "remote_state" {
  config_path = "../storage_account"
}

terraform {
  source = "${get_repo_root()}/src/terraform/azure//storage_container"
}

# NOTE: Without this the root doesn't work.
generate = include.provider.generate

locals {
   name_base = join(
    "",
    [
      include.common.locals.application,
    ]
   )
}

inputs = {
  ct_name = lower(local.name_base)
  storage_account_name = dependency.remote_state.outputs.storage_account_name  
}