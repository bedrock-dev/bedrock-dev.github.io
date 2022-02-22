# 配置文件

下图是插件目前的配置文件

```json
{
  "commands": {
    "/tick": {
      "enable": true,
      "permissionLevel": 1
    },
    "/village": {
      "enable": true,
      "permissionLevel": 0
    },
    "/prof": {
      "enable": true,
      "permissionLevel": 0
    },
    "/mspt": {
      "enable": true,
      "permissionLevel": 0
    },
    "/o": {
      "enable": true,
      "permissionLevel": 1
    },
    "/c": {
      "enable": true,
      "permissionLevel": 1
    },
    "/s": {
      "enable": true,
      "permissionLevel": 1
    },
    "/hsa": {
      "enable": true,
      "permissionLevel": 0
    },
    "/func": {
      "enable": true,
      "permissionLevel": 1
    },
    "/counter": {
      "enable": true,
      "permissionLevel": 1
    },
    "/td?": {
      "enable": true,
      "permissionLevel": 0
    },
    "/os": {
      "enable": true,
      "permissionLevel": 0
    },
    "/apicfg": {
      "enable": true,
      "permissionLevel": 1
    },
    "/draw": {
      "enable": true,
      "permissionLevel": 0
    },
    "/slime": {
      "enable": true,
      "permissionLevel": 0
    },
    "/backup": {
      "enable": true,
      "permissionLevel": 1
    },
    "/self": {
      "enable": true,
      "permissionLevel": 0
    }
  },
  "lowLevelVanillaCommands":[
         "stop",
      "whitelist"
  ],

  "server":{
    "levelName": "Bedrock level"
  },

  "village":{
      "bound": "red",
      "spawn": "red",
      "poiQuery": "red",
      "center": "minecraft:heart_particle"
  }
}
```

## Commands

每个命令都有`enable`和`permissionLevel`两个选项，前者控制改指令是否启用；后者控制指令的权限等级，设为1就是仅op可用，设置为0所有玩家可用，如果你要用到生存服中，请谨慎考虑权限和是否开启

## lowLevelVanillaCommands

这个配置能把仅后台可执行的指令降级为游戏内OP可执行,在内部填上相应的指令即可

## Server

该字段目前仅有`levelName`这一个选项，里面填写存档名称,和`server.properties`相同即可，`backup`指令需要该配置

## Village

配置村庄的显示效果,`bound`,`spawn`和`poiQuery`都只能选填 `white`,`blue`,`red`,`green`,`yellow`,最后一个`center`可以填任意合法粒子，包括其它材质包的自定义粒子,自定义粒子请加上**名称空间**。