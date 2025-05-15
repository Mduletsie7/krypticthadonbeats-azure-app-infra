# terrafom plan --var-file=dev.tfvars
module "ecr" {
    source = "${var.module_root}services/ecr"
    ecr_name = "${var.project_name}-${var.env}-ecr"
    force_delete = var.force_delete
    tags = var.tags
}