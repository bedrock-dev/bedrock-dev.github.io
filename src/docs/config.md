# 配置和自定义

插件提供了高度自定义的配置文件，以满足不同玩家的选择，默认的配置文件如下所示：

```json
{
  "commands": {
    "tick": {
      "enable": true,
      "permission-level": 0
    },
   ...
  },
  "basic-config": {
    "particle-performance-level": 2,
    "particle-view-distance": 128,
    "hud-refresh-freq": 20
  },
  "default-enable-functions": {
    "hud": true,
    "hopper-counter": false
  },
  "default-enable-tweaks": {
    "force-place-level": 1,
    "force-open-container": false,
    "dropper-no-cost": false,
    "auto-select-tool": false
  },
  "shortcuts": [
    {
      "type": "use-on",
      "item": "cactus",
      "block": "concrete",
      "prevent": false,
      "actions": [
        "counter print {baux}"
      ]
    }
  ]
}
```

### commands

`ommands`内配置了每个指令是否开启，以及命令的使用权限：

- `enable`为1时表示开启该命令，为0是插件不会注册该命令
- `permission-level`表示该命令的执行等级，和原版一致，`0`表示所有玩家都可执行，`1`表示仅OP玩家或以上可执行

### basic-config

`basic-config`内配置了插件的一些基本设置，该部分的设置在游戏内均可使用`trapdoor`命令修改(修改只运行时的，不持久化到配置文件，下同)

- `particle-performance-level`配置粒子的显示效果差，选填`0,1,2`,越大表示显示效果越好，但是对客户端的渲染压力越高
- `particle-view-distance`表示粒子的最大渲染距离，当粒子和距它最近的玩家距离超过该值时，粒子不会生成
- `hud-refresh-freq`表示`HUD`命令内数据的刷新率，默认是20gt刷新一次

### default-enable-functions
`default-enable-functions`内配置了`func`内功能在开服时是否默认开启，详见功能一节的`func`命令

### default-enable-tweaks

`default-enable-tweak`内配置了`tweak`内功能在开服时是否默认开启，详见功能一节的`tweak`命令



### 高级功能-Shortcuts

shortcut可以做到游戏内玩家触发某种行为后执行特定的指令序列，目前共支持三种触发器:

1. `use`当玩家使用某种物品时触发
2. `useon`当玩家使用某种物品右键某种方块时触发
3. `command`当玩家执行自定义短命令时触发

你可以在配置文件内`shortcuts`键内增加任意数量的触发器以丰富插件的功能

#### use触发器

下面是一个例子,表示玩家使用`cactus`时候会以该玩家的身份执行`count print`命令

```json
 {
      "type": "use", //触发器类型，固定
      "item": "cactus", //使用的物品，支持xx:1的样式来指定特殊值
      "prevent": false, //是否阻止原有的事件发生
      "actions": [ //执行的指令系序列
        "counter print"
      ]
    }
```

指令序列内可使用如下的的内建变量以丰富指令

- `iname` 物品名字
- `iaux` 物品特殊值
- `px` 玩家x坐标
- `py` 玩家y坐标
- `pz` 玩家z坐标

#### use-on 当玩家用某种物品右键某种方块时触发

下面是一个例子,表示玩家使用`cactus`右键混凝土的时候会以该玩家的身份执行`count print {baux}`命令,其中`baux`表示方块的特殊值

```json
 "shortcuts": [
    {
      "type": "use-on", //触发器类型，固定
      "item": "cactus", //使用的物品，支持name:aux的样式来指定特殊值
      "block": "concrete", //被右键的方块，支持name:aux的样式来指定特殊值
      "prevent": false, //是否阻止原有的事件发生
      "actions": [ //执行的指令系序列
        "counter print {baux}"
      ]
    },
```

可用的内建变量如下

- `iname` 物品名字
- `iaux` 物品特殊值
- `bname` 右键的方块名字
- `baux` 右键的方块特殊值
- `bx` 方块x坐标
- `by` 方块y坐标
- `bz` 方块 z坐标
- `px` 玩家x坐标
- `py` 玩家y坐标
- `pz` 玩家z坐标

#### 自定义短命令

下面是一个例子,表示当玩家执行`c`命令的时候插件会以该玩家身份执行`/gamemode creative`命令.,其中`c`命令由插件自动注册,填写的时候不要有空格

```json
{
  "type": "command", //触发器类型，固定
  "command": "c", //快捷命令名称
  "actions": [ //要执行的指令序列
    "gamemode creative"
  ]
}
```

可用的内建变量

- `px` 玩家x坐标
- `py` 玩家y坐标
- `pz` 玩家z坐标
