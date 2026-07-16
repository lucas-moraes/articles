---
title: IAM
date: 2026-07-03
tags: [us, aws, devops, roadmap]
#
---

### IAM
IAM, or **Identity and Access Management**, in AWS is a service that enables you to manage access to AWS services and resources securely. It allows you to create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources. The service includes features like shared access to your AWS account, granular permissions, identity federation (including active directory integration), multi-factor authentication (MFA), and providing temporary access for users, among others. IAM is a universal system, meaning it's globally accessible and does not depend on specific regions.  

**🟠 Policies**.  
Policies in Amazon IAM (Identity and Access Management) are documents that act as containers for permissions. They are expressed in JSON format in IAM and they define the actions, effects, resources, and optional conditions. There are two types of policies: identity-based policies and resource-based policies. Identity-based policies are attached to an IAM identity, and resource-based policies are attached to a resource. These policies specify what actions are allowed or denied on what resources, under what conditions. They are your primary tool in defining and managing permissions in AWS.  

**🟠 Identity-Based**  
"Identity-based policies" are one of the types of policies you can create in AWS (Amazon Web Services). They are attached directly to an identity (like an IAM user, group, or role) and control what actions that identity can perform, on which resources, and under what conditions. There are two types - inline and managed. Inline policies are created and managed individually, while managed policies are standalone policies that you can attach to multiple identities. This offers a flexible framework for managing permissions across your AWS resources. These policies are written in a language called JSON (JavaScript Object Notation).  

**🟠 Resource-Based**  
Resource-based policies are attached directly to the AWS resources that receive the permissions. The policy then specifies what actions are allowed or denied on that particular resource. In resource-based policies, you include a Principal element in the policy to indicate the IAM users or roles that are granted the permissions. While not all AWS services support resource-based policies, common services that do include Amazon S3 for bucket policies, AWS KMS for key policies, and Amazon SNS for topic policies.  

**🟠 Users / User Groups**.  
In AWS Identity and Access Management (IAM), a Users Group is a collection of IAM users. Groups enable you to specify permissions for multiple users, making it easier to manage the permissions for those users. For example, you could have a group called "Developers" and give that group the necessary permissions for developing in your environment. If a new developer joins your organization, rather than defining permissions specifically for that user, you can add the user to the "Developers" group to assign those permissions. Remember, each AWS IAM user in a group inherits the permission policies attached to the group.

**🟠 Roles**.  
IAM Roles in AWS are a form of secure access control that do not directly associate with specific users or groups. Instead, trusted entities such as AWS users, applications or services (like EC2) can take on roles to obtain temporary security credentials for making AWS API requests. The structure of roles lets you delegate access with defined permissions, helping to keep your environment secure. Moreover, because roles yield temporary credentials for navigation within AWS, you won't have to deal with long-term keys.

**🟠 Instance Profiles**.  
Instance profiles are AWS IAM entities that you can use to grant permissions to applications running on your EC2 instances. They effectively allow your instances to make secure API requests. An instance profile is essentially a container for an AWS Identity and Access Management (IAM) role that you can use to pass roles to EC2 instances at launch time. Once an IAM role is associated with an instance at launch time, we can't change the role. However, you can modify the permissions policies attached to the role, and the updated permissions do take effect immediately.  

**🟠 Assuming Roles**.  
Assuming roles in AWS allows one AWS identity to perform actions and access resources in another AWS account, without having to share security credentials. This is achieved using temporary security credentials. You assume a role by calling the **AWS Security Token Service (STS)** AssumeRole APIs, passing the ARN of the role to assume. After successfully assuming a role, STS returns temporary security credentials that you can use to make requests to any AWS service. The assumed role provides specific permissions that determine what the role user can and cannot do. Thus, users can switch between roles using AWS Management Console, AWS CLI, or AWS API.





















 