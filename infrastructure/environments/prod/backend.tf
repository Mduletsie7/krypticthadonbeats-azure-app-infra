terraform {
  backend "s3" {
    bucket         = "tf-state-prod-mduletsie7"  # Prod-only bucket
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks-prod"  # Prod-only lock table
    encrypt        = true
  }
}