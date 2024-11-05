---
layout: default
title: "Cyber Kill Chain"
author: "Bartosz Dybski"
date: 2024-11-05
categories: concepts
tags: [Concepts, Frameworks]
---

# Cyber Kill Chain® Framework

The concept of a "kill chain" originated from military strategy, outlining the structure of an attack in phases: target identification, decision-making, attack initiation, and ultimately, target destruction. 

In 2011, Lockheed Martin adapted this idea to create the Cyber Kill Chain® framework for cybersecurity, defining key steps that adversaries use to carry out successful cyber attacks. This model gives organizations a way to analyze and anticipate each phase of a cyber attack, enabling stronger defenses. In this post, we’ll break down each phase of the Cyber Kill Chain and explain how understanding these phases can help protect against attacks such as ransomware, data breaches, and Advanced Persistent Threats (APTs).

![obraz](https://github.com/user-attachments/assets/00790041-cf53-43bf-b721-dd6af988ad1f)
[Source](https://www.bulletproof.co.uk/blog/what-is-the-cyber-kill-chain)

## Why is the Cyber Kill Chain Important?

The Cyber Kill Chain is a critical tool for identifying gaps in network and system security. SOC Analysts, Threat Hunters, Security Researchers, and Incident Responders use it to recognize and mitigate intrusion attempts. By analyzing each phase, defenders can identify weaknesses in an organization’s infrastructure and put controls in place to disrupt adversaries at multiple points.

---

## Phases of the Cyber Kill Chain

### 1. Reconnaissance
The first phase involves gathering information on the target. Adversaries often rely on Open-Source Intelligence (OSINT) to gather details about the organization and its employees. They may collect data on organizational structure, technology stack, employee emails, and other publicly available information. This information helps attackers understand potential entry points and target vulnerabilities.

**Common reconnaissance techniques include:**
   - **Email Harvesting**: Collecting email addresses for phishing campaigns, often from social media, company websites, or third-party data brokers.
   - **Network Scanning**: Using tools to map the target’s infrastructure and identify vulnerable systems.
   - **OSINT Tools**: 
       - `theHarvester`: Gathers emails, names, subdomains, and IP addresses from various public sources.
       - `Hunter.io`: Helps locate contact information associated with company domains.
       - `OSINT Framework`: A categorized collection of tools used for reconnaissance.

### 2. Weaponization
After reconnaissance, attackers prepare a deliverable “weapon” by combining malware and exploit codes. This phase involves creating a payload that can exploit a target’s specific vulnerabilities. A sophisticated attacker may customize the payload to avoid detection, while others purchase pre-built malware from the Dark Web.

**Weaponization techniques include:**
   - **Infected Documents**: Embedding malicious macros or scripts within Office files.
   - **Payload Creation**: Combining exploit code and malware into a single, executable file.
   - **C2 (Command and Control) Implants**: Establishing mechanisms to maintain communication once access is gained.
   - **Backdoor Creation**: Adding covert entry points for re-access.

### 3. Delivery
In this phase, attackers transmit the payload to the target. The method of delivery depends on the adversary's resources, sophistication, and goals. Phishing emails are the most common delivery method, but adversaries can also use physical media or malicious websites.

**Common delivery methods:**
   - **Phishing Emails**: Using spear-phishing (targeted) or mass phishing to deliver the payload.
   - **USB Drops**: Leaving infected USB drives in public spaces to encourage victims to connect them.
   - **Watering Hole Attacks**: Compromising websites frequently visited by the target to serve malicious payloads.

### 4. Exploitation
Exploitation occurs when the payload executes and takes advantage of a vulnerability. Attackers may exploit software flaws, human error, or hardware weaknesses. This phase marks the beginning of unauthorized access, where attackers interact with systems, escalate privileges, or prepare for further compromise.

**Exploitation techniques include:**
   - **Zero-day Exploits**: Taking advantage of unpatched vulnerabilities unknown to the software vendor.
   - **Phishing Links and Attachments**: Encouraging users to click malicious links or open infected files.
   - **Credential Harvesting**: Stealing user credentials for privileged access.

### 5. Installation
In this phase, the adversary installs malware or backdoors to maintain persistent access to the system. Once malware is installed, it often remains dormant until activated by the attacker. This phase allows attackers to evade detection and regain access even if their initial entry is detected.

**Persistence techniques include:**
   - **Web Shells**: Malicious scripts placed on web servers to facilitate ongoing access.
   - **Registry Modifications**: Altering Windows registry keys for persistence.
   - **Startup Modifications**: Adding malicious programs to startup folders for execution on boot.
   - **Scheduled Tasks**: Setting up tasks that periodically run malicious code.

### 6. Command & Control (C2)
Once access is established, attackers need a channel to communicate with the compromised system. Command & Control allows attackers to remotely send commands, receive information, and control the infected machine. The choice of C2 channels often depends on the attacker’s desire to remain undetected.

**Common C2 channels:**
   - **HTTP/HTTPS**: Communicating over web protocols (port 80 or 443) to blend in with legitimate traffic.
   - **DNS Tunneling**: Using DNS requests to evade firewall detection.
   - **Custom Protocols**: For advanced attackers, creating unique protocols to bypass detection.

### 7. Actions on Objectives
The final phase of the Cyber Kill Chain is when attackers achieve their ultimate goals, such as data exfiltration, destruction, or further infiltration. In this phase, attackers can extract sensitive data, escalate privileges, move laterally, or disrupt operations.

**Common actions include:**
   - **Credential Collection**: Harvesting user credentials for privileged systems.
   - **Privilege Escalation**: Gaining higher-level access to increase control.
   - **Data Exfiltration**: Transmitting data from the victim’s network to the attacker’s server.
   - **Lateral Movement**: Moving across the network to compromise additional systems.
   - **Data Destruction**: Deleting backups, overwriting files, or corrupting data.

---

## Limitations of the Traditional Cyber Kill Chain

While valuable, the original Cyber Kill Chain framework has limitations. Designed primarily for malware defense and perimeter security, it may not fully address modern threats like insider attacks or sophisticated threat actor techniques.

Today’s adversaries often combine multiple TTPs (Tactics, Techniques, and Procedures), which the traditional Cyber Kill Chain may not effectively capture. Additionally, insider threats — where trusted individuals misuse their access — are often missed by this model. 

To address these gaps, many cybersecurity professionals recommend using the Cyber Kill Chain in conjunction with models like MITRE ATT&CK or the Unified Kill Chain. These frameworks provide more granular insights into adversary behavior and help defenders implement comprehensive security measures.

---

Understanding the Cyber Kill Chain can empower defenders to anticipate and counteract attackers’ moves, reinforcing an organization’s defenses and reducing the likelihood of a successful cyber attack.
