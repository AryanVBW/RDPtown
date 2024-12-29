<p align="center">
<img src="https://github.com/AryanVBW/RDPtown/releases/download/l1/rdp2-removebg-preview.png" height=""><br>
🌟 Free Cloud Linxie RDP🚀
</p>


Welcome to the magical world of Linxie – your free Linux Remote Desktop (RDP) and virtual computer ! 🎉
These cloud computers are fully managed by Google, so you can be sure they are reliable and secure. You can use them for anything you want.

## Features ✨
- Virtual Computer: ⚡️ 400MB/ps internet speed
- Trustworthy: 🛡️ Hosted and maintained by the  Google
- Usage: 👨‍💻 Linux tools, apchee/ngnix, ethical security testing, gaming, and more!
- Free forever
- Fully managed by Google
- Reliable and secure
- 🖥️ 4GB RAM (Old Gmail accounts get a whooping 16GB RAM!)
- Access from any device with an RDP client
## Benefits:

- Use Linux tools and apps on any device
- Develop and test software in a cloud environment
- Run hacking exploits safely and securely
- Play Linux games without having to install anything
- Have your own personal cloud lab
## How to Get FREE RDP🚀
To use Gmail Cloud Computer, you need to follow these steps:
## Step ONE
 - Download Google Cloud app or Go to <a href="https://shell.cloud.google.com">shell.cloud.google.com</a> and sign in with your Google account.

<p align="center">
   <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.cloudconsole">
      <img src="https://github.com/AryanVBW/RDPtown/releases/download/l1/playstore.png" height="60" alt="Darkside">
   </a>
</p>

<p align="center">
   <a href="https://apps.apple.com/us/app/google-cloud/id1005120814">
      <img src="https://github.com/AryanVBW/RDPtown/releases/download/l1/appstore.png" height="90" alt="Darkside">
   </a>
</p>


 - Choose a Gmail account that you want to use as your cloud computer. You can use any Gmail account, but older accounts have more RAM and storage space.
## Step TWO
<h4>Open gogogle cloud app on your iphone or Android<h4> 

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/CRDPcloud.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cshell.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Ccloud-shell.png" height="210">
  <p style="text-align: center;"> 📲Click the terminal/shell icon</p>
</div>

   
 - Wait for a few minutes while the Google Cloud sets up your cloud computer. You will see a terminal window when it is ready.

## Step Three: Setting up Chrome Remote Desktop

This guide will help you set up Chrome Remote Desktop on your Linux system. We'll cover different desktop environments and display managers. Choose the section relevant to your system configuration.

### 1. Update System and Install `wget`

First, update your system's package list and upgrade existing packages. Then, install `wget` which we'll use to download files.

