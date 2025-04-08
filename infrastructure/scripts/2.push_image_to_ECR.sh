# Authenticate to AWS ECR container repository
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 865494649634.dkr.ecr.us-east-1.amazonaws.com

# Tag your EKS Image
docker tag kryptic-eks-app:latest 865494649634.dkr.ecr.us-east-1.amazonaws.com/mdu-ecr-repo-dev:latest

# Push to your EKS Repository
docker push 865494649634.dkr.ecr.us-east-1.amazonaws.com/mdu-ecr-repo-dev:latest