output "ecr_name" {
  value = aws_ecr_repository.aws_ecr.name
}

output "ecr_id" {
  value = aws_ecr_repository.aws_ecr.registry_id
}

output "ecr_uri" {
  value = aws_ecr_repository.aws_ecr.repository_url
}

output "ecr_region" {
  value = aws_ecr_repository.aws_ecr.arn
}