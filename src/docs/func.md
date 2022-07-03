# 功能介绍

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

### `tick`

> 拥有改变世界运行速度的能力

```
/tick <acc|slow> <times: int>
/tick <forward|warp> <tickNumber: int>
/tick <reset|query|freeze>
```

- `/tick <acc|slow> <times: int>`用于加快或者放慢游戏运行速度为原来的`time`倍或者`1/time`

- `/tick <forward|warp> <tickNumber: int>`用于让世界以较快的速度前进`tickNumber`个游戏刻。其中`forward`是瞬间完成（具体多久取决于服务器CPU，forwarding途中服务器没反应是正常现象，请耐心等待），`warp`是在**不掉刻的前提下**以最快的速度加速运行`tickNumber`个游戏刻。

- `/tick <reset|query|freeze>`

  - `reset`用于重置世界到正常状态
  - `query`用于查询世界运行状态，如正在以多少倍速的速度运行，`warp`还剩多少个游戏刻等等
  - `freeze`用于暂停游戏运行

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
- `prof pt`对计划刻进行profile（该指令暂未实装）

- `numberOfTick`选填参数，指定prof需要执行的gt数，不填时默认为20gt

### `Player`

> 拥有生成假人以及控制假人行为的能力

```
/player
/player <name: string> <lookat|moveto> [vec3: x y z]
/player <name: string> <spawn|despawn>
/player <name: string> <stop|cancel>
/player <name: string> attack [repeat] [interval: int] [times: int]
/player <name: string> backpack [slot: int]
/player <name: string> destroy [blockPos: x y z] [repeat] [interval: int] [times: int]
/player <name: string> interact [repeat] [interval: int] [times: int]
/player <name: string> jump [repeat] [interval: int] [times: int]
/player <name: string> set <itemId: Item>
/player <name: string> use <itemId: Item> [repeat] [interval: int] [times: int]
/player <name: string> useon <itemId: Item> [blockPos: x y z] [repeat] [interval: int] [times: int]
```

本指令中所有的`name`都表示假人名字，并且是**必填参数**

- `/player <name: string> <spawn|despawn>` 生成和踢出假人(请注意假人死亡后会自动被踢出)
- `/player <name: string> <lookat|moveto> [vec3: x y z]`让假人看向/走到某个位置
- `/player <name: string> set <itemId: Item>`用于设定假人主手物品，假人会自动搜索背包并切换到主手，如果背包没有相关物品假人什么都不会做
- `/player <name: string> backpack [slot: int]`打印假人背包内的所有物品(slot参数暂时没有实装)

下面所有指令都有`[repeat] [interval: int] [times: int]`这三个参数，该参数用于让假人重复当前动作，其中`interval`表示每次重复的间隔，单位是gt，不填表示1gt一次，`times`表示重复次数，不填表示一直重复永远不会停止，**我们称在做重复动作的假人处于工作状态**

- `/player <name: string> attack ...`让假人攻击玩家指针指向的实体，如果实体不存在玩家就会空挥武器
- `/player <name: string> destroy [blockPos: x y z] ...`让假人破坏位于`blockPos`的位置的方块，默认位置为玩家指针指向的方块
- `/player <name: string> interact ...`让假人右键位于玩家指针指向的方块或者实体
- `/player <name: string> jump ...`让假人原地跳跃
- `/player <name: string> use <itemId: Item> ...`让假人使用物品，相当于玩家的使用弓箭，三叉戟，吃东西，丢末影珍珠等动作（物品会在背包中自动搜索）
- `/player <name: string> useon <itemId: Item> [blockPos: x y z] ...`让假人使用特定物品右键位于`blockPos`位置的方块，默认位置为玩家指针指向的方块

此外`player`还提供了如下三个命令

- `/player stop`用于停止假人当前动作，如挖掘一半的方块停止，吃一半的食物停止，射出正在蓄力的弓箭等
- `player cancal`取消假人的所有重复动作，也就是**解除假人的工作状态**
- `player`列出服务器所有的假人的状态以及位置

### `village`

> 拥有显示村庄相关信息的能力

```
/village <spawn|center|bound|poi|head> <onOroff: Boolean>
/village [info]
/village [info] <villageID: int>
/village list
```

- `village list`列出所有正在加载的村庄，改指令会显示如下格式的数据：

  ```
  - [vid] [center] r:? p:? g:? b:[bounds]  
  ```

  其中`vid`表示trapdoor**分配给该村庄的唯一id,除非服务器重启，否则村庄id永远不会重复(在一个服务器实例中，该id和村庄内的UUID唯一对应)**。`center`表示村庄中心坐标，`r`表示村庄半径，`p`表示村庄内的村民数量，`g`表示村庄内的铁傀儡数量，`b`表示村庄内的床的数量，`bounds`表示村庄的范围

- `/village <spawn|center|bound|poi|head> <onOroff: Boolean> `用于开关村庄相关的可视化：

  - `spawn`表示铁傀儡刷新范围
  - `center`表示村庄中心
  - `bounds`表示村庄范围
  - `poi`表示POI的查询范围(我自己也忘了这个范围是做啥的了)
  - `head`表示在村民头顶显示信息，开启该选项后村民头顶会显示类似`[vid] 1 B M J 4514`这样的数据，其中中括号内的`vid`代表该村民所属的村庄的编号，后面的`1`表示该村民是该村庄的第几号村民，`B M J`分布表示该村民和床，钟，工作方块的绑定情况，绿色代表绑定，红色代表没绑定，最后的数据表示村民体内时钟的实时值。

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
/data redstone [blockPos: x y z]
```

- `/data block [blockPos: x y z] ...`打印位于`blockPos`位置的方块ID,名字等信息,该值缺省时默认为玩家指针指向的方块
- `/data entity ...` 打印玩家指针指向的实体ID,名字,位置等信息
- `/data item ... `打印手持物品的相关信息(暂未实装)
- `/data redstone [blockPos: x y z]`打印位于`blockPos`位置的红石相关信息(目前只支持信号强度)

`data`指令还提供了对nbt的支持,也就是`[nbt] [path: string]`可选子命令：当指令后面加上nbt后插件会打印该方块/物品/实体的nbt数据。`path`提供了简单的nbt数据查询功能，该路由多个`key`或者索引构成，key之间用`.`隔开，下面是几个简单的例子：

1. 打印脚下箱子第1格的物品名字

```
data block ~ -1 ~ nbt "Items.[0].Name"
```

2. 打印实体的y轴详细坐标

```
data entitiy nbt "Pos.[1]" 
```

### `Spawn`

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
- `/spawn forcesp <actorType: EntityType> [blockPos: x y z]` 在`blockPos`处进强制进行一次生成尝试，位置缺省时为指针指向的位置

:::tip 

如果你不懂`prob`和`forcesp`的用途那么无视这两条指令即可

:::

