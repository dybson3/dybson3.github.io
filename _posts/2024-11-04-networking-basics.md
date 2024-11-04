---
layout: default
title: "Understanding TCP/IP Protocol"
author: "Bartosz Dybski"
date: 2024-11-04
categories: networking
tags: [networking, TCP/IP]
---
# Understanding Networking Concepts: An Introduction to the OSI Model and IP Addresses

Have you ever wondered why an IP address is necessary to access the Internet? Or if it really can identify you as a unique user? Curious about what happens to a packet as it travels across the network? If you’re intrigued, let’s dive in and answer these questions with a closer look at some foundational networking concepts!


## Prerequisites

A basic familiarity with terms like "IP address" and "TCP port number" will help, but you don’t need deep technical knowledge to get started. If you're new to these concepts, you might find value in exploring a Pre-Security learning path for foundational terms and knowledge.


---

## Introducing the OSI Model

The OSI (Open Systems Interconnection) model is a conceptual framework developed by the International Organization for Standardization (ISO). It defines how communications should occur in a networked environment, structured into seven layers:

![obraz](https://github.com/user-attachments/assets/30c43d7f-97c7-49d2-8464-df3e81357c3e)

The numbering starts at the Physical layer (Layer 1) and ends with the Application layer (Layer 7). Understanding the layers and their functions can help make sense of networking equipment and terminology like “Layer 3 switches” and “Layer 7 firewalls.”

### Layer 1: Physical Layer

The Physical Layer establishes the hardware connection, such as cables or wireless signals, and defines binary transmission (0s and 1s). Transmission methods vary: from electrical to optical signals over fiber and wireless frequencies like 2.4 GHz or 5 GHz in Wi-Fi.

### Layer 2: Data Link Layer

This layer manages communication protocols over the same network segment, with MAC addresses enabling devices to connect reliably. Common protocols include Ethernet (802.3) and Wi-Fi (802.11).

### Layer 3: Network Layer

The Network Layer, also known as the IP layer, enables communication between devices across different networks. It handles logical addressing, usually with IP addresses, and routes packets based on network paths.

### Layer 4: Transport Layer

The Transport Layer manages data transfer between applications across hosts. Protocols like TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate here, determining reliability and speed of data delivery.

### Layer 5: Session Layer

This layer sets up, maintains, and ends communication sessions between applications. Examples include NFS (Network File System) and RPC (Remote Procedure Call).

### Layer 6: Presentation Layer

Handling data encoding, encryption, and compression, the Presentation Layer ensures that data is compatible between systems. Encoding examples include ASCII and Unicode, and protocols include JPEG, GIF, and MIME.

### Layer 7: Application Layer

Finally, the Application Layer provides network services to user applications. You might recognize protocols here like HTTP, FTP, SMTP, and DNS that power everyday web services.

---

## Understanding IP Addresses

Every device on a network needs a unique identifier, its IP address, to communicate effectively. IP addresses come in two versions: IPv4 and IPv6, with IPv4 still being the most common. IPv4 addresses are composed of four numbers between 0 and 255, divided into segments called octets. This format allows for approximately 4 billion unique addresses, which isn’t quite enough in today’s digital world, leading to the development of IPv6.

Your IP address is like your home address on the internet, identifying you uniquely within a network. In practice, IP addresses are often dynamic or “public” for web access, while private IP addresses are isolated to a specific network, such as a home or office setup.

### Private and Public IP Addresses

There are two main types of IP addresses:

1. **Public IP addresses**: Unique on the global internet, allowing devices to be reachable from anywhere.
2. **Private IP addresses**: Restricted to local networks and must be translated to public IPs (usually via NAT – Network Address Translation) to access the wider internet.

Private IP Ranges are defined by RFC 1918 and include:

- 10.0.0.0 - 10.255.255.255
- 172.16.0.0 - 172.31.255.255
- 192.168.0.0 - 192.168.255.255

---

## Routing and Transport Protocols

Routers handle packets by directing them toward their destination through the best route, much like a post office sorting mail by address. Each packet may pass through multiple routers before arriving at the final destination.

The **UDP** protocol allows fast, connectionless communication, ideal for real-time services but without delivery guarantees. By contrast, **TCP** ensures reliable, ordered data transmission, essential for applications where data integrity is crucial.

---

## Conclusion

The OSI model and TCP/IP protocols form the backbone of network communication, allowing devices worldwide to connect and exchange information. Understanding these layers provides essential insight into how networks function, equipping you with knowledge for both basic troubleshooting and advanced networking concepts.

Stay tuned as we dive deeper into each layer and protocol in our upcoming articles!

The OSI Model image was taken from tryhackme website: [tryhackme.com](https://tryhackme.com) (I have active subscription and I do recommend tryhackme for cyber education.)
