---
title: EC2
date: 2026-06-30
tags: [us, aws, devops, roadmap]
#
---

### EC2
**Amazon Elastic Compute Cloud (EC2)** is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. EC2 enables you to scale your compute capacity, develop and deploy applications faster, and run applications on AWS's reliable computing environment. You have the control of your computing resources and can access various configurations of CPU, Memory, Storage, and Networking capacity for your instances.  

**🟠 Instance Types**.  
AWS EC2 instances come in a variety of types optimized to fit different use cases. They are grouped into categories depending on their performance capacity and pricing structure. There are **five categories of instance types** including General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, and Accelerated Computing instances. Each category is suited best for specific workloads and they consist of different instance types each given a specific name, for example, 't2.micro'. Each instance type has a specific amount of CPU, memory, storage, and network capacity. Understanding the workloads of your applications can help you determine which instance type would be best suited to your needs.

**🟠 Categories**.  

---

**↘ General Purpose**: These instances offer a balance of compute, memory, and networking resources. They are ideal for applications that use these resources in equal proportions.

 * **T Family (e.g., T3, T4g)**: Burstable performance instances. They accumulate CPU credits when idle and spend them during traffic spikes. Great for test/dev environments, small web servers, and microservices.

 * **M Family (e.g., M6i, M7g, M8i)**: Consistent and balanced performance. Ideal for application servers, mid-size databases, and enterprise backends.

 * **Mac Family**: Actual Apple Mac computers in the cloud, designed for building, testing, and signing apps for the Apple ecosystem (iOS, macOS).

**↘ Compute Optimized**: Focused on high-performance processors. They have a higher ratio of vCPUs to memory compared to other families.

 * **C Family (e.g., C6i, C7g, C8ine)**: Perfect for high-performance web servers, dedicated gaming servers, video encoding/transcoding, batch processing, and scientific modeling.

 * **Hpc Family**: Purpose-built for High-Performance Computing at scale (e.g., large-scale fluid dynamics, weather forecasting).

**↘ Memory Optimized**: Designed to deliver fast performance for workloads that process massive datasets directly in memory (RAM).

 * **R Family (e.g., R6i, R7g, R8in)**: The go-to choice for high-performance relational databases and in-memory caching layers (like Redis and Memcached).

 * **X Family (e.g., X2gd, X2iezn)**: Engineered for massive scale, enterprise-grade in-memory databases like SAP HANA and heavy Big Data processing.

 * **Z Family (e.g., z1d)**: Provides high memory capacity combined with extremely fast, high-frequency sequential CPU performance.

**↘ Accelerated Computing**: These instances use hardware accelerators (such as GPUs, FPGAs, or ASICs) to perform parallel floating-point calculations and massive graphic processing efficiently.

 * **G & P Families (e.g., G5, G6, P4, P5)**: Equipped with powerful GPUs (typically NVIDIA or AMD). They are the industry standard for Machine Learning / AI training, 3D rendering, and cloud gaming.

 * **Inf & Trn Families (e.g., Inf2, Trn1)**: Powered by AWS's custom chips (Trainium and Inferentia), optimized for high-performance, cost-effective AI training and inference.

 * **F Family**: Equipped with field-programmable gate arrays (FPGAs) for custom hardware acceleration.

**↘ Storage Optimized**: Designed for workloads that require high, sequential read and write access to very large datasets on local storage.

 * **I Family (e.g., I3, I4i)**: Features ultra-fast local NVMe SSD storage. Ideal for NoSQL databases (Cassandra, MongoDB) and data warehousing.

 * **D & H Families (e.g., D3, H1)**: Focused on high-density magnetic storage (HDD). Perfect for distributed file systems (like Hadoop MapReduce) and massive log analysis.

---

**💡 Decoding the AWS Naming Convention**
If you encounter an instance type like m7g.xlarge, you can easily break it down:

 * **m (Family)**: General Purpose.

 * **7 (Generation)**: The higher the number, the newer and more cost-efficient the underlying hardware.

 * **g (Processor Attribute)**: Indicates it uses AWS Graviton processors (ARM-based architecture, highly cost-efficient). Other common letters include i for Intel, a for AMD, and d for attached local NVMe storage.

 * **xlarge (Size)**: Determines the scale of vCPUs, memory, and bandwidth (ranging from nano and micro up to 48xlarge or metal).

---

