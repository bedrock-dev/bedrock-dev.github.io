# Application instruction

## 0. Read and agree the disclaimer

```
Disclaimer

Trapdoor (hereinafter referred to as tr) is a BDS auxiliary software (plug-in) developed by using dll remote injection technology. It provides many functions that are convenient for players and creates convenience for players of electricity generation. In addition, tr itself is totally open source and free, there is no malicious code inside, and in principle, it will not cause any damage to the archive.

However, considering the particularity of this type of software, the developer cannot fully guarantee that tr will not cause any damage to the user's level archive. In the event of an accident, the developer will not and cannot be responsible for the loss caused by tr.

If you continue to use tr plugin, you agree to this statement (or user agreement). If you do not want to take such risks, please stop using tr plugin.

Addendum: Here are some usage suggestions:
- Update the plugin to the new version in time, because the current tr is still a beta version, in theory, the more you update the fewer bugs
- Try to turn off unused functions as much as possible
- It is always a good habit to backup archives in time

2022.1.11
```



## 1. Download BDS

The plugin is BDS based, so you will need to download BDS for it. Link:[https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock) Download the **correct** version of BDS and unzip it into any folder

:::warning

Having non-ascii characters for folder names is not recommended

:::

## 2. Enable loop back

In the default setting of UWP application, loop back is disable(this means it can not connection to local server). **You can skip this step if your server is on a cloud server**.Open `powershell` with administrator privileges, and run the following command (this command comes from Microsoft's official website):

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```
The following prompt appears, indicating that the operation was successful:
![](../img/pw.png)


## 3. Download Trapdoor
Go to [Trapdoor's download page](https://github.com/hhhxiao/TrapDoor/releases) to download the release. The name of release is formated as `trapdoor-{mod version}-{game version}.zip`, Among them, `mod version` indicates the plug-in version, and `game version` indicates the supported game version. Note that **trapdoor is not backward compatible. The version must be strictly corresponding when using it. The three level version number of the plug-in and BDS must be exactly the same**.
The image below shows the download page:
![](../img/download.png)

Then **unzip the release and copy all files to the root directory of BDS** At this time, the path of the relevant configuration files is as follows:
```
└───bedrock-server-xxx
  └───plugins
    └───trapdoor
        ├───trapdoor-config.json
        └───langs
```

:::tip
In the newer version (0.10+), trapdoor built the language file into the plugin, and the configuration file will be automatically generated at the first startup, so this step can be skipped and you can injectet it in any path.
:::

## 4. Editing configuration file

You can modify the configuration file to turn off some features according to your needs.

## 5. Injecting dll to start BDS

Use any dll injector(64bits) to inject`trapdoor-x.y.z-1.a.b.dll`into`bedrock_server.exe`and start. Link to an open sourced version: [https://github.com/DarthTon/Xenos/releases/tag/2.3.2 ](https://github.com/DarthTon/Xenos/releases/tag/2.3.2 )

If you are using xenos injecting, follow steps below:
<br>
![](../img/howto.png)

Please check their wiki page if you are using another dll injecting software.

## 6. Install resource  pack
Install the resource pack from client side [https://github.com/OEOTYAN/TrapDoor-CUI](https://github.com/OEOTYAN/TrapDoor-CUI) (**Not from the server side, it has to be loaded from the client side**)
## 7. Connecting to the server

If you are hosting the server locally, the IP address is `127.0.0.1`,  port is  configured by `server.property` which is `19132` defaultly.
