# Dev backend
aws s3api create-bucket --bucket "tf-state-dev-mduletsie7" --region us-east-1
aws dynamodb create-table --table-name "terraform-locks-dev" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST

# Prod backend
aws s3api create-bucket --bucket "tf-state-prod-mduletsie7" --region us-east-1
aws dynamodb create-table --table-name "terraform-locks-prod" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST

# Staging backend
aws s3api create-bucket --bucket "tf-state-staging-mduletsie7" --region us-east-1
aws dynamodb create-table --table-name "terraform-locks-staging" \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST