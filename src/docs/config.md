# 配置文件

插件为玩家提供了比较丰富的配置文件，使得玩家能够自定义所有功能的开关与否以及权限等。下图是配置文件的结构：

```json
{
  "dev": false,
  "commands": {
    "/tick": {
      "enable": true,
      "permissionLevel": 1
    },
    "/village": {
      "enable": true,
      "permissionLevel": 0
    },
    "/func":{
        ...
    }
  },
  "lowLevelVanillaCommands": [
    "stop",
    "whitelist"
  ],
  "server": {
    "levelName": "Bedrock level",
    "ws": "ws://127.0.0.1:54321"
  },
  "village": {
    "bound": "red",
    "spawn": "red",
    "poiQuery": "red",
    "center": "minecraft:heart_particle"
  },
  "functionsEnable": {
    "hopperCounter": false,
    "spawnHelper": false,
    "cactusRotate": false,
    "simpleDraw": false,
    "playerStat": false
  },
  "selfEnable": {
    "chunkShow": true,
    "distanceMeasure": true,
    "redstoneStick": true
  }
}
```

- `commands`子节点下为每个命令提供了两个配置项`enable`和`permissionLevel`，其中前者表示是否启用该命令，后者表示使用该命令所需的权限等级，如果你要对所有玩家开放该命令就填`0`，只对OP权限的玩家开放就填`1`。
- `lowLevelVanillaCommands`是一个列表，你可与在里面填入你想在游戏内执行的后台命令，比如填入`stop`就能在游戏内输入`/stop`来关闭服务器(仅限OP权限)
- `server`是一些服务器信息的配置项
  - `levelName`存档名字，和`server.properties`中的`levelName`相同即可
  - `ws`填默认的假人客户端的提供的ws地址，不使用`fakeplayer`命令可以无视这条
- `village`该选项配置了村庄相关的四种显示效果，前面三种`bound`，`spawn`和`poiQuery`选填`red`，`blue`，`green`，`yellow`，`white`这五种中的任何一种，分别对应红蓝绿黄白五种颜色，最后一种标识村庄中心的可以填写任意合法粒子名称，包括材质包自定义的粒子，名称空间不能省去。
- `functionsEnable`用于标识功能是否默认开启
- `selfEnable`用于标识`self`相关的功能是否开启，只有这里开启**且**游戏内玩家开启，该功能才能正常工作。
- `dev`选项默认不在配置选项中存在，设置为`true`后插件将进入开发者模式，会打印大量的调试信息，**不建议在服务器中开启***。