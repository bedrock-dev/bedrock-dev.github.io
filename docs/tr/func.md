# 3. 功能介绍

## 说明

:::tip
以下基本说明和原版指令完全相同，熟悉原版指令的可以不看
:::

在以下的所有指令说明中，

- `<>`表示必填参数
- `<a|b|c>`表示子命令`a,b,c`任选一个
- `<name:type>`表示必填参数，`name`表示该选项的含义，`type`表示该选项的类型，和原版相同
- `[name:type]`表示选填参数，其余同上。

## 指令

### `trapdoor`

> 拥有对插件进行配置的能力

```
/trapdoor <reload|dump>
/trapdoor crash <token: string>
/trapdoor hudfreq <frequency: int>
/trapdoor pm <low|medium|high>
/trapdoor pvd <maxDistance: int>
/trapdoor version
```

- `trapdoor reload`热重载**不包括指令配置**部分的配置文件
- `trapdoor dump`打印各种配置项的当前值
- `trapdoor crash`崩服，需要输入配置文件内配置的密钥才能执行
- `trapdoor hudfreq `设置hud信息的更新频率，单位是gt
- `trapdoor pm` 设置例子效果的质量，质量越高，显示越清楚，但是对客户端帧率的影响越高
- `trapdoor pvd`设置粒子效果的最大显示距离
- `trapdoor version` 打印当前版本号

:::warning

`trapdoor crash`会造成游戏内的实时数据丢失，请谨慎使用（不知道有什么用就别用）

:::

### `func`

> 拥有调整全局功能配置的能力

```
/func autotool [onoroff: Boolean]
/func blockrotate [onoroff: Boolean]
/func fcopen [onoroff: Boolean]
/func fcplace [value: int]
/func hoppercounter [onoroff: Boolean]
/func hud [onoroff: Boolean]
/func maxptsize [value: int]
/func noclip [onoroff: Boolean]
/func nocost [onoroff: Boolean]
/func safeexplode [onoroff: Boolean]
```

`func`可以开启或者关闭部分功能的全局开关。在新版本中，TR将`func`和`tweak`合并，并重新分为两类：全局功能和个人功能。对于个人功能，需要使用`func`和`self`同时开启该功能才会对特定玩家生效；对于全局功能，只需要使用`func`指令开启，该功能则会全服务器的所有玩家生效。


- `func autotool` 开启自动工具切换
- `func fcopen` 开启强制开容
- `func fcplace` 开启强放置
- `func maxptsize ` 修改计划刻上限
- `func noclip` 开启创造模式无碰撞
- `func safeexplode `开启爆炸不破坏地形
- `func blockrotate`开启或者关闭仙人掌转方块
- `func hoppercounter`开启或者关闭漏斗计数器
- `func hud` 开启或者关闭全局HUD开关

下表列出了所有功能的详细释义：

