# Installation

## 0. Read and agree to the disclaimer

As a user, one has to understand the risk brought by third-parity software before using it. This is to protect developer from unnecessary trouble. Once used Trapdoor, representing one had agreed to the disclaimer.


```txt
Disclaimer

Trapdoor is a dll-inject based BDS plugin which provided better gameplay for technical players. 
Trapdoor is open-source and free which DO NOT include any malicios code that damage worlds in purpose.

Considering Trapdoor's uniqueness, none of the developers can garentee Trapdoor WILL NOT do any damage to worlds. 
Once if worlds are damaged, none of the developers can and will take the responsibility.

If one continues using Trapdoor, it repersents one had agreed to the disclaimer.
Please stop using Trapdoor if you are unwilling to risk.


Appendix: Some suggestions to Trapdoor users:
- Keep your Trapdoor updated to newest version
- Switch off function unused
- Backup regularly
2022.1.11
```

## 1. Download BDS

The plugin require BDS as runtime. Please go to [https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock) and download the correct version of BDS and decompress into any **empty** folder.


## 2. Enable loopback

The Windows 10(11) disables loopback of UWP application by default(which stops players to connect to localhost). One must enable it in order to connect to local server(a cloud server user can skip this step). Open `powershell` with administrator privileges and run the following command(from microsoft' s official website):

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```

If complete, "complete" will be shown on `powershell`


## 3. Install LiteLoaderBDS

Please refer [LiteLoaderBDS install tutorial](https://github.com/LiteLDev/LiteLoaderBDS#for-windows) to install the correct version of LiteloaderBDS.

## 4. Download and Install plugin

1. Go to [Trapdoor download page](https://github.com/hhhxiao/trapdoor-ll/releases) to download the release.
2. **Decompress the zip file and copy the whole files to the BDS root directory** as follows:

```
└───bedrock-server-xxx
  └───plugins
  	└───trapdoor-xx-xx.dll
    └───trapdoor
         └───config.json
```

## 5. Customize your configuration file

CMPs can skip this step. Some functions should be switched off for SMPs. Please refer to Config page for more details.


## 6. Load texture pack
Download texture pack at [https://github.com/OEOTYAN/Trapdoor-CUI/releases](https://github.com/OEOTYAN/Trapdoor-CUI/releases) and load with client (**but not server**) as follows:

## 7. Connect your server

If localhost is used, please use `127.0.0.1` or `localhost` as IP address. If a cloud server is used, just connect it as usual.