**🟠 How does EC2 instance works?**.  
To understand how an EC2 instance works inside AWS, it helps to look at it as a virtual computer running on a massive physical server in one of Amazon's data centers.  
AWS uses a technology called virtualization to slice a single, powerful physical computer into multiple isolated virtual machines (instances).  
Here is a step-by-step breakdown of how an EC2 instance operates behind the scenes:

**↘ The Physical Layer: Host Computers and the Hypervisor**
At the base of EC2 is physical hardware: racks of servers equipped with CPUs, RAM, hard drives, and network cards.

 * **The Hypervisor**: AWS installs a specialized layer of software called a hypervisor directly onto this physical hardware. AWS primarily uses a custom-built hypervisor called AWS Nitro.

 * **Resource Allocation**: The hypervisor acts as a traffic cop. When you launch an EC2 instance, the hypervisor carves out a specific slice of the physical CPU, RAM, and network capacity and assigns it exclusively to your virtual machine.

 * **Isolation**: The hypervisor ensures that your instance is completely secure and isolated from other instances running on the same physical hardware. One tenant cannot see or access another tenant's data.

**↘ The Blueprint: Amazon Machine Images (AMI)**
An EC2 instance cannot run without an Operating System (OS). When you launch an instance, you must select an AMI.

 * The AMI is a pre-configured template that contains the OS (e.g., Ubuntu, Amazon Linux, Windows Server) and sometimes pre-installed software (like a web server or database).

 * The hypervisor loads this AMI into the allocated virtual storage and memory to boot up your instance, just like turning on a brand-new computer.

---

**🟠 CPU Credits**.  
AWS EC2 instances earn CPU Credits when they are idle and consume CPU credits when they are active. A CPU credit provides the performance of a full CPU core for one minute. **T2 and T3 instances accrue CPU Credits and use them to burst beyond their baseline performance**. For example, a t2.micro instance receives credits continuously at a rate of 6 CPU Credits per hour. The credit balance of an instance can be saved for up to 7 days. When the instance does not have any CPU credits, it performs at the baseline. It's important to note that CPU credit pricing is different and additional to the instance pricing. AWS also offers Unlimited mode for instances that need to burst beyond the baseline performance for extended periods.

**🟠 Storage / Volumes**.  
In AWS, an **Amazon EBS (Elastic Block Store)** is the storage volume used by EC2 (Elastic Compute Cloud) instances. It is designed for data durability, and Amazon EBS volumes automatically replicate within their Availability Zone to prevent data loss due to failure of any individual component. EBS volumes are attached to an EC2 instance, and appear as a network drive that you can mount and format using the file system of your choice. You can use Amazon EBS as the primary storage for data that requires frequent updates, such as a system drive for an instance or storage for a database application.

**🟠 Keypairs**.  
Key pairs are part of Amazon EC2 and are used to securely log into your instances. A key pair consists of a public key and a private key. Amazon EC2 generates the key pair and gives you the private key, whereas the public key is stored with AWS. When you launch an EC2 instance, you specify the name of the key pair. You can then use the private key to securely connect to your instance. Key pairs are region-specific, meaning you need to create separate key pairs for each region in which you operate your instances.

**🟠 Elastic IP**.  
"Elastic IP" in AWS EC2 is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is associated with your AWS account not a particular instance, and you control that address until you choose to explicitly release it. Unlike traditional static IP addresses, however, Elastic IP addresses allow you to mask the failure of an instance or software by rapidly remapping the address to another instance in your account.

**🟠 User Data Scripts**.  
"User Data Scripts" in EC2 instances are used to perform common automated configuration tasks and even run scripts after the instance starts. These scripts run as the root user, and can be used to install software or download files from an S3 bucket. You can pass up to 16 KB of data to an instance, either as plain text or base64-encoded. The User Data script is executed only one time when the instance is first launched. If you stop and start the instance, the script does not run again. However, it will run on every boot if the instance reboots.

**🟠 Purchasing Options**.  
Amazon EC2 provides several purchasing options to fit different workload needs. 
The **On-Demand** option allows clients to pay for compute capacity per hour with no long-term commitments. 
**Reserved Instances** provide a significant discount compared to On-Demand pricing and are ideal for applications required steady state usage. 
**Spot Instances** allow clients to bid for unused Amazon EC2 capacity and can provide significant savings if flexibility is possible in starting and stopping times. 
**Dedicated Hosts** are physical EC2 servers dedicated to specific clients, suitable for regulatory requirements and licenses which do not support multi-tenant virtualization.
**Savings Plans** offer reduced rates for committing to a consistent amount of usage for 1 or 3 years.













