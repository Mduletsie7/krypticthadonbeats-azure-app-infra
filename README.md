# Terraform-eks-devops
End-to-End Cloud-Native Deployment with Multi-Environment State Management

🚀 Description:
A production-grade IaC solution deploying a React.js app on AWS EKS with Terraform, GitHub Actions CI/CD, and observability. Features environment isolation (dev/staging/prod), remote Terraform state (S3/DynamoDB), and automated image deployments via ECR/Kubernetes.
Key Highlights
1. Terraform Infrastructure

    Reusable Modules: (/infrastructure/modules/)

    Environment Isolation:

    infrastructure/environments/dev/     # Dev configs <br />
    infrastructure/environments/prod/    # Prod configs <br />
    infrastructure/environments/staging/ # Staging configs <br />

    Remote State Management:

        S3 Backend: Secure Terraform state storage.

        DynamoDB Locking: Prevents state conflicts during concurrent deployments.

2. React.js Application

    Dockerized: Built, auto-tagged using latest commit sha and pushed to Amazon ECR on every commit.

    Kubernetes-Deployed:

        deployment.yaml in /infrastructure/k8s/ references the latest ECR image.

3. Automated CI/CD (GitHub Actions)

    Build → Scan → Deploy:

        Builds React.js Docker image.

        Pushes to ECR.

        Updates Kubernetes pods via kubectl rollout.

4. Monitoring Stack

    Amazon Managed Prometheus: Cluster/app metrics.

    Grafana: Pre-configured dashboards.

![Kryptic-terraform-eks-devops-architecture drawio](https://github.com/user-attachments/assets/82af8fdf-6b75-4c17-bef4-9f2a1c5810d8)
