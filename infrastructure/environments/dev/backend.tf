terraform {
  backend "s3" {
    bucket         = "tf-state-dev-mduletsie7"  # Dev-only bucket
    key            = "dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks-dev"  # Dev-only lock table
    encrypt        = true
  }
}