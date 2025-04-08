terraform {
  backend "s3" {
    bucket         = "tf-state-staging-mduletsie7"  # staging-only bucket
    key            = "staging/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks-staging"  # staging-only lock table
    encrypt        = true
  }
}