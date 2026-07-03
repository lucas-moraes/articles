---
title: VPC
date: 2026-06-30
tags: [us, aws, devops, roadmap]
#
---

### VPC
Amazon VPC (Virtual Private Cloud) is a service that lets you launch AWS resources in a logically isolated virtual network that you define. It provides advanced security features such as security groups and network access control lists to enable inbound and outbound filtering at the instance and subnet level. Additionally, you can create a Hardware Virtual Private Network (VPN) connection between your corporate datacenter and your VPC to leverage the AWS cloud as an extension of your corporate datacenter.  

**🟠 CIDR Blocks**.  
"CIDR" stands for **Classless Inter-Domain Routing**. In AWS VPC, a CIDR block is the IP address block from which private IPv4 addresses and public IPv4 addresses are allocated when you create a VPC. The CIDR block can range from /28 (16 IP addresses) to /16 (65,536 IP addresses). It represents a network segment and is associated with a network boundary. Upon creation, you cannot change the CIDR block of your VPC, but you can add additional CIDR blocks to it if needed. A VPC's CIDR block should not overlap with any of the existing network's CIDR blocks.  

**🟠 Subnets**.  
Subnets or subnetworks in Amazon VPC (Virtual Private Cloud) are divisions of a VPC's IP address range. You can launch Amazon Elastic Compute Cloud (Amazon EC2) instances into a selected subnet. When you create a subnet, you specify the CIDR block for the subnet, which is a subset of the VPC CIDR block. Each subnet must be associated with a route table, which controls the traffic flow between the subnets. There are two types of subnets: public and private. A public subnet is one in which the associated route table directs the subnet to the Internet Gateway (IGW) of the VPC. A private subnet does not have a route to the IGW and hence has no direct route to the internet.  

 * **Private Subnet**: Private subnets in AWS are isolated network segments within your VPC that do not have direct access to the internet. You can use private subnets to run services and applications that should not be directly accessible from the outside world, but still need to communicate with other resources within your VPC. Any instances launched in a private subnet cannot directly send traffic to the internet without routing through a NAT device.

 * **Public Subnet**: In AWS, a subnet that's designated as public is one that has direct access to the Internet. Each subnet that you create runs on its own portion of the AWS network, and you can consider them as logically isolated sections. When a subnet is designated as public, it means an Internet Gateway is attached to it and thus instances within this subnet can easily communicate with the outside net. Each instance that you launch into a public subnet is automatically assigned a private IPv4 address and a public IPv4 address. These addresses don't change and remain with the instance, until it's stopped, terminated or replaced with a different address. This setup allows instances in the public subnet to communicate directly with the internet and other AWS services.  

**🟠 Route Tables**.  
A Route Table in AWS VPC is a set of rules, called routes, that are used to determine where network traffic is directed. Each subnet in your VPC must be associated with a route table, which controls the traffic for the subnet. By default, your VPC has a main route table that you can modify. You can also create additional custom route tables for your VPC. A subnet can only be associated with one route table at a time, but you can change the association.  

**🟠 Security Groups**.  
Security Groups in AWS act as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security Groups are stateful — if you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules. You can specify allow rules, but not deny rules. You can specify separate rules for inbound and outbound traffic. Therefore, if you need to allow specific communication between your instances, you'll need to configure both outbound rules for the sender security group and inbound rules for the receiver security group.  

**🟠 Internet Gateway**  
An **Internet Gateway** is a redundant, horizontally scalable component in AWS that performs bi-directional routing between a VPC and the Internet. It serves two purposes:
1. routing outbound traffic from the VPC to the internet (NAT);
2. routing inbound traffic from the Internet to the VPC;
It's automatically highly available and provides bandwidth and redundancy across all AWS Regions. It becomes associated with a VPC upon creation, and cannot be detached or attached to another VPC once created. Security to and from the Internet Gateway can be controlled using route tables and security groups or network ACLs.  

**🟠 NAT Gateway**.  
AWS NAT Gateway is a managed service that provides source Network Address Translation (NAT) for instances in a private subnet so they can access the internet securely. It's designed to operate automatically, handling bandwidth scaling, failover, and managing carrier IP addresses. **With NAT Gateway, instances within a VPC can access the internet for software updates, patches, etc, but inbound traffic from the internet is prevented, helping maintain the security and privacy of the private subnet.** NAT Gateway is redundant within the Availability Zone, providing high availability. It supports TCP, UDP, and ICMP protocols, as well as Port Address Translation (PAT).





















