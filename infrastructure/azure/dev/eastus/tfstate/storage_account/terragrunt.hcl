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
  config_path = "../resource_group" 
}

terraform {
  source = "${get_repo_root()}/src/terraform/azure//storage_account"
}

# NOTE: Without this the root doesn't work.
generate = include.provider.generate

locals {
   name_base = join(
    "",
    [
      "st",
      include.common.locals.environment,
      include.common.locals.region_alias,
      include.common.locals.application,
    ]
   )
}

inputs = {
    st_name = lower(substr(local.name_base, 0, 24))
    resource_group_name = dependency.remote_state.outputs.rg_name
}