# Kryptic Tha Don Beats — DevOps Deployment Project

This project is a full-stack DevOps deployment of a React-based website designed to sell music beats. It showcases an end-to-end CI/CD pipeline, containerization, and infrastructure as code on AWS, aimed at automating deployment and improving scalability, cost efficiency, and infrastructure management.

## 🚀 Live Demo
> Coming soon

---

## 🛠️ Tech Stack

- **Frontend**: React, Node.js
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Infrastructure as Code (IaC)**: Terraform (modular structure)
- **Cloud Provider**: AWS
  - ECS (Fargate)
  - ECR
  - VPC
  - S3 (for Terraform remote state)
  - DynamoDB (for state locking)

---

## 📦 Features

- 🔧 Built and containerized a React app using Docker.
- 🔄 CI/CD pipeline with GitHub Actions automates building, testing, tagging, and deploying Docker images.
- 🧪 SHA-based Docker image tagging ensures traceability and version control.
- ☁️ Infrastructure fully provisioned using Terraform with modular code.
- 🔐 Remote state storage in S3 with state locking via DynamoDB.
- 🖥️ Serverless deployment on AWS ECS (Fargate) for automatic scaling and cost-effective hosting.

---

## 🧩 Architecture Overview

![432502345-82af8fdf-6b75-4c17-bef4-9f2a1c5810d8](https://github.com/user-attachments/assets/300d3edc-ff63-482c-8ac2-bd5d2196c3ca)

[React App] → [Docker Container] → [GitHub Actions CI/CD]
→ Build → Push to [ECR] → Deploy to [ECS (Fargate)]

Terraform IaC → Provisions:

VPC

ECS Cluster & Service

ECR Repository

Security Groups

S3 Bucket + DynamoDB (for state management)

## ⚙️ Setup & Deployment (Overview)

### 1. Clone the Repo

git clone https://github.com/your-username/kryptic-tha-don-beats.git
cd kryptic-tha-don-beats

2. Set Up Infrastructure

Ensure you have AWS CLI, Terraform, and AWS credentials configured.

Navigate to the terraform with the environment you are working in and run:

terraform init
terraform plan
terraform apply

3. Configure CI/CD Secrets
Add the following to your GitHub repository secrets:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_REGION

ECR_REPOSITORY_URL

4. GitHub Actions Deployment
Pushing to the develop branch will:

Build the Docker image.

Tag it using the Git commit SHA.

Push to AWS ECR.

Deploy to ECS using Fargate.

📄 License
This project is licensed under the MIT License. See LICENSE for details.

🙌 Acknowledgements
Developed as part of my journey into DevOps and cloud-native development. Visit my LinkedIn for more.

✉️ Contact
Mdumisi Kelvin Letsie
📧 mdu.letsie7@gmail.com
🔗 LinkedIn: www.linkedin.com/in/mduletsie7/