```bash
sudo apt update -y && sudo apt upgrade -y
sudo apt install wget -y
````

### 2\. Download and Install Chrome Remote Desktop

Download the Chrome Remote Desktop package and install it using `apt`.

```bash
sudo wget [https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb](https://dl.google.com/linux/direct/chrome-remote-desktop_current_amd64.deb)
sudo apt install ./chrome-remote-desktop_current_amd64.deb -y
```

### 3\. Install Desktop Environment and Configure Display Manager

Select your desired desktop environment and follow the corresponding instructions:

#### **Option A: GNOME (with GDM3)**

If you are using GNOME with GDM3, use these commands:

1.  **Install GNOME:**

    ```bash
    sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes gnome gnome-shell ubuntu-desktop dbus-x11
    ```

2.  **Enable GDM3 (if not already enabled):**

    ```bash
    sudo systemctl enable gdm3.service
    ```

3.  **Configure Chrome Remote Desktop for GNOME:**

    ```bash
    sudo bash -c 'echo "exec /usr/bin/gnome-session" > /etc/chrome-remote-desktop-session'

    ```

4.  **Disable the default display manager if its not GDM3:**

    ```bash
    sudo systemctl disable lightdm.service # If you were using LightDM
    # or
    sudo systemctl disable sddm.service  # If you were using SDDM
    # ... (replace with your previous display manager if different)
    ```

5.  **Enable and Start Chrome Remote Desktop Service:**

    ```bash
    sudo systemctl enable chrome-remote-desktop
    sudo systemctl start chrome-remote-desktop
    ```

#### **Option B: XFCE (with LightDM)**

If you are using XFCE with LightDM, use these commands:

1.  **Install XFCE:**

    ```bash
    sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes xfce4 desktop-base dbus-x11 xscreensaver
    ```

2.  **Configure Chrome Remote Desktop for XFCE:**

    ```bash
    sudo bash -c 'echo "exec /etc/X11/Xsession /usr/bin/xfce4-session" > /etc/chrome-remote-desktop-session'
    ```

3.  **Disable GDM3 (if it was previously enabled):**

    ```bash
    sudo systemctl disable gdm3.service
    ```

4.  **Enable LightDM (if not already enabled):**

    ```bash
    sudo systemctl enable lightdm.service
    ```

5.  **Enable and Start Chrome Remote Desktop Service:**

    ```bash
    sudo systemctl enable chrome-remote-desktop
    sudo systemctl start chrome-remote-desktop
    ```

#### **Option C: KDE Plasma (with SDDM)**

If you are using KDE Plasma with SDDM, use these commands:

1.  **Install KDE Plasma:**

    ```bash
    sudo DEBIAN_FRONTEND=noninteractive \
    apt install --assume-yes kde-plasma-desktop dbus-x11
    ```

2.  **Enable SDDM (if not already enabled):**

    ```bash
    sudo systemctl enable sddm.service
    ```

3.  **Configure Chrome Remote Desktop for KDE:**
    Create the file `/etc/chrome-remote-desktop-session` and add the following:

    ```
    exec /usr/bin/startplasma-x11
    ```

    To create the file using the terminal:

    ```bash
    echo "exec /usr/bin/startplasma-x11" | sudo tee /etc/chrome-remote-desktop-session
    ```

4.  **Disable the default display manager if it's not SDDM:**

    ```bash
    sudo systemctl disable lightdm.service # If you were using LightDM
    # or
    sudo systemctl disable gdm3.service  # If you were using GDM3
    # ... (replace with your previous display manager if different)
    ```

5.  **Enable and Start Chrome Remote Desktop Service:**

    ```bash
    sudo systemctl enable chrome-remote-desktop
    sudo systemctl start chrome-remote-desktop
    ```

#### **Option D: Other Desktop Environments**

If you are using a different desktop environment, you'll need to:

1.  **Install your desired desktop environment** using `apt`.
2.  **Determine the correct command** to start your desktop environment session. This is usually found in the desktop environment's documentation or configuration files.
3.  **Modify the `/etc/chrome-remote-desktop-session`** file (as shown in the XFCE example) and replace `/usr/bin/xfce4-session` with the correct command for your desktop environment.
4.  **Disable and replace your previous display manager** with the one that's compatible with your chosen desktop environment. This may involve enabling a new display manager and disabling the old one (as shown in previous options).
5.  **Enable and Start Chrome Remote Desktop Service:**
    ```bash
    sudo systemctl enable chrome-remote-desktop
    sudo systemctl start chrome-remote-desktop
    ```



## Step FOUR
   - Download Chrome Remote Desktop app/Extension or Go to <a href="https://remotedesktop.google.com">Chrome Remote Desktop</a> 
<p align="center">
   <a href="https://play.google.com/store/apps/details?id=com.google.chromeremotedesktop">
      <img src="https://github.com/AryanVBW/RDPtown/releases/download/l1/playstore.png" height="60" alt="Darkside">
   </a>
</p>

<p align="center">
   <a href="https://apps.apple.com/us/app/chrome-remote-desktop/id944025852">
      <img src="https://github.com/AryanVBW/RDPtown/releases/download/l1/appstore.png" height="90" alt="Darkside">
   </a>
</p>
<p align="center">
   <a href="https://chrome.google.com/webstore/detail/chrome-remote-desktop/inomeogfingihgjfjlpeplalcfajhgai">
      <img src="https://github.com/AryanVBW/RDPtown/releases/download/S%24/mediumCrome-withouborder.png" height="60" alt="Darkside">
   </a>
</p>
 <h2>Open  Chrome Remote Desktop App/Extension and follow the steps  </h2>  
 <div>
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark1.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark2.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark3.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark4.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark5.png" height="210">
  <img src="https://github.com/AryanVBW/RDPtown/releases/download/S1/Cdark6.png" height="210">
</div>


 - Enjoy your cloud computer! You can install and run any Linux software you want. You can also access the graphical user interface by clicking on the “Desktop” button.


## Disclaimer ⚠️
Please use RDPTown responsibly and abide by Google's terms of service. Any unauthorized or illegal activities are not supported and are solely the user's responsibility.

Join in, contribute, raise issues, and let's make RDPTown even better! 🚧✨
<p align="center">Made 🕸️ By <a href="https://aryanvbw.github.io/">*Vivek W*</a></p>
<p align="center" style="font-size: 8px">v1.0</p>

