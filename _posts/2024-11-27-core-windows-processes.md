---
layout: default
title: "Core Windows Processes"
author: "Bartosz Dybski"
date: 2024-11-27
categories: operating-systems
tags: [Windows, Processes, Endpoint]
---

# System Processes Overview

![obraz](https://github.com/user-attachments/assets/3ced2327-3134-4d0d-8744-9ffa90d3f50e)

## Introduction

Understanding system processes is essential for maintaining a secure and stable operating system. These processes are the backbone of Windows OS functionality, managing everything from user sessions to critical system operations. Each process has specific responsibilities, and any anomalies in their behavior could indicate misconfigurations or malicious activity. This article provides an overview of key Windows processes, their roles, and characteristics, including signs of unusual behavior that could signify security threats.

---

## System Process
- **Process ID (PID):** 4  
- **Parent Process:** System Idle Process (PID: 0)  

---

## Session Manager Subsystem (`smss.exe`)
### Description:
- First user-mode process started by the kernel.
- Creates sessions and launches critical processes like `csrss.exe` and `wininit.exe` for:
  - Session 0 (OS session)
  - Session 1 (User session)
- Manages environment variables and virtual memory paging files.

### Unusual Characteristics:
- Parent process is not System (PID: 4).
- Image path differs from `C:\Windows\System32`.
- More than one running instance (child processes should self-terminate).
- Running under a non-SYSTEM user account.
- Unexpected registry entries for the subsystem.

---

## Client Server Runtime Process (`csrss.exe`)
### Description:
- Critical for system operation; handles:
  - Console windows.
  - Process/thread creation and deletion.
- Loads essential libraries, including:
  - `csrsrv.dll`
  - `basesrv.dll`
  - `winsrv.dll`

---

## Windows Initialization Process (`wininit.exe`)
### Description:
- Launches critical processes:
  - `services.exe` (Service Control Manager)
  - `lsass.exe` (Local Security Authority)
  - `lsaiso.exe`
- Operates in Session 0 and manages child processes.

---

## Service Control Manager (`services.exe`)
### Description:
- Manages system services, device drivers, and maintains a service database accessible via `sc.exe`.
- Updates the Last Known Good Configuration.

### Details:
- **Image Path:** `%SystemRoot%\System32\services.exe`  
- **Parent Process:** `wininit.exe`  
- **Number of Instances:** One  
- **User Account:** Local System  
- **Start Time:** Within seconds of boot time.

### Unusual Characteristics:
- Parent process is not `wininit.exe`.
- Image path differs from `C:\Windows\System32`.
- Subtle misspellings in the process name.
- Multiple running instances.
- Running as a non-SYSTEM account.

---

## Service Host (`svchost.exe`)
### Description:
- Hosts and manages Windows services.
- Instances run under different accounts, depending on the hosted service.

### Details:
- **Image Path:** `%SystemRoot%\System32\svchost.exe`  
- **Parent Process:** `services.exe`  
- **Number of Instances:** Many  
- **User Account:** Varies (SYSTEM, Network Service, Local Service, or logged-in user).  
- **Start Time:** Typically seconds after boot.

### Unusual Characteristics:
- Parent process is not `services.exe`.
- Image path differs from `C:\Windows\System32`.
- Misspellings in the process name.
- Missing `-k` parameter.

---

## Local Security Authority Subsystem Service (`lsass.exe`)
### Description:
- Enforces security policy, verifies logins, and writes to the Windows Security Log.

### Details:
- **Image Path:** `%SystemRoot%\System32\lsass.exe`  
- **Parent Process:** `wininit.exe`  
- **Number of Instances:** One  
- **User Account:** Local System  
- **Start Time:** Within seconds of boot time.

### Unusual Characteristics:
- Parent process is not `wininit.exe`.
- Image path differs from `C:\Windows\System32`.
- Misspellings in the process name.
- Multiple running instances.
- Running as a non-SYSTEM account.

---

## Windows Logon Process (`winlogon.exe`)
### Description:
- Manages the Secure Attention Sequence (Ctrl+Alt+Del) and user profile loading.

### Details:
- **Image Path:** `%SystemRoot%\System32\winlogon.exe`  
- **Parent Process:** `smss.exe` (self-terminates, so typically absent in tools).  
- **Number of Instances:** One or more (e.g., Remote Desktop, Fast User Switching).  
- **User Account:** Local System  
- **Start Time:** Seconds after boot for Session 1.

### Unusual Characteristics:
- Parent process is visible.
- Image path differs from `C:\Windows\System32`.
- Misspellings in the process name.
- Not running as SYSTEM.
- Registry shell value differs from `explorer.exe`.

---

## Windows Explorer (`explorer.exe`)
### Description:
- Provides user interface components like the Start Menu, Taskbar, and file access.

### Details:
- **Image Path:** `%SystemRoot%\explorer.exe`  
- **Parent Process:** `userinit.exe` (self-terminates).  
- **Number of Instances:** One or more (one per logged-in user).  
- **User Account:** Logged-in user(s).  
- **Start Time:** Upon first interactive user login.

### Unusual Characteristics:
- Parent process is visible.
- Image path differs from `C:\Windows`.
- Running under an unknown user.
- Misspellings in the process name.
- Outbound TCP/IP connections.

## Examples of Anomalies in Processes

### Example 1: Suspicious `smss.exe` Behavior
If you observe multiple instances of `smss.exe` running, or if its image path is not located in `C:\Windows\System32`, this could indicate a malicious or misconfigured subsystem process.

### Example 2: Misspelled Process Names
Processes like `lsass.exe` or `svchost.exe` are often targeted by attackers who create similarly named files, such as `lsasss.exe` or `svhost.exe`. These subtle misspellings can trick users into overlooking malicious processes.

### Example 3: Unauthorized User Accounts
Processes such as `winlogon.exe` or `services.exe` should run under SYSTEM or Local System accounts. If they appear to be running under a different or unknown user account, this is a strong indicator of compromise.

### Example 4: Unusual Network Activity
`explorer.exe` or `svchost.exe` establishing unexpected outbound TCP/IP connections could suggest malicious activity, such as data exfiltration or command-and-control communication.

---

By familiarizing yourself with the normal characteristics of these processes and their potential anomalies, you can better identify and respond to security incidents. Regular monitoring and validation of these processes are key to maintaining system integrity and security.
