---
layout: default
title: "Windows Forensics 2"
author: "Bartosz Dybski"
date: 2024-12-25
categories: operating-systems
tags: [Windows, Forensics, Endpoint]
---

# Exploring File Systems and Forensic Analysis Techniques

A storage device in a computer system, such as a hard disk drive or a USB device, is essentially a collection of bits. To make sense of these bits, they must be organized in a way that allows for meaningful interpretation. This organization is achieved using **file systems**, which standardize how information is stored and retrieved on a storage device. 

This article explores various file systems, their structures, and forensic techniques to analyze them.

---

## The File Allocation Table (FAT)

The **File Allocation Table (FAT)** is one of the earliest file systems and was the default for Microsoft operating systems since the late 1970s. Though no longer the default, it remains in use for specific applications. FAT organizes data using a table that indexes the location of bits allocated to files.

### Data Structures in FAT
1. **Clusters**: Basic storage units containing file data.
2. **Directory**: Stores file metadata like name, starting cluster, and length.
3. **File Allocation Table**: A linked list containing the status of clusters and pointers to the next cluster in a chain.

### FAT Variants: FAT12, FAT16, and FAT32
FAT variants differ by the number of bits used to address clusters, affecting the maximum volume and file sizes. Below is a comparison:

| Attribute                 | FAT12   | FAT16   | FAT32   |
|---------------------------|---------|---------|---------|
| Addressable Bits          | 12      | 16      | 28      |
| Max Number of Clusters    | 4,096   | 65,536  | 268,435,456 |
| Supported Size of Clusters| 512B–8KB| 2KB–32KB| 4KB–32KB |
| Maximum Volume Size       | 32MB    | 2GB     | 2TB     |

> **Note:** FAT32 supports volumes up to 2TB, but Windows limits formatting to 32GB.

Despite its limitations (e.g., maximum file size of 4GB), FAT16 and FAT32 are still used in USB drives and digital cameras.

---

## The exFAT File System

To address FAT32’s limitations, especially the 4GB file size cap, Microsoft developed **exFAT**. This system is now standard for SD cards over 32GB and supports larger files and volumes.

### Features of exFAT
- Cluster size: 4KB to 32MB
- Maximum file size and volume size: 128PB
- Supports up to 2,796,202 files per directory

---

## The NTFS File System

Introduced in 1993, **NTFS (New Technology File System)** brought advanced features over FAT, making it more secure, reliable, and robust. It became the default file system starting with Windows XP.

### Key Features of NTFS
1. **Journaling**: Tracks metadata changes to recover from crashes or defragmentation issues.
2. **Access Controls**: Supports user-based file and directory permissions.
3. **Volume Shadow Copy**: Enables recovery of previous file versions, useful against ransomware attacks.
4. **Alternate Data Streams (ADS)**: Allows multiple data streams within a file.
5. **Master File Table (MFT)**: A structured database tracking objects on a volume.

#### Critical Files in the MFT
- **$MFT**: Tracks the location of all files.
- **$LOGFILE**: Logs file system transactions for integrity.
- **$UsnJrnl**: Tracks changes to files.

### Tools for NTFS Analysis
**MFT Explorer**, available in both CLI and GUI versions, is used to analyze MFT files for forensic purposes.

---

## Deleted Files and Data Recovery

When a file is deleted, its metadata is removed, and its storage location is marked as "unallocated." However, the actual data remains until overwritten. This principle enables file recovery.

### Disk Image Files
A **disk image** is a bit-for-bit copy of a drive, preserving all data and metadata. Disk images are critical for forensic analysis, ensuring the original evidence remains intact.

### Recovering Files with Autopsy
The **Autopsy** tool simplifies file recovery:
1. Create a new case.

