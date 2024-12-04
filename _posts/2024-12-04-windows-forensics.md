---
layout: default
title: "Windows Forensics 1"
author: "Bartosz Dybski"
date: 2024-12-04
categories: operating-systems
tags: [Windows, Forensics, Endpoint]
---

# Windows Registry: A Forensic Perspective

The Windows Registry is a vital collection of databases that holds configuration data for the operating system. This configuration data includes hardware and software settings, user-specific information, and details about recently used files, connected devices, and programs. This wealth of information is invaluable from a forensic standpoint. In this article, we will explore the structure, utility, and forensic relevance of the Windows Registry, as well as tools for accessing and analyzing its contents.

## Understanding the Windows Registry

The Windows Registry comprises **keys** and **values** that organize and store system settings. When you view the registry through the built-in utility `regedit.exe`, the folders you see are **Registry Keys**. The data stored within these keys are referred to as **Registry Values**. A **Registry Hive** is a file on the disk that contains a set of keys, subkeys, and values.

### Structure of the Registry

The Windows Registry is organized into five primary root keys:

- **HKEY_CURRENT_USER (HKCU):** Stores configuration data for the currently logged-in user, such as user folders, screen colors, and Control Panel settings.  
- **HKEY_USERS (HKU):** Contains all actively loaded user profiles. The HKEY_CURRENT_USER key is a subkey of HKEY_USERS.  
- **HKEY_LOCAL_MACHINE (HKLM):** Contains system-wide configuration settings specific to the computer, regardless of the user.  
- **HKEY_CLASSES_ROOT (HKCR):** A subkey of HKEY_LOCAL_MACHINE\Software that ensures the correct program opens files based on their extension. This key merges information from HKEY_LOCAL_MACHINE\Software\Classes and HKEY_CURRENT_USER\Software\Classes.  
- **HKEY_CURRENT_CONFIG:** Stores information about the current hardware profile used at system startup.

### Registry Hives on Disk

Registry hives are stored as files on the disk, primarily in the `C:\Windows\System32\Config` directory. Key files include:

- `DEFAULT` (mounted on HKEY_USERS\DEFAULT)  
- `SAM` (mounted on HKEY_LOCAL_MACHINE\SAM)  
- `SECURITY` (mounted on HKEY_LOCAL_MACHINE\SECURITY)  
- `SOFTWARE` (mounted on HKEY_LOCAL_MACHINE\SOFTWARE)  
- `SYSTEM` (mounted on HKEY_LOCAL_MACHINE\SYSTEM)  

