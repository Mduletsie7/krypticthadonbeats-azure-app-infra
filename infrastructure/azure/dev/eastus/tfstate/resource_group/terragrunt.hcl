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

terraform {
  source = "${get_repo_root()}/src/terraform/azure//resource_group"
}

# NOTE: Without this the root doesn't work.
generate = include.provider.generate

locals {
    name_base = join(
        "-",
        [
            "rg",
            include.common.locals.region_alias,
            include.common.locals.application,
            include.common.locals.environment,
        ]
    )
}

inputs = {
    rg_name = lower(replace(replace(local.name_base, " ", ""), "_", ""))
}