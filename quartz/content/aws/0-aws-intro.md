---
title: 0-aws-intro
date: 2026-06-27
tags: [us, aws, devops, roadmap]
#
---

### AWS Introduction

**🟣 What is Cloud Computing?**
CLoud Computing refers to the delivery of computing services over the internet instead of using local servers. It offers reliable, scalable, and inexpensive cloud computing services which include data storage, databases, applciations, analytics, machine learnig, and even setting up virtual servers. The biggest names providing cloud computing services are Amazon Web Services (AWS), Microsoft Azure, Google Cloud, and others. The main selling point is that you only pay for the services you use, helping you manage your expenses more effectively.  

**🟣 IaaS vs PaaS vs SaaS**
Are three types of cloud service models. **IaaS** or Infrastructure as a Service provides users with a resource-based service via virtualization technology, offering computing infrastructure, physical or (more often) virtual machines and other resources. **PaaS** or Platform as a Service provides runtime environments for developing, testing, and managing applications, it is utilized for software development and offers a platform to developers to build applications and services over the internet. **SaaS** or Software as a Service provides on-demand software accessed via the internet, it delivers a complete software solution that you purchase on a pay-as-you-go basis from a cloud service provider.  

**🟣 Public vs Private vs Hybrid Cloud**
Amazon Web Services (AWS) offers various cloud-based deployment models to cater to varying business needs, including Public, Private, and Hybrid clouds. A **Public Cloud** is a model where the service provider offers resources, such as applications and storage, available to the general public over the internet. Resources may be free, or sold on a pay-per-usage model. On the other hand, a **Private Cloud** is a type of cloud computing that delivers similar advantages to public cloud, including scalability and self-service, but through a proprietary architecture dedicated to a single organization. Unlike public clouds, which deliver services to multiple organizations, a private cloud is dedicated to the needs and goals of a single entity. Lastly, a **Hybrid Cloud** is a solution that combines a private cloud with one or more public cloud services, with proprietary software enabling communication between each distinct service.  

**🟣 AWS**
AWS (Amazon Web Services) offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications: on-demand, available in seconds, with pay-as-you-go pricing. From data warehousing to deployment tools, directories to content delivery, over 200 AWS services are available. New services can be provisioned quickly, without the upfront fixed expense. This allows enterprises, start-ups, small and medium-sized businesses, and customers in the public sector to access the building blocks they need to respond quickly to changing business requirements. This whitepaper provides you with an overview of the benefits of the AWS Cloud and introduces you to the services that make up the platform.  

**🟣 AWS Global Infrastructure**
AWS Global Infrastructure refers to the layout of AWS regions and availability zones around the world. A region is a geographical area, each consisting of two or more **availability zones (AZs)** which are engineered to be isolated from failures in other AZs. AZs provide inexpensive, low-latency network connectivity to other AZs in the same region. In addition to the regions and AZs, AWS also includes edge locations for content delivery and regional edge caches, enhancing user experience by reducing latency. AWS currently operates in many geographic regions around the world.  

**🟣 Shared Responsibility Model**
In Amazon Web Services (AWS), the concept of 'Shared Responsibility' pertains to the distribution of security and compliance responsibilities between AWS and the user/client. Under this model, **AWS is responsible for the security "of" the cloud — including the infrastructure, hardware, software, networking, and facilities that run AWS cloud services. On the other hand, the user is responsible for security "in" the cloud — this includes managing and configuring the customer-controlled services, protecting account credentials, and securing customer data.** This shared model aims to lessen operational burden for users and provide flexible security controls. 

**🟣 Well Architected Framework**
AWS Well-Architected Framework is a set of strategic guidelines provided by Amazon Web Services. It is designed to provide high-performing and resilient systems while maintaining cost efficiency. The framework divides the architectural best practices across six pillars which include:  
→ operational excellence;  
→ security;  
→ reliability;  
→ performance efficiency;  
→ cost optimization;  
→ sustainability;   

With this framework, you can assess and improve your cloud-based architectures and applications by leveraging AWS technologies.

* ~~Introduction~~
* EC2
* VPC
* IAM
* Auto-Scaling
* S3
* SES
* Route53
* Cloudwatch
* RDS
* DynamoDB
* Cloudfront
* ElastiCache
* ECR
* ECS
* EKS
* Lambda