User-specific hives, such as `NTUSER.DAT` and `USRCLASS.DAT`, are found in user profile directories (`C:\Users\<username>\`).

Additionally, the **AmCache hive** (`C:\Windows\AppCompat\Programs\Amcache.hve`) stores details about programs recently run on the system, including execution times and file paths.

### Transaction Logs and Backups

The Registry maintains **transaction logs** to record changes before they are committed to hive files. These logs, stored alongside hive files with `.LOG` extensions, often contain the latest updates and are valuable for forensic analysis.

Registry backups are stored in `C:\Windows\System32\Config\RegBack` and can help identify deleted or modified keys. These backups are updated every ten days.

---

## Acquiring Registry Data for Forensics

When performing forensics, data acquisition can occur on a live system or a disk image. Directly accessing the registry on a live system is possible using `regedit.exe`, but forensic best practices dictate copying hive files for offline analysis. Since the hive files in `%WINDIR%\System32\Config` are protected, specialized tools are required for extraction:

- **KAPE:** A command-line and GUI tool for live data acquisition and analysis.  

![48b9656c4037d0537bf517d6084517a8](https://github.com/user-attachments/assets/5c003f6d-4c82-4f5d-8bff-bc2e5310415a)

- **Autopsy:** A forensic tool that extracts files from live systems or disk images.

![5faf350078f7e7e1d1400f46e11e74a9](https://github.com/user-attachments/assets/10a60d16-7ccb-4f95-a905-1dc73630f28c)


- **FTK Imager:** Similar to Autopsy, it supports file extraction from disk images or live systems.

![08b1f97dd47b33c4261fb362d49ac929](https://github.com/user-attachments/assets/e7fb7821-4a87-4fb8-b1f4-423bbeeada3c)

---

## Tools for Registry Analysis

Once registry hives are acquired, they must be loaded into specialized tools for detailed analysis. Key tools include:

- **Registry Viewer:** Mimics the Windows Registry Editor interface but loads only one hive at a time.

  ![888afb265fa265d771dc02ae8f610dc0](https://github.com/user-attachments/assets/42728dd5-f8d4-42e6-86eb-1a663e4a70f1)

  
- **Registry Explorer:** Developed by Eric Zimmerman, this tool can load multiple hives simultaneously and parse transaction logs for more comprehensive analysis. It also includes a "Bookmarks" feature for quick access to significant keys.  

![414dee2639b9456334c9580aacdc2be1](https://github.com/user-attachments/assets/96167269-a171-44fd-b282-ebf96fa3585e)

- **RegRipper:** A utility that extracts key forensic data from registry hives into a text-based report. It is available in both CLI and GUI versions.

![70e6fef3920cb9b0443bc1fa9d9fac5d](https://github.com/user-attachments/assets/74927936-ec94-4bfa-80c9-d5242a05f42e)


---

## Key Forensic Locations in the Registry

### System and Account Information

- **OS Version:**  
  `SOFTWARE\Microsoft\Windows NT\CurrentVersion`

  ![1362c5a15d1879a1a5a5a5237a426108](https://github.com/user-attachments/assets/ef7d090d-8ac6-421c-a638-53a1044e1e11)


- **Control Sets:**  
  Active and backup control sets can be found in the SYSTEM hive at:  
  `SYSTEM\ControlSet001`  
  `SYSTEM\ControlSet002`

  ![f3b34b5e44e98e76034b76fc608a7670](https://github.com/user-attachments/assets/3658b193-74cb-4e12-aead-6e369d40af6a)


- **Computer Name:**  
  `SYSTEM\CurrentControlSet\Control\ComputerName\ComputerName`  

![bb73d7942a6e30cb96e78926ad36fddb](https://github.com/user-attachments/assets/6cb56af6-fb14-49b0-8471-dc6cd96a42db)

- **Time Zone Information:**  
  `SYSTEM\CurrentControlSet\Control\TimeZoneInformation`

![08d5e86bb3a5be6057928a8062cf7de3](https://github.com/user-attachments/assets/bdf91218-ff94-4da5-afd8-fd62168a52bb)

### Network Interfaces and Past Networks

- **Network Interfaces:**  
  `SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces`  

- **Past Networks:**  
  `SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Unmanaged`  
  `SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkList\Signatures\Managed`  

![7f0ed33ad442f22ec9475488d6af4421](https://github.com/user-attachments/assets/0abd0619-ccce-495f-9322-1133c0964f08)

### Autostart Programs

Keys storing information about programs configured to run at user logon:  
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Run`  
- `SOFTWARE\Microsoft\Windows\CurrentVersion\Run`  

![6745df01d5c2f896795d5d6f481461b7](https://github.com/user-attachments/assets/f778ffb8-5d55-494a-a0c3-b79b26c0385c)

---

## Advanced Artifacts

### Recent Files

Windows and Microsoft Office maintain lists of recently opened files in user-specific hives:  
- `NTUSER.DAT\Software\Microsoft\Windows\CurrentVersion\Explorer\RecentDocs`  
- `NTUSER.DAT\Software\Microsoft\Office\<VERSION>\UserMRU`

![aff5ea8e993f2989f5f8caf94798a3c7](https://github.com/user-attachments/assets/bf8f37ed-8910-4f5a-95b0-54484880a11e)

### ShimCache and AmCache

- **ShimCache (AppCompatCache):** Tracks compatibility data and executables launched.  
  Location: `SYSTEM\CurrentControlSet\Control\Session Manager\AppCompatCache`  

![aad7dc918dbf3b1ab207dd71d03e8c0c](https://github.com/user-attachments/assets/9a2ddcd1-72ac-402e-8afd-107ff4e6a911)

- **AmCache:** Provides extended execution data, including SHA1 hashes.  
  Location: `C:\Windows\AppCompat\Programs\Amcache.hve`  

![a569dfdf155c1a26fe3a693c388a44c7](https://github.com/user-attachments/assets/eb017db3-9caf-44b5-a287-74e595fb14eb)

### BAM and DAM

- **Background Activity Monitor (BAM):** Tracks background application activity.  
  - Location: `SYSTEM\CurrentControlSet\Services\bam\UserSettings\{SID}`  

- **Desktop Activity Moderator (DAM):** Tracks desktop activity.  
  - Location: `SYSTEM\CurrentControlSet\Services\dam\UserSettings\{SID}`  

![8a672c6580ab63d757ee5c08c09c924a](https://github.com/user-attachments/assets/d4b584a4-085f-4b54-8b0f-10b9a6bee59b)

---

## Conclusion

The Windows Registry is a treasure trove of forensic data, encompassing system settings, user activity, and program executions. By understanding its structure and leveraging powerful tools like Registry Explorer and RegRipper, investigators can uncover vital information for their analyses. The ability to extract and analyze this data effectively is a cornerstone of modern digital forensics.
Information and pictures taken from [tryhackme](https://tryhackme.com).
