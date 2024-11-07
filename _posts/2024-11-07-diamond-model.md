---
layout: default
title: "Diamond Model"
author: "Bartosz Dybski"
date: 2024-11-07
categories: concepts
tags: [Concepts, Frameworks]
---

# The Diamond Model of Intrusion Analysis

The **Diamond Model of Intrusion Analysis** was developed in 2013 by cybersecurity professionals Sergio Caltagirone, Andrew Pendergast, and Christopher Betz. It provides a structured approach to understanding cyber intrusions, focusing on four core features: adversary, infrastructure, capability, and victim. These elements form the fundamental atomic structure of any intrusion activity. 

## Why "Diamond" Model?

The Diamond Model is named for the way its core features connect: they are arranged in a diamond shape, each feature linked to others by edges that represent their relationships. The model is also flexible and extensible, allowing analysts to incorporate new concepts and ideas as they emerge in the cybersecurity field. 

![obraz](https://github.com/user-attachments/assets/24b33355-eddd-4724-b589-bca28b8c11f1)

## Core Components of the Diamond Model

1. **Adversary**: The adversary represents the attacker, threat actor, or hacker behind a cyberattack. According to the model’s creators, an adversary is an individual or organization utilizing a capability to achieve a specific goal against a victim. Adversary information can often be sparse at first; however, as an incident unfolds, insights into their motives, tactics, and potential associations may emerge. 

   - **Adversary Operator**: The individual or group executing the attack.
   - **Adversary Customer**: The entity benefiting from the attack, which might or might not be the same as the operator.

2. **Victim**: The victim is the target of the adversary's actions, which could be an individual, organization, system, or even specific email addresses or domains. It's essential to distinguish between:
   - **Victim Personae**: The people or organizations targeted.
   - **Victim Assets**: The systems, networks, or data being exploited.

3. **Capability**: This feature includes the tools, techniques, and tactics used by the adversary. Capabilities can range from simple phishing attempts to sophisticated malware. The **Adversary Arsenal** comprises the combined capabilities available to an adversary. Capabilities may involve:
   - **Capability Capacity**: Vulnerabilities and attack vectors that an adversary can exploit.

4. **Infrastructure**: Infrastructure refers to the physical and logical resources that an adversary uses to launch and maintain attacks, such as command-and-control (C2) servers, compromised domains, or IP addresses. Infrastructure types include:
   - **Type 1**: Owned or controlled directly by the adversary.
   - **Type 2**: Controlled by an intermediary, potentially unaware of their role.

## Meta-Features in the Diamond Model

In addition to the core features, six optional **meta-features** can enrich the Diamond Model:

- **Timestamp**: The exact date and time of an event, providing insights into patterns and timing.
- **Phase**: Represents stages of an attack, aligning with models like the Cyber Kill Chain:
  - Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, and Actions on Objective.
- **Result**: The outcome of the attack, often labeled "success," "failure," or "unknown." It may also map to the **CIA Triad** (Confidentiality, Integrity, Availability).
- **Direction**: Shows the movement of the attack, such as "Victim-to-Infrastructure" or "Infrastructure-to-Victim."
- **Methodology**: The general type of attack, such as phishing or DDoS.
- **Resources**: Requirements for the attack, such as software, knowledge, or funds.

## Social-Political and Technology Axes

Two additional components offer insights into the motivations and technical relationships within the Diamond Model:

- **Social-Political**: Captures adversary motives, which might include financial gain, hacktivism, or espionage.
- **Technology**: Highlights how the adversary's capability and infrastructure interact, such as in a **watering-hole attack**, where legitimate sites are compromised to target specific victims.

## Practical Applications of the Diamond Model

The Diamond Model enables analysts to systematically dissect an attack, offering ways to classify events, correlate data, and forecast future adversary behavior. It also simplifies technical concepts, making them accessible to non-technical audiences, such as business leaders.

By leveraging the Diamond Model, cybersecurity teams can build robust defenses, proactively respond to threats, and communicate complex attack scenarios more effectively.

## Conclusion

The Diamond Model offers a scientific, flexible method to enhance the efficiency of intrusion analysis. With a solid understanding of this model, analysts gain the ability to bring real-time intelligence into network defense, predict adversary moves, and effectively inform both technical and non-technical stakeholders.  