![obraz](https://github.com/user-attachments/assets/71f0a145-9978-4204-94de-68001d0573f1)

  Click next:
  
![obraz](https://github.com/user-attachments/assets/86bf1a5e-05ff-43b9-9f74-8a3e329bf2ea)
  
3. Select "Disk Image or VM File" as the data source.

![obraz](https://github.com/user-attachments/assets/f03cd471-d53e-4f76-a771-67adec45d7f3)

4. Provide the path to the disk image file.

![obraz](https://github.com/user-attachments/assets/7edc063a-67e8-4ff8-85ab-24655389fe17)

5. Deselect all unnecessary modules for faster analysis.

![obraz](https://github.com/user-attachments/assets/e9d4fd28-bebe-4431-96b7-9995f80f2761)

6. View and recover deleted files marked with an "X."
   
![obraz](https://github.com/user-attachments/assets/690eddf5-e6ce-4e75-8d63-9b1675fef5cf)

7. Click the Extract Files.

![obraz](https://github.com/user-attachments/assets/f86f003d-2b33-44a4-9450-741bc31c2604)


---

## Forensic Analysis of Artifacts

### Windows Prefetch Files
When a program is executed on a Windows system, it stores data for future use in **Prefetch files**, enabling faster load times for frequently used applications. These files are located in:

Prefetch files have a `.pf` extension and include:
- **Last run times** of the application
- **Number of executions**
- **Associated files and device handles**

These files provide valuable information about the last executed programs and files.

### Parsing Prefetch Files
To analyze Prefetch files, you can use **PECmd**:
- Parse a specific file and save the output in CSV:
  ```bash
  PECmd.exe -f <path-to-Prefetch-files> --csv <path-to-save-csv>
  ```
### Windows 10 Timeline
The Windows 10 Timeline stores recently used applications and files in an SQLite database, making it a valuable source of forensic data. This database is located at:
```bash
C:\Users\<username>\AppData\Local\ConnectedDevicesPlatform\{randomfolder}\ActivitiesCache.db
```
The database includes:
  Executed application details
  Application focus times

### Windows 10 Jump Lists
Jump Lists help users access recently used files directly from the taskbar by right-clicking an application's icon. This data is stored at:
```bash
C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\AutomaticDestinations
```

### Shortcut Files
Windows generates Shortcut files for files accessed locally or remotely. These files are found in:

C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\
C:\Users\<username>\AppData\Roaming\Microsoft\Office\Recent\

Key Features:
Contain:
- First and last opened times.
- File paths of the accessed files.

### Parsing Shortcut Files
Use LECmd:
```bash
LECmd.exe -f <path-to-shortcut-files> --csv <path-to-save-csv>
```
### IE/Edge History
Internet Explorer (IE) and Edge browsing history also includes locally accessed files (not just those opened via the browser). These files appear with a file:///* prefix.
Location:
```bash
C:\Users\<username>\AppData\Local\Microsoft\Windows\WebCache\WebCacheV*.dat
```
Analyzing IE/Edge History

Use Autopsy:
Add a Logical Files data source.

![obraz](https://github.com/user-attachments/assets/46891617-3e40-4074-89ca-6ab66d9caabf)

1. Provide the path to the relevant folder (e.g., triage folder).
2. Ingest modules:
3. Check Recent Activity.

![obraz](https://github.com/user-attachments/assets/0d3af87c-c243-41df-864f-6a691f9a36a8)

5. Uncheck all others.
6. Access local files through the Web history option in the left panel.

![obraz](https://github.com/user-attachments/assets/b3359775-617a-4bad-9b95-6ecd057b2265)


### Setupapi.dev.log for USB Devices
When a new device is connected to a Windows system, setup information is logged in:
```bash
C:\Windows\inf\setupapi.dev.log
```

## Shortcut Files

As discussed earlier, **Shortcut files** are automatically created by Windows for files accessed locally or remotely. These files can also provide valuable information about connected USB devices, such as:

- **Volume name**.
- **Device type**.
- **Serial number**.

### Location of Shortcut Files:
- `C:\Users\<username>\AppData\Roaming\Microsoft\Windows\Recent\`
- `C:\Users\<username>\AppData\Roaming\Microsoft\Office\Recent\`

### Parsing Shortcut Files:
Shortcut files can be parsed using **Eric Zimmerman's LECmd.exe**. Refer to the previous section for details on how to parse these files.

