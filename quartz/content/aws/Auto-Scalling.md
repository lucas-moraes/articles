---
title: Auto-Scalling
date: 2026-07-19
tags: [us, aws, devops, roadmap]
#
---
















































































### Auto-Scalling

AWS Auto Scaling is a service that automatically scales resources to meet the demands of your applications. It uses policies, health status, and schedules to determine when to add more instances, ensuring that your application always has the right amount of capacity. AWS Auto Scaling can scale resources across multiple services and manage the scaling process in real time. It optimizes for cost and performance, and with the help of Amazon CloudWatch, it adjusts capacity based on the demand patterns of your workloads.

### 🟡 AMIs

Amazon Machine Images (AMIs) are pre-configured templates for EC2 instances. When you launch an instance in EC2, you start with an AMI. An AMI includes details such as the operating system to use, applications to install, and the volume type and size. AMIs can be either public or private — public AMIs are available for anyone to use, while private AMIs are only available to specific AWS accounts. You can create your own custom AMIs, enabling you to quickly start and replicate a known configuration for your EC2 instances.

### 🟡 Launch Templates

"Launch Templates" in AWS Auto Scaling are configurations that an Auto Scaling group uses to launch EC2 instances. They store the configuration information necessary to launch an instance, which includes the ID of the Amazon Machine Image (AMI), the instance type, a key pair, security groups, and the storage configuration. It helps in setting up new instances quickly and prevent configuration inconsistencies across instances. These templates can also be versioned, allowing updates and roll backs to previous configurations.

### 🟡 Auto-Scaling Groups

"Autoscaling Groups" in AWS, also known as Auto Scaling Groups (ASGs), are the main components used for scaling resources automatically according to your requirements in AWS. They contain a collection of Amazon Elastic Compute Cloud (EC2) instances that are treated as a logical grouping for the purpose of automatic scaling and management. The instances in an ASG are distributed across different availability zones in a region, ensuring a high level of fault tolerance. When defining an ASG, you specify its minimum, maximum, and desired number of EC2 instances. You also have to specify a launch configuration that determines what type of instances should be launched and from which Amazon Machine Image (AMI).

### 🟡 **Scaling Policies**

AWS Autoscaling supports various types of scaling policies that control how and when to scale. These include target tracking scaling policies, step scaling policies, and simple scaling policies. Target tracking scaling policies adjust the capacity based on specified dynamic conditions, maintaining the target value for the specified metric. Step scaling policies adjust the capacity based on a set of scaling adjustments, increasing or decreasing the capacity within the constraints of the minimum and maximum capacity. Meanwhile, simple scaling policies increase or decrease the capacity based on a single alarm.

### 🟡 **Elastic Load Balancers**

Elastic Load Balancing (ELB) is a load-balancing service for Amazon Web Services (AWS) deployments. It automatically distributes incoming application traffic and scales resources to meet traffic demands. ELB helps to ensure that the incoming traffic is spread evenly across your Amazon EC2 instances, making your application more highly available and fault-tolerant. It supports routing and load balancing for HTTP/HTTPS, and TCP traffic. There are three types of load balancers that ELB offers - Application Load Balancer (ideal for HTTP and HTTPS traffic), Network Load Balancer (best for TCP traffic where extreme performance is required) and Classic Load Balancer (provides basic load balancing across multiple Amazon EC2 instances).