| 配置项          | 类型 | 释义                                                         |
| --------------- | ---- | ------------------------------------------------------------ |
| `autotool`      | 个人 | 开启后玩玩家挖掘方块时会自动将背包或者物品栏内最合适的工具切换到主手，该功能比较OP，请谨慎使用 |
| `fcopen`        | 全局 | 开启后，容器的开启不再受到方块或者实体的阻挡，任何时候都能右键开启 |
| `fcplace`       | 全局 | 开启后，可以强制防止放置方块，共0，1，2三个级别，0就是原版，1表示无视实体阻挡放方块，2表示无视所有阻挡和检查 |
| `maxptsize`     | 全局 | 修改每区块每gt100的计划刻上限                                |
| `noclip`        | 个人 | 开启后玩家创造模式没有碰撞箱，可穿墙                         |
| `safeexplode`   | 全局 | 开启后爆炸会影响实体但是不会破坏地形                         |
| `blockrotate`   | 个人 | 开启后可以使用仙人掌右键方块并对其进行旋转                   |
| `hoppercounter` | 全局 | 启用漏斗计数器功能，详见[counter](#counter)一节              |
| `hud`           | 个人 | 启用HUD功能，详见[hud](#hud)一节                             |

### `self`

> 拥有调整个人功能配置的能力

```
/self autotool [onoroff: Boolean]
/self blockrotate [onoroff: Boolean]
/self hud [onoroff: Boolean]
/self noclip [onoroff: Boolean]
/self dump
```

- `/self autotool` 开启或关闭自动工具切换的个人开关
- `/self blockrotate`开启或关闭仙人掌转方块的个人开关
- `/self hud`开启或关闭HUD的个人开关
- `/self noclip` 开启或关闭创造无碰撞的个人开关
- `self dump` 打印玩家的所有个人配置


### `tick`

> 拥有改变世界运行速度的能力

```
/tick <acc|slow> <times: int>
/tick <forward|fw|warp> <tickNumber: int>
/tick <r|reset|query|freeze|fz>
```

- `tick <acc|slow> <times: int>`用于加快或者放慢游戏运行速度为原来的`time`倍或者`1/time`
- `tick <forward|r|warp> <ticks: int>`用于让世界以较快的速度前进`tickNumber`个游戏刻。其中`forward`(或`fw`)是瞬间完成（具体多久取决于服务器CPU，forward途中服务器没反应是正常现象，请耐心等待），`warp`是在**不掉刻的前提下**以最快的速度加速运行`tickNumber`个游戏刻。

- `tick reset`或者`tick r`用于重置世界到正常状态
- `tick query`用于查询世界运行状态，如正在以多少倍速的速度运行，`warp`还剩多少个游戏刻等等
- `tick freeze`或者`tick fz`用于暂停游戏运行

:::tip
当游戏正在forward中时无法使用`tick query`是正常现象，不是bug
:::

### `prof`

> 拥有检查服务器健康程度以及定位卡顿源头的能力

```
/prof <normal|entity|chunk|pt> [numberOfTick: int]
```

- `prof normal` 进行普通的profile,会列出游戏多个条目的执行时间

- `prof entity`对实体更新进行profile

- `prof chunk`对区块更新进profile

- `prof pt`对计划刻进行profile

`numberOfTick`是选填参数，指定prof需要执行的`gt`数，不填时默认为20gt,如果单独使用`prof`则代表执行`prof normal 100`,相当于一个快捷指令。

### `player`

> 拥有生成假人以及控制假人行为的能力

```
 /player
 /player <name: string> <drop|droptype> <itemId: Item>
 /player <name: string> <lookat|moveto|navto> <vec3: x y z>
 /player <name: string> <spawn|dropall|info|despawn|swap>
 /player <name: string> <stop|cancel>
 /player <name: string> attack [repeat] [interval: int] [times: int]
 /player <name: string> backpack
 /player <name: string> destroy [repeat] [interval: int] [times: int]
 /player <name: string> destroypos [blockPos: x y z] [repeat] [interval: int] [times: int]
 /player <name: string> follow
 /player <name: string> interact [repeat] [interval: int] [times: int]
 /player <name: string> jump [repeat] [interval: int] [times: int]
 /player <name: string> runcmd <command: string> [repeat] [interval: int] [times: int]
 /player <name: string> script <file: string> [interval: int] [errorstop: Boolean]
 /player <name: string> select <itemId: Item>
 /player <name: string> select <slot: int>
 /player <name: string> tp <vec3: x y z>
 /player <name: string> use <itemId: Item> [repeat] [interval: int] [times: int]
 /player <name: string> useon <itemId: Item> [repeat] [interval: int] [times: int]
 /player <name: string> useonpos <itemId: Item> [blockPos: x y z] [repeat] [interval: int] [times: int]
```

#### 基础

本指令中所有的`name`都表示假人名字，并且是**必填参数**

- `/player <name: string> <spawn|despawn>` 生成和踢出假人(请注意假人死亡后会自动被踢出,且除了背包外的相关运行时数据不会保留)
- `/player <name: string> <lookat|moveto|navto> [vec3: x y z]`让假人看向/直线/寻路走到某个位置
- `/player <name: string> follow` 让假人跟随指针指向的实体(掉落物除外)，如果指针不指向任何实体，则假人会跟随执行命令的玩家
- `/player <name: string> <drop|droptype>` 假人丢出物品
  - `drop`表示丢出该类型物品至多一组（背包内搜索到的第一个槽位全部丢出）
  - `draptype`表示丢出背包内的**全部该种物品**
  - `dropall`表示丢出背包内的所有物品
- `/player <name: string> set <itemId: Item>`用于设定假人主手物品，假人会自动搜索背包并切换到主手，如果背包没有相关物品假人什么都不会做
- `/player <name: string> backpack`打印假人背包内的所有物品以及数量
- `/player <name: string> info` 打印假人的一些基本信息，用于调试
- `/player <name: string> stop`用于停止假人当前动作，如挖掘一半的方块停止，吃一半的食物停止，射出正在蓄力的弓箭等
-  `/player <name: string> tp <vec3: x y z>` 将假人传送到某个位置（暂未开放）
- `player`列出服务器所有的假人的状态以及位置
-  `/player <name: string> select <itemId: Item> ` 让假人从背包搜索物品并自动切换到主手

#### 应用

下面所有指令都有`[repeat] [interval: int] [times: int]`这三个参数，该参数用于让假人重复当前动作，其中`interval`表示每次重复的间隔，单位是`gt`，不填表示1gt一次（由于假人内置行为CD，因此实际频率可能比设定周期更低，属正常现象），`times`表示重复次数，不填表示一直重复永远不会停止，**称在做重复动作(包括执行脚本)的假人处于工作状态**

- `/player <name: string> attack ...`让假人攻击玩家指针指向的实体，如果实体不存在假人就会空挥武器
- `/player <name: string> jump ...`让假人原地跳跃
- ` /player <name: string> runcmd <command: string> ...` 让假人执行命令 
-  `/player <name: string> use <itemId: Item> ...` 让假人使用背包某个物品，如吃东西，使用末影珍珠等。物品会自动从背包中搜索并切到主手
-  `/player <name: string> useon <itemId: Item> ...` 让假人使用某个物品右键**其视线所指向**的方块，物品会自动从背包中搜索并切到主手
- ` /player <name: string> useonpos <itemId: Item> [blockPos: x y z] ...`让假人使用某个物品右键`blokcPos`位置的方块，`blokcPos`默认值是位置为玩家指针指向的方块，物品会自动从背包中搜索并切到主手
- `/player <name: string> destroy ...`让假人破坏位其**视线所指向**的的方块，`blokcPos`默认值是玩家指针指向的方块
- `/player <name: string> destroypos [blockPos: x y z] ...`让假人破坏位于`blockPos`的位置的方块，`blokcPos`默认值是玩家指针指向的方块
- `/player <name: string> interact ...`让假人和玩家指针指向的方块或者实体交互（仅限右键，无法操作GUI）
- `player cancel`取消假人的所有重复动作，也就是**解除假人的工作状态**

#### 高级

在`0.3.5`或者更高的版本中假人内置了根据LUA脚本来行动的功能，玩家只需要编写`Init()`和`Tick()`函数即可让假人执行更加丰富的功能，比如挖区块，搭路，甚至根据蓝图建造建筑等等。可使用` /player <name: string> script <file: string> [interval: int] [errorstop: Boolean]`指令来让假人运行脚本，相关细节和教程参见[高级 - 假人脚本文档 & 教程](/6.scripts)一节。

### `village`

> 拥有显示村庄相关信息的能力

```
/village <info|dweller> [vid: string]
/village <spawn|bound|center|poi|head> <onoroff: Boolean>
/village list
```

- `village list`列出所有正在加载的村庄，改指令会显示如下格式的数据：

  ```
  - [vid] [center] r:? p:? g:? b:[bounds]  
  ```

  其中`vid`表示trapdoor**分配给该村庄的唯一id,除非服务器重启，否则村庄id永远不会重复(在一个服务器实例中，该id和村庄内的UUID唯一对应)**。`center`表示村庄中心坐标，`r`表示村庄半径，`p`表示村庄内的村民数量，`g`表示村庄内的铁傀儡数量，`b`表示村庄内的床的数量，`bounds`表示村庄的范围

- `/village dweller` 打印指针指向的某个村民所绑定的POI坐标等信息

- `/village <spawn|center|bound|poi|head> <onOroff: Boolean> `用于开关村庄相关的可视化：

  - `spawn`表示铁傀儡刷新范围
  - `center`表示村庄中心
  - `bounds`表示村庄范围
  - `poi`表示POI的查询范围(我自己也忘了这个范围是做啥的了)
  - `head`表示在村民头顶显示信息，开启该选项后村民头顶会显示类似`[vid] 1 B M J 5678`这样的数据，其中中括号内的`vid`代表该村民所属的村庄的编号，后面的`1`表示该村民是该村庄的第几号村民，`B M J`分布表示该村民和床，钟，工作方块的绑定情况，绿色代表绑定，红色代表没绑定，最后的数据表示村民体内时钟的实时值。

- `/village [info] <villageID: int>`打印`vid`为`villageID`的村庄的详细数据，id缺省时打印距离玩家最近的村庄，数据格式如下所示：

  ```
  VID: 1 UUID: 12345678-1234-1234-123456780123
  - Center
  - Bounds 
  - Radius
  - Dwellers
  POIs:
  	Bed 					 |  	Alarm 			| 	Work |
  [pos]owner/cap/radius/weight | ...
  ```

  第一行是tr分配给村庄的id以及游戏内村庄的实际UUID，下面四行是村庄的中心，范围，半径以及三种居民(村民，铁傀儡，猫)的数量，后面的就是村庄内部的POI表，该表的第`i`行表示村庄内第`i`个村民绑定的POI的情况，每个POI的数据依次为：坐标，所有者数量，最大容量，POI的半径，POI的权重。

### `data`

> 拥有显示方块/实体/物品数据的能力

```
/data block [blockPos: x y z] [nbt] [path: string]
/data entity [nbt] [path: string]
/data item [nbt] [path: string] 
/data redstone <chunk|conn|info|signal> [blockPos: x y z]
```

- `/data block [blockPos: x y z] ...`打印位于`blockPos`位置的方块ID,名字等信息,该值缺省时默认为玩家指针指向的方块
- `/data entity ...` 打印玩家指针指向的实体ID,名字,位置等信息
- `/data item ... `打印手持物品的相关信息(暂未实装)
- `/data redstone <chunk|conn|signal> [blockPos: x y z]`打印位于`blockPos`位置的红石相关信息
  - `signal` 打印位于`blockPos`处的红石原件的信号强度
  - `info`打印位于`blockPos`处的红石元件的基本性质
  - `chunk`标记`blockPos`所在区块的所有红石原件(调试用)
  - `conn` 标记`blockPos`所在位置的原件(绿色框)、为该原件的所有信号源(红色框)以及该原件提供能量的所有消费者或者电容器(黄色框)，如果你看不懂这个命令是什么意思那就不用管。

`data`指令还提供了对nbt的支持,也就是`[nbt] [path: string]`这两个可选子命令：当指令后面加上nbt后插件会打印该方块/物品/实体的nbt数据。`path`提供了简单的nbt数据查询功能，该路由多个`key`或者索引构成，key之间用`.`隔开，下面是几个简单的例子：

1. 打印脚下箱子第1格的物品名字

```
data block ~ -1 ~ nbt "Items.[0].Name"
```

2. 打印实体的y轴详细坐标

```
data entitiy nbt "Pos.[1]" 
```

### `spawn`

> 拥有统计实体数量以及分析生物生成的能力

```
/spawn analyze <stop|clear|start|print>
/spawn count <all|chunk|density>
/spawn forcesp <actorType: EntityType> [blockPos: x y z]
/spawn prob [blockPos: x y z]
```

- `/spawn analyze ...` 该命令提供了分析自然生物生成的功能
  - `start` 开始实体生成统计，插件会统计**指令发出者所在维度**的所有自然生物生成情况以及**以指令发出者当前区块为中心的9*9区块**的生物的密度数据。注意：**玩家移动后该密度统计范围并不会改变**
  - `stop` 停止统计
  - `print` 打印统计数据。插件会分别打印这次统计中洞穴和露天刷出的生物数量，刷出速度以及平均密度占用等信息 
  - `clear`清除统计的数据
- `/spawn count <all|chunk|density>` 分别打印指令发出者所在**维度,区块，以及以指令发出者为中心9*9区块**的每种实体的数量
- `/spawn prob [blockPos: x y z]` 打印位置`blockPos`处可能生成的生物类型，概率，以及是否可能生成，位置缺省时为指针指向的位置
- `/spawn forcesp <actorType: EntityType> [blockPos: x y z]` 在`blockPos`处进**强制进行一次生成尝试**，位置缺省时为指针指向的位置

:::tip 

如果你不懂`prob`和`forcesp`的用途那么无视这两条指令即可

:::

### `hud`

> 拥有在屏幕上实时显示文字信息的能力

```
/hud <add|remove> <itemType: showItems>
```

- `hud <add|remove>`添加或者移除你想在hud上现实的内容(只针对执指令执行者自己，不影响其他玩家)
  - `redstone` 显示红石相关信息，目前只有信号强度
  - `base`显示一些基本的信息，包括当前游戏刻度，玩家坐标，视角，指向的方块坐标，和亮度，当前所处位置的群系等等
  - `village`显示指针指向的村民绑定的POI等信息
  - `chunk`可视化玩家所在区块的边界
  - `mspt`显示服务器最近`1s`的平均mspt和TPS
  - `hoppercounter`显示**玩家最近交互过的频道的数据**的数据

该功能可通过`func`命令来设置全局开关以及通过`self`来设置个人开关

### `hsa`

> 拥有在游戏内可视化结构生成区域(HSA)的能力

```
/hsa count
/hsa place [aironly: Boolean]
/hsa show <onoroff: Boolean>
```

- `hsa show`开启或者关闭HSA显示，开启后插件会在游戏内有HSA的地方使用粒子画出结构的刷怪点，对于游戏内的四种刷怪点，插件有不同的颜色，具体如下所示：
  - 女巫小屋 红色
  - 地狱堡垒 绿色
  - 海底神殿 黄色
  - 掠夺者前哨站 蓝色
- `hsa place`在所有缓存的生成点放置指定方块(仅创造模式可用)，`aironly`表示是否仅填充空气（默认为`false`）
- `hsa count`打印附近的HSA的总数

### `log`

> 拥有打印一些游戏内信息的能力

```
/log <mspt|os>
/log <levelseed|enchantseed>
/log pt [blockPos: x y z]
```

- `log mspt`打印最近`1s`的mspt和tps
- `log os`打印服务器的CPU占用率和内存使用信息
- `log levelseed`打印世界种子
- `log enchantseed`打印当前玩家的附魔种子
- `log pt`打印当前区块的计划刻的详细信息

:::tip

该功能还在建设中，因此功能较少

:::

### `counter`

> 拥有查看漏斗接受物品速度的能力

```
/counter print [channel: int]
/counter reset [channel: int]
```

在使用`func hopper true`开启漏斗计数器后，所有对准**混凝土**的漏斗都将变成无尽的漏斗，所有**流向该漏斗的物品都会消失**，但是这些数据会被插件记录下来，你可以使用`/counter`命令查看这些数据。16种混凝土每一种对应一个频道(根据特殊值)。

- `/counter print [channel: int]`打印频道`channel`的数据(你也可以直接使用仙人掌右键对应颜色的混凝土以达到相同的效果)
- `/counter reset [channel: int]`清除频道`channel`的数据

注意:从使用`func hopper true`这一刻开始漏斗计数器就开始计时了，而不是其他时间。

### `slime`

> 拥有可视化史莱姆区块的能力

```
/slime clear
/slime range <range: int>
/slime show <onoroff: Boolean>
```

- `slime show`开启或者关闭史莱姆区块显示
- `slime range`设置史莱姆显示范围
- `slime clear`清除史莱姆区块的数据缓存


## Shortcut

`Shortcut`提供了一些触发器，可以让服务器使用者通过修改配置文件来完成一些自定义功能，详见[高级 - Shortcuts](/5.shortcuts)一节。
