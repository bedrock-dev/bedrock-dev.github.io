# 如何使用
## 0. 请务必阅读免责声明

[免责声明 | Disclaimer](https://github.com/hhhxiao/TrapDoor/blob/1.16.4/trapdoor-disclaimer.md)

## 1. 下载BDS

插件是依托于BDS的，因此你需要下载BDS。前往[https://www.minecraft.net/en-us/download/server/bedrock](https://www.minecraft.net/en-us/download/server/bedrock)下载**正确版本**的Windows版的BDS文件，并解压到任意文件夹

> 文件夹中不建议包含中文路径

## 2. 设置LoopBack

UWP应用默认关闭了LoopBack,你需要开启才能连接本地服务器(`localhost`)，**如果是云服务器的多人游戏可以省去这一步**

，这里不太方便提供第三方软件请百度或者谷歌该操作。这里提供一个参考[https://stackoverflow.com/questions/33259763/uwp-enable-local-network-loopback](https://stackoverflow.com/questions/33259763/uwp-enable-local-network-loopback)

## 3. 解压

解压`trapdoor-x.y.z-1.a.b.zip`压缩包到下载的BDS根目录，压缩包里面有以下几个文件,注意确认:

- `trapdoor-x.y.z-1.a.b.dll`
- `trapdoor-config.json`
- `lang`(部分版本中有，如果没有请无视)

**`.json`文件和`lang`文件夹一般情况下到放到服务器根目录**

> 如果放到根目录后发现无法读取配置文件，这可能是因为你使用的dll加载器的原因。解决办法：请在服务端目录上搜索`trapdoor.log`,将配置文件和语言文件夹放入`trapdoor.log`所在的目录即可

## 4. 配置配置文件

在新版中加入了`EULA`，你必须在配置文件中把`EULA`更新为`true`方可正常使用

一般可用不配置，要配置(主要是开关某些功能)请参考wiki第四页。

## 5. 注入dll并启动BDS

使用任意的dll注入器(注意是64位)把`trapdoor-x.y.z-1.a.b.dll`注入到`bedrock_server.exe`并启动，这里有一个可用的开源版本[https://github.com/DarthTon/Xenos/releases/tag/2.3.2 ](https://github.com/DarthTon/Xenos/releases/tag/2.3.2 )

如果你是使用这个版本，下面的看图即可:
<br>
![](https://github.com/hhhxiao/TrapDoor/blob/1.16.4/img/howto.png)

如果你使用其它的加载器，请去访问它们的wiki页面。

## 6. 加载材质包
客户端加载[https://github.com/OEOTYAN/TrapDoor-CUI](https://github.com/OEOTYAN/TrapDoor-CUI)这个材质包即可(**不是服务端，是每个用户都要在本地加载，和普通材质包一样使用**)
## 7. 连接服务器进入游戏

如果你是本地开服,ip填`127.0.0.1`，如果是云服务器，填公网ip即可。端口按照自己的设置在服务器的配置文件里面改，默认`19132`

