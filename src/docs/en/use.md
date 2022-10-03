# Installation and Application

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

## 1. Downlaod BDS

The plugin is BDS-based, which a BDS is required. Please go to [https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock) and download the correct version of BDS and decompress into any file.


## 2. Enable loopback

Default setting of UWP application should have disabled loopback (which stops players to connect to localhost). One must enable it to connect to local servers, but cloud server can skip this step. Start `powershell` with administrative access and run the following command(from microsoft):

```powershell
CheckNetIsolation.exe LoopbackExempt -a -p=S-1-15-2-1958404141-86561845-1752920682-3514627264-368642714-62675701-733520436
```

If complete, "complete" will be shown on `powershell`


## 3. Install LiteLoaderBDS

Please refer to [LiteLoaderBDS install tutorial](https://github.com/LiteLDev/LiteLoaderBDS#for-windows) and download desired version of LiteLoader**Press [here](https://github.com/LiteLDev/LiteLoaderBDS/issues)to feedback to LiteLoader related problem but not Trapdoor developler.**

## 4. Download and Install plugin

1. Go to [Trapdoor download page](https://github.com/hhhxiao/trapdoor-ll/releases) to download the release document
2. **Decompress the zip file and copy them to the BDS file** as follows:

```
└───bedrock-server-xxx
  └───plugins
  	└───trapdoor-xx-xx.dll
    └───trapdoor
         └───config.json
```

## 5. Customize your config file

CMPs can skip this step. Some functions should be switched off for SMPs. Please refer to Config page for more details.


## 6. Load texture pack
Download texture pack at [https://github.com/OEOTYAN/Trapdoor-CUI/releases](https://github.com/OEOTYAN/Trapdoor-CUI/releases) and load with client (**but not server**) as follows:

## 7. Connect your server

If localhost is used, please enter `127.0.0.1` or `localhost` into IP slot. If cloud server is used, enter server's IP address. Please refer to the server.property for ports.

