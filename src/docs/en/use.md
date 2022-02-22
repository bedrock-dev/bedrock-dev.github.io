# Application instruction
## 0. Please read the disclaimer clearly

[免责声明 | Disclaimer](https://github.com/hhhxiao/TrapDoor/blob/1.16.4/trapdoor-disclaimer.md)

## 1. Download BDS

The plugin is BDS based, so you will need to download BDS for it. Link:[https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock) Download the **correct** version of BDS and unzip it into any folders

> Having non-ascii charactors for folder names is not recommended

## 2. LoopBack setting

In the default setting of UWP, Loopback is disable which have to be enable to allow connection for local server(`localhost`). **You can skip this step if you are working on a cloud server**

Please seek help from Google for enabling it. 
Link for references: [https://stackoverflow.com/questions/33259763/uwp-enable-local-network-loopback](https://stackoverflow.com/questions/33259763/uwp-enable-local-network-loopback)

## 3. Unziping folders

Unzip`trapdoor-x.y.z-1.a.b.zip`under the BDS folder, check if there are files below:

- `trapdoor-x.y.z-1.a.b.dll`
- `trapdoor-config.json`
- `lang`(only available in certain versions)

**`.json` and `lang`files are places under the BDS file under normal situation**

> If trapdoor are having a problem in reading files, it maybe because you are using another dll loader. Which can be solver by  seacrh  `trapdoor.log` in the exploerer ,and place files and language file into the folder where`trapdoor.log`is located.

## 4. Editing file "trapdoor-config"

`EULA`is added in the newest version. You have to edit `EULA`located at `trapdoor-config` into`true`to run the server.

It is not necessary to edit `trapdoor-config` , but if you want  to switch on or off certain functions, please do it .Detailed description on page 4 of wiki.

## 5. Injecting dll to start BDS

Use any dll injector(64bits) to inject`trapdoor-x.y.z-1.a.b.dll`into`bedrock_server.exe`and start. Link to an open sourced version: [https://github.com/DarthTon/Xenos/releases/tag/2.3.2 ](https://github.com/DarthTon/Xenos/releases/tag/2.3.2 )

If you are using xenos injecting, follow steps below:
<br>
![](https://github.com/hhhxiao/TrapDoor/blob/1.16.4/img/howto.png)

Please check their wiki page if you are using another dll injecting software.

## 6. Activating texture pack
load the texture pack from client side [https://github.com/OEOTYAN/TrapDoor-CUI](https://github.com/OEOTYAN/TrapDoor-CUI) (**Not from the server side, it has to be loaded from the client side**)
## 7. Connecting into the server

If you are hosting the server locally, the IP  address would be `127.0.0.1`. Port is using the port stated at `server.property` default: `19132`

