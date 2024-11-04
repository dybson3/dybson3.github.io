---
layout: default
title: "Pyramid of Pain"
author: "Bartosz Dybski"
date: 2024-11-04
categories: concepts
tags: [Concepts, SOC]
---

# Pyramid of Pain

The Pyramid of Pain is a conceptual framework designed by David Bianco to illustrate the different types of indicators of compromise (IOCs) in cybersecurity, as well as the challenges attackers face as defenders learn to detect and counteract their techniques. This article explores how different types of indicators—hash values, IP addresses, domain names, host artifacts, network artifacts, tools, and TTPs (Tactics, Techniques, and Procedures)—fit into this pyramid structure and how each can be leveraged to defend against adversaries.

![obraz](https://github.com/user-attachments/assets/1e4be21b-2df5-497a-9164-3556b2ff42ff)
[Source](https://zvelo.com/pyramid-of-pain/)

## Understanding Hash Values

Microsoft defines a hash value as a numeric value of fixed length that uniquely identifies data. Hash values result from hashing algorithms, which convert data into a consistent output. Common hashing algorithms include:

- **MD5 (Message Digest)**: Designed by Ron Rivest in 1992, MD5 is a widely used cryptographic hash function that produces a 128-bit hash value. However, MD5 is no longer considered secure due to its vulnerability to hash collisions, as detailed in RFC 6151.
- **SHA-1 (Secure Hash Algorithm 1)**: Developed by the NSA in 1995, SHA-1 generates a 160-bit hash value. NIST deprecated SHA-1 in 2011 due to brute-force attack vulnerabilities and recommends SHA-2 or SHA-3 as stronger alternatives.
- **SHA-2 (Secure Hash Algorithm 2)**: Created by NIST and the NSA in 2001, SHA-2 offers several variants, with SHA-256 being the most common. It generates a 256-bit hash value, making it a reliable and widely used hash function.

Hash values are critical in identifying specific malware samples or malicious files, allowing security professionals to track and reference threats uniquely. Resources like The DFIR Report and FireEye Threat Research Blogs often provide hashes of malicious files for reference.

Online tools such as **VirusTotal** and **Metadefender Cloud** can be used to look up hashes and identify known threats based on hash values.

## IP Addresses: Identification with Fast Flux

IP addresses are essential identifiers for devices on a network, from desktops to CCTV cameras. In the context of the Pyramid of Pain, IP addresses appear in green, indicating they are relatively easy for attackers to change. Defenders often block known malicious IPs, but sophisticated adversaries use techniques like **Fast Flux** to evade detection.

**Fast Flux** is a DNS technique used by botnets to disguise malicious activities by constantly rotating IP addresses associated with a domain name. This technique makes it harder for security teams to track communication between malware and its command and control (C2) servers. For an in-depth fictional scenario illustrating Fast Flux, see Palo Alto's "Fast Flux 101."

## Domain Names: The Teal Zone

As we move up the Pyramid of Pain, domain names enter the teal zone. Domain names map IP addresses to memorable text strings (e.g., `evilcorp.com`). Malicious actors often hide behind URL shorteners to disguise harmful links, with popular services including:

- bit.ly
- goo.gl
- ow.ly
- tinyurl.com

Changing domains is more challenging than switching IP addresses, as it typically involves registering a new domain and updating DNS records. Despite this, some DNS providers have loose standards, making it easier for attackers to modify domains.

## Host Artifacts: The Yellow Zone

Host artifacts, such as registry values, process executions, and indicators of compromise (IOCs), fall within the yellow zone of the Pyramid of Pain. Detection at this level can frustrate attackers, as they must alter their attack tools or methodologies. Identifying these artifacts buys defenders time to respond and mitigate ongoing threats.

## Network Artifacts

Network artifacts—like user-agent strings, C2 data, and URI patterns—are also in the yellow zone. Detection at this level can force attackers to reconfigure their tools. Wireshark and TShark are valuable tools for analyzing network artifacts, allowing defenders to track unusual activity patterns. Intrusion Detection Systems (IDS) like **Snort** can also log suspicious network behaviors.

## Tools: The Orange Zone

The orange zone marks a significant hurdle for attackers, as they must now change the utilities they rely on, such as malware droppers, backdoors, or password crackers. Detection techniques like antivirus signatures, YARA rules, and fuzzy hashing (e.g., **SSDeep**) help defenders identify similar malicious files or payloads, making it harder for attackers to bypass detection.

Security resources such as **MalwareBazaar** and **Malshare** offer malicious samples and YARA results, aiding in threat hunting. **SOC Prime Threat Detection Marketplace** provides detection rules for recent threats and vulnerabilities, adding another layer of defense.

## TTPs: The Apex of the Pyramid

At the top of the Pyramid of Pain lie TTPs—Tactics, Techniques, and Procedures—representing the entire workflow of an attacker. The MITRE ATT&CK Matrix offers a comprehensive guide to TTPs, detailing the adversary’s methods, from initial access to data exfiltration. Defending at this level requires extensive monitoring, such as tracking **Windows Event Logs** to detect techniques like Pass-the-Hash attacks.

Effective detection of TTPs can stop attackers in their tracks. For example, identifying lateral movement early on allows defenders to isolate compromised hosts and prevent further infiltration. At this stage, attackers face two options:

1. Redesign their tools and techniques to evade detection
2. Abandon the attack and seek an easier target

The latter is often the preferred choice, as reconfiguring tools and learning new techniques is resource-intensive.

## Putting the Pyramid of Pain into Practice

Armed with the Pyramid of Pain model, defenders can take a proactive stance against threats. To practice applying this framework, explore an APT (Advanced Persistent Threat) group of your choice. Identify their indicators and determine where each falls on the Pyramid of Pain. Consider what detection rules or techniques could disrupt their operations.

As David Bianco explains, "The amount of pain you cause an adversary depends on the types of indicators you are able to make use of." With this knowledge, you can enhance your defensive posture and make it increasingly difficult for attackers to operate within your environment.
