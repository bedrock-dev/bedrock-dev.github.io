# 4. 配置和自定义

插件提供了高度自定义的配置文件，以满足不同玩家的选择，默认的配置文件如下所示：

```json
{
  "commands tips": {
    "enable": "If enable = false, then this directive will not be registered(如果enable = false,那么指令不会被注册)",
    "permission-level": "1 <==> operator only  |  0 <==> everyone (1表示仅管理员可用，0表示所有人可用)"
  },
  "commands": {
    "tick": {
      "enable": true,
      "permission-level": 1
    },
    "log": {
      "enable": true,
      "permission-level": 0
    },
 	...
  },
    "village": {
    "bound": "apricot",
    "spawn": "vatblue",
    "center": "teal",
    "poi-query": "white"
  },
  "basic-config": {
    "particle-performance-level": 3,
    "particle-view-distance": 128,
    "hud-refresh-freq": 20,
    "tool-damage-threshold": 10,
    "keep-sim-player-inv": true,
    "server-crash-token": "demo",
    "sim-player-prefix": "",
    "use-client-level": false
  },
  "default-functions-config": {
    "[FOR GLOBAL]": "If the following settings are enabled then these features are enabled globally",
    "force-place-level": 0,
    "dropper-no-cost": false,
    "hopper-counter": false,
    "safe-explosion": false,
    "max-pending-tick-size": 100,
    "[FOR SINGLE]": "The following features are enabled only when both the following settings and the player's own settings(/self command) are enabled",
    "hud": true,
    "creative-no-clip": false,
    "block-rotate": false,
    "auto-select-tool": false,
    "force-open-container": false
  },
  "shortcuts": {
   ...
  }
}
```

## commands

`ommands`内配置了每个指令是否开启，以及命令的使用权限：

- `enable`为`1`时表示开启该命令，为`0`是插件不会注册该命令
- `permission-level`表示该命令的执行等级，和原版一致，`0`表示所有玩家都可执行，`1`表示仅OP或以上可执行

## basic-config

`basic-config`内配置了插件的一些基本设置，如下表所示：

| 配置项                     | 解释                                                         |
| -------------------------- | ------------------------------------------------------------ |
| particle-performance-level | 粒子的显示效果,选填`0,1,2`,越大表示显示效果越好，但是对客户端的渲染压力越高 |
| particle-view-distance     | 粒子的最大渲染距离，当粒子和距它最近的玩家距离超过该值时，粒子不会生成 |
| hud-refresh-freq           | `HUD`命令内数据的刷新率，默认是20gt刷新一次                  |
| tool-damage-threshold      | 开启自动切换工具后需要切换时工具剩余的最小耐久值             |
| keep-sim-player-inv        | 假人死亡或者被despawn时是否保留背包数据                      |
| server-crash-token         | 手动崩服时需要输入的密钥                                     |
| sim-player-prefix          | 生成假人时自动添加的前缀                                     |
| use-client-level           | 是否读取`%AppData%`目录下的客户端存档而不是服务器根目录`worlds`下的存档(暂未开放) |

## default-enable-functions

在新版本中，TR将function和tweak合并，并重新分为两类：全局功能和个人功能，对于个人功能，需要使用`func`和`self`同时开启该功能才会对特定玩家生效；对于全局功能，只需要使用`func`指令开启，该功能则会全服务器生效。配置文件中的`default-enable-functions`中只会配置这些功能的全局开关（对于个人功能是否生效还是需要玩家自己用`self`指令来设置）。

下表展示了每个功能的解释和用途：

| 配置项                  | 类别 | 解释                                        |
| ----------------------- | ---- | ------------------------------------------- |
| `force-place-level`     | 全局 | 默认开启强制放置                            |
| `dropper-no-cost`       | 全局 | 默认开启投掷器无消耗                        |
| `hopper-counter`        | 全局 | 默认开启漏斗计数器                          |
| `safe-explosion`        | 全局 | 默认开启爆炸不破坏地形                      |
| `max-pending-tick-size` | 全局 | 默认的每区块的计划刻上限（100是游戏默认值） |
| `hud`                   | 个人 | 默认开启HUD功能的全局开关                   |
| `creative-no-clip`      | 个人 | 默认开启创造模式无碰撞的全局开关            |
| `block-rotate`          | 个人 | 默认开启仙人掌转方块的全局开关              |
| `force-open-container`  | 个人 | 默认开启强制开容的全局开关                  |

## Village Colors

村庄边界的现实颜色支持下表中的16个值（**请填写全小写的单词，不支持颜色代码和缩写**）
|                    颜色代码                     |                           颜色展示                           | 缩写 | 名字     |
| :----------------------------------------: | :-------------------------------------------------------: | :--: | -------- |
| <span style="color:#000000">#000000</span> | ![](https://shields.io/badge/-000000?style=for-the-badge) |  B   | BLACK    |
| <span style="color:#144a74">#144a74</span> | ![](https://shields.io/badge/-144a74?style=for-the-badge) |  I   | INDIGO   |
| <span style="color:#8E65F3">#8E65F3</span> | ![](https://shields.io/badge/-8E65F3?style=for-the-badge) |  L   | LAVENDER |
| <span style="color:#07946e">#07946e</span> | ![](https://shields.io/badge/-07946e?style=for-the-badge) |  T   | TEAL     |
| <span style="color:#AB5236">#AB5236</span> | ![](https://shields.io/badge/-AB5236?style=for-the-badge) |  C   | COCOA    |
| <span style="color:#56575F">#56575F</span> | ![](https://shields.io/badge/-56575F?style=for-the-badge) |  D   | DARK     |
| <span style="color:#A2A3A7">#A2A3A7</span> | ![](https://shields.io/badge/-A2A3A7?style=for-the-badge) |  O   | OATMEAL  |
| <span style="color:#FFFFFF">#FFFFFF</span> | ![](https://shields.io/badge/-FFFFFF?style=for-the-badge) |  W   | WHITE    |
| <span style="color:#FF3040">#FF3040</span> | ![](https://shields.io/badge/-FF3040?style=for-the-badge) |  R   | RED      |
| <span style="color:#FF7300">#FF7300</span> | ![](https://shields.io/badge/-FF7300?style=for-the-badge) |  A   | APRICOT  |
| <span style="color:#FFEC27">#FFEC27</span> | ![](https://shields.io/badge/-FFEC27?style=for-the-badge) |  Y   | YELLOW   |
| <span style="color:#10E436">#10E436</span> | ![](https://shields.io/badge/-10E436?style=for-the-badge) |  G   | GREEN    |
| <span style="color:#29ADFF">#29ADFF</span> | ![](https://shields.io/badge/-29ADFF?style=for-the-badge) |  V   | VAT      |
| <span style="color:#83769C">#83769C</span> | ![](https://shields.io/badge/-83769C?style=for-the-badge) |  S   | SLATE    |
| <span style="color:#FF77A8">#FF77A8</span> | ![](https://shields.io/badge/-FF77A8?style=for-the-badge) |  P   | PINK     |
| <span style="color:#FFCCAA">#FFCCAA</span> | ![](https://shields.io/badge/-FFCCAA?style=for-the-badge) |  E   | FAWN     |
