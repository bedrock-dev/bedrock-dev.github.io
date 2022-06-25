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



