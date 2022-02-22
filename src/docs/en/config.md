# Configuration

The  code below shows how the `trapdoor-config` looks
```json
{
  "EULA":false,
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
    },
    "/cl": {
      "enable": true,
      "permissionLevel": 0
    },
    "/dev": {
      "enable": true,
      "permissionLevel": 1
    },
    "/here": {
      "enable": true,
      "permissionLevel": 0
    },
    
    "/l": {
      "enable": true,
      "permissionLevel": 1
    },
    "/lang":{
      "enable":true,
      "permissionLevel": 1
    }
  },
  "lowLevelVanillaCommands":[
         "stop",
      "whitelist"
  ],

  "server":{
    "levelName": "Bedrock level",
    "lang": "zh_cn"
  },

  "village":{
      "bound": "red",
      "spawn": "red",
      "poiQuery": "red",
      "center": "minecraft:heart_particle"
  },
  "functionsEnable":{
      "hopperCounter": false,
      "spawnHelper":false,
      "cactusRotate":false,
      "simpleDraw":false,
      "playerStat":false
    },
    "selfEnable":{
      "chunkShow":true,
      "distanceMeasure":true,
      "redstoneStick":true
    }
}
```

## Commands

All commands have `enable` and `permissionLevel` two options, they represent function on or off and user operation level respectively. While `permissionLevel` is 1, only operators are allow to use the command, and while it is 0, all players are allowed to use.

## lowLevelVanillaCommands

This enables command that are only available at the back end to be ran by operators.

## Server

Only `levelName` is available in this option, make sure to keep the file name same as `server-property`, which `backup` needs it to be set properly.

## Village

Effect on `village` funcions, for `bound`,`spawn`and `poiQuery`,  `white`,`blue`,`red`,`green`and `yellow` are the only option available. For `center`, all particles can be used including self-defined particles from other texture packs.