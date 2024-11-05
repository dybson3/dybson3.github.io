---
layout: default
title: "Unified Kill Chain"
author: "Bartosz Dybski"
date: 2024-11-05
categories: concepts
tags: [Concepts, Frameworks]
---

## Overview of the Unified Kill Chain (UKC)

Developed by Paul Pols in 2017, the Unified Kill Chain (UKC) is a cybersecurity framework that complements other models, such as Lockheed Martin’s Cyber Kill Chain and the MITRE ATT&CK framework. The UKC outlines 18 phases an attacker may go through, offering a comprehensive and realistic view of modern cyber attack strategies. Unlike other models, which may contain only a few stages, the UKC captures the entire process from initial reconnaissance to data exfiltration, accounting for iterative and recurring actions attackers might take.

### Benefits of the UKC Framework

- **Modern and Detailed**: Released in 2017 and updated in 2022, the UKC is designed for the contemporary cybersecurity landscape, with 18 stages compared to fewer phases in older frameworks.
- **Realistic Attack Scenarios**: The UKC reflects real-world attacks, where attackers often repeat phases like reconnaissance to pivot to new targets.
- **Comprehensive Coverage**: The UKC addresses each phase of an attack, including attacker motivations, ensuring defenders can effectively disrupt adversaries at multiple stages.

### Key Phases in the UKC

Below, we’ll explore several key phases of the Unified Kill Chain, which represent essential tactics used by adversaries to infiltrate systems, maintain access, and accomplish their objectives.

---

![obraz](https://github.com/user-attachments/assets/6928f616-4caf-4860-a05d-86fa64a89fe5)
[Source](https://www.unifiedkillchain.com/assets/The-Unified-Kill-Chain.pdf)

## Key Phases of the Unified Kill Chain

### 1. Reconnaissance (MITRE Tactic TA0043)
In the reconnaissance phase, attackers gather information about their target using both passive and active methods. The collected intelligence is essential for later stages of the attack.

**Examples of reconnaissance activities:**
   - Discovering systems and services running on the target network.
   - Collecting contact information to conduct phishing or social engineering attacks.
   - Locating credentials or other sensitive information.
   - Mapping the network topology to identify potential pivot points.

### 2. Weaponization (MITRE Tactic TA0001)
During weaponization, the attacker prepares the necessary tools and infrastructure for the attack, such as a Command and Control (C2) server to manage malicious activity remotely or crafting malware tailored to the target environment.

## 3. Delivery (MITRE Tactic TA0001)
In the delivery phase, attackers use various technics to deliver "weapon" to their targets. It can be for example an attachment in phishing email.

### 4. Social Engineering (MITRE Tactic TA0001)
Social engineering involves manipulating individuals within the target organization to gain access or information. Common methods include:
   - Convincing a user to open a malicious attachment.
   - Impersonating legitimate websites to collect user credentials.
   - Pretending to be an authorized individual (e.g., an IT technician) to gain physical or virtual access.

### 5. Exploitation (MITRE Tactic TA0002)
In the exploitation phase, the attacker takes advantage of system vulnerabilities to execute code on the target system, such as uploading and running a reverse shell on a web application.

### 6. Persistence (MITRE Tactic TA0003)
Attackers establish persistence to ensure continued access. This could involve:
   - Creating a malicious service on the system.
   - Configuring a backdoor to maintain access even if the initial vulnerability is patched.

### 7. Defense Evasion (MITRE Tactic TA0005)
To avoid detection, attackers deploy tactics to bypass security measures like firewalls, anti-virus software, and intrusion detection systems. This is critical for long-term attacks, as evasion allows attackers to operate unnoticed.

### 8. Command & Control (C2) (MITRE Tactic TA0011)
Command and Control (C2) provides attackers with a remote channel to control the compromised system. They may issue commands, exfiltrate data, or use the system to pivot to other networked devices.

### 9. Pivoting (MITRE Tactic TA0008)
After establishing a foothold, attackers pivot to other systems within the network. This often involves using compromised credentials to access systems that are not directly exposed to the internet.

### 10. Discovery (MITRE Tactic TA0007)
During discovery, attackers probe the compromised system for information, such as active user accounts, applications, files, and configurations, which may assist in further exploitation.

### 11. Privilege Escalation (MITRE Tactic TA0004)
Attackers aim to gain higher privileges, allowing them greater control. They may leverage vulnerabilities to obtain administrator or root access, which enables more destructive activities.

### 12. Execution (MITRE Tactic TA0002)
In the execution phase, attackers deploy their malicious code to accomplish specific goals, such as creating backdoors or setting up scheduled tasks for recurring access.

### 13. Credential Access (MITRE Tactic TA0006)
Attackers attempt to steal credentials to access other systems. Methods include keylogging, credential dumping, and password guessing. With legitimate credentials, they can evade detection by acting as authorized users.

### 14. Lateral Movement (MITRE Tactic TA0008)
Attackers use stolen credentials and elevated privileges to move across the network, accessing additional systems and data.

### 15. Collection (MITRE Tactic TA0009)
Here, attackers gather valuable data, such as files, emails, and other assets. This phase often involves creating packages of data for exfiltration.

### 16. Exfiltration (MITRE Tactic TA0010)
Exfiltration is the act of transferring stolen data out of the target network. Attackers may use encryption and compression to evade detection while transmitting the data to external servers.

### 17. Impact (MITRE Tactic TA0040)
In the impact phase, attackers compromise the integrity and availability of data or systems. Actions may include encrypting files (ransomware), deleting data, or disrupting services to achieve their goals.

### 18. Objectives
Finally, attackers fulfill their ultimate objectives, which may range from financial gain (ransomware) to reputation damage. Understanding these motives helps organizations develop targeted defenses.

---

## Conclusion

The Unified Kill Chain provides a comprehensive view of potential attack pathways, helping cybersecurity professionals understand, anticipate, and mitigate threats at multiple stages. By combining threat modeling with frameworks like the UKC, organizations can bolster their defenses, creating a resilient cybersecurity posture that effectively counters modern threats.
