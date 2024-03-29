# 6. 假人脚本
## 基本介绍


0.35.0及以上版本中内置了假人执行脚本功能。为了使用该功能首先需要编写脚本文件，然后将其放在`根目录/plugins/trapdoor/scripts/`目录内部。然后在游戏内部使用指令`/player <name: string> script <file: string> [interval: int] [errorstop: Boolean]`指令加载脚本文件即可让特定假人执行该脚本。

脚本使用Lua5.4.2进行编写，内部必须要有`Init()`和`Tick()`两个函数，其他的随意，一个最简单的可用脚本如下所示：
```lua
function Init()
end
function Tick()
end
```

当使用`player script`子命令加载该脚本后，会立即执行一遍`Init()`函数，然后根据命令传入的参数每隔`interval`gt执行一次`Tick()`函数，这称为脚本的一次**更新**。`errstop`参数表示是否再执行出错后停止假人的脚本行为，默认为`true`，一般可不用修改。

## 内置类型和变量

`Tradpoor`为脚本提供了一些内置API和类型用于方便脚本编写，下面进行详细介绍。

> 从这里开始使用`float`和`int`分别代指浮点和整数类型的`number`

### 内置类型

#### `BlockPos`

整数坐标,也叫方块坐标,用于方块坐标和区块坐标等

| 成员             | 类型     | 解释  |
| ---------------- | -------- | ----- |
| x                | int      | x坐标 |
| y                | int      | y坐标 |
| z                | int      | z坐标 |
| new(x,y,z),new() | 构造函数 |       |

#### `Vec3`

浮点坐标,也叫世界坐标,用于视角,实体位置等

| 成员             | 类型     | 解释  |
| ---------------- | -------- | ----- |
| x                | float    | x坐标 |
| y                | float    | y坐标 |
| z                | float    | z坐标 |
| new(x,y,z),new() | 构造函数 |       |

#### `BlockInfo`

方块基本信息

| 成员    | 类型   | 解释                             |
| ------- | ------ | -------------------------------- |
| id      | int    | 方块id                           |
| name    | 字符串 | 方块名字(不包括`minecraft:`前缀) |
| variant | int    | 方块数据值                       |

#### `ItemStackInfo`

物品堆叠基本信息

| 成员   | 类型   | 解释                             |
| ------ | ------ | -------------------------------- |
| id     | int    | 物品id                           |
| name   | 字符串 | 物品名字(不包括`minecraft:`前缀) |
| count  | int    | 物品堆叠的数量                   |
| aux    | int    | 物品的数据值                     |
| damage | int    | 物品的当前耐久值                 |

### 内置变量

内置变量是通过脚本操作假人的基本手段,**请不要对内置变量重新赋值**.

#### Bot

| 函数原型                                                     | 解释                                 | 参数                                                         | 返回值                                                       | 备注                           |
| ------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| `BlockPos getStandOn()`                                      | 获取假人站立的方块坐标               |                                                              | 假人站立的方块坐标                                           |                                |
| `Vec3 getPos()`                                              | 获取假人自身的标准实体坐标           |                                                              | 假人自身的标准实体坐标                                       |                                |
| `Vec3 getViewVector()`                                       | 获取假人的视线向量                   |                                                              | 假人的视线向量                                               |                                |
| `BlockPos getBlockPosFromView()`                             | 获取假人指向的方块坐标               |                                                              | 假人指向的方块坐标                                           |                                |
| `float getHungry()`                                          | 获取假人的饥饿值                     |                                                              | 假人的饥饿值                                                 | 最大值待补充                   |
| `int getHealth() `                                           | 获取假人血量                         |                                                              | 假人血量                                                     | 最大值待补充                   |
| `int getDirection()`                                         | 获取假人看的方向                     |                                                              | 假人看向的方向,返回0~5这六个值，代表不同的方向               | 六个值表示的具体方向未知       |
| `ItemStackInfo getItemStackInfoInSlot(slot: int)`            | 获取假人背包内某个槽位的物品基本信息 | 槽位，0~8代表物品栏，9~35表示背包                            | 物品基本信息                                                 | 暂不支持盔甲栏和副手           |
| `void say(msg: string) `                                     | 向服务器广播一条信息                 | 消息                                                         |                                                              | 也会输出在控制台，谨防刷屏     |
| `bool jump()`                                                | 假人跳跃                             |                                                              | 操作是否成功                                                 |                                |
| `void lookAt(v: Vec3)`                                       | 假人看向某个世界坐标                 | 要看向的坐标                                                 |                                                              |                                |
| `bool selectItem(name: string)`                              | 假人从背包搜索某个物品并和主手交换   | 搜索的物品名字                                               | 操作是否成功（背包内有该物品就会成功）                       |                                |
| `bool destroyPosition(pos: BlockPos)`                        | 假人左键某个方块                     | 方块坐标                                                     | 操作是否成功                                                 | 默认使用主手工具               |
| `int useItemOnPosition(name: string, pos: BlockPos,face: int) ` | 假人使用物品右键某个方块             | `name`代表物品名字，`pos`表示方块坐标，face表示要交互的面选填0~5 | -1：背包没有该物品<br>1：有物品但是操作失败<br>0：操作成功   | 会自动从背包搜索物品并切到主手 |
| `bool interactPosition(pos: blockPos, face: int)`            | 假人和某个方块交互（工作台，箱子等） | `pos`表示方块坐标，`face`表示要交互的面，选填0~5             | 操作是否成功                                                 |                                |
| `bool useItem()`                                             | 假人使用物品                         | 要使用的物品名字                                             | -1：背包没有该物品<br/>1：有物品但是操作失败<br/>0：操作成功 | 会自动从背包搜索物品并切到主手 |
| `bool attack()`                                              | 假人左键攻击                         |                                                              | 操作是否成功                                                 | 空挥攻击，暂时不支持指定实体   |
| `dropItemInSlot(slot: int)`                                  | 假人丢出背包内某个栏位的物品，       | 槽位，0~8代表物品栏，9~35表示背包                            |                                                              |                                |
| `void moveTo(vec: Vec3)`                                     | 假人直线移动到某个位置               | 目标位置                                                     |                                                              | 非瞬间完成的动作               |



#### Level

| 函数原型        | 解释           | 参数 | 返回值     | 备注 |
| --------------- | -------------- | ---- | ---------- | ---- |
| `getTick()`     | 获取当前游戏刻 |      | 当前游戏刻 |      |
| `getTime()`     | 获取游戏内时间 |      | 游戏内时间 |      |
| `getMeanMspt()` | 获取当前MSPT   |      | 当前MSPT   |      |



#### Region

| 函数原型                                | 解释                   | 参数 | 返回值   | 备注 |
| --------------------------------------- | ---------------------- | ---- | -------- | ---- |
| `BlockInfo getBlockInfo(pos: BlockPos)` | 获取特定位置的方块信息 | 坐标 | 方块信息 |      |

## 教程和示例

### 教程

对于没有任何编程基础的玩家，请直接网上搜索Lua教程，学习最基本的部分即可。

对于有`C/C++/Java`基础的玩家，可以简单了解一下Lua的语法即可进行编写，下面是一些tips

1. 使用`对象:函数()`的方法来执行函数，注意中间是`:`不是`.`
2. 使用`对象.成员变量`等来获取数据
3. 不要对内置对象`Bot`、`Level`、`Region`重新赋值
4. 对于函数内局部变量（类似c语言中的函数内变量）请使用`local`标识符

### 其他技巧与说明信息

1. 建议在非生产环境测试脚本能用后再部署到实际的服务器中，防止出现未知的错误或者崩溃
2. 如果发生错误，可以在控制台看到详细的错误信息（不会输出到游戏内部）
3. 设定`Tick`执行间隔的时候优先使用`script`子命令内的参数，而不是使用脚本内计数器的方案，这样可以降低一定卡顿
4. 暂未性能进行测试，如果发现明显的掉刻，请优化自己编写的脚本，减少函数执行频率，甚至停止脚本的使用
5. 不使用该功能时不会产生任何额外的卡顿
6. 如果发现任何（非编程上的）问题，请前往github反馈

### 实例

下面通过一些简单的例子以介绍如何利用上方的API来开发假人脚本

#### 1. 每间隔1秒播报一次自己的相关信息和MSPT等信息

```lua
-- info.lua
function Init()  
end
function Tick()
    Bot:say(string.format("MSPT 是 %.3f",Level:getMeanMspt()))
    Bot:say(string.format("现在的时间是 %d 游戏刻是 %d",Level:getTime(),Level:getTick()))
    local pos = Bot:getPos()
    Bot:say(string.format("我的坐标是%.3f %.3f %.3f",pos.x,pos.y,pos.z))
    local hungry = Bot:getHungry()
    local health = Bot:getHealth()
    Bot:say(string.format("我的饥饿度是 %.3f,我的血量是 %d",hungry,health))
    local stand = Bot:getStandOn()
    local blockInfo = Region:getBlockInfo(stand)
    Bot:say(string.format("我站的方块坐标是 %.3f %.3f %.3f 脚底的方块类型是 %s id 是 %d",
    stand.x,stand.y,stand.z, blockInfo.name, blockInfo.id))
end
```

执行指令 `/player bot scirpt info.lua 20` 即可让假人`bot`20gt执行一次`Tick()`函数

#### 2.  检测到饱食度不满自动吃东西

假设背包内有足够的熟牛肉

```lua
-- food.lua
Interval  = 0
function  Init()
end
function  Tick()
    Interval = Interval + 1
    if Interval % 200 == 0 then --每10s检测一次
        local hunger = Bot:getHungry() -- 获取饥饿度
        if hunger <= 18.0 then -- 小于18认为饿了
            Bot:useItem("cooked_beef") -- 从背包搜索熟牛肉并食用
        end
    end    
end
```

执行指令 `/player bot scirpt food.lua` 即可让假人每10秒检测，如果饥饿度小于18则自动从背包中寻找熟牛肉并吃掉

#### 3. 自动搭高

假设假人背包有足够的石头

```lua
-- jump.lua
Interval = 0
Stand = nil
function Init()
    Stand = Bot:getStandOn() -- 初始化站立的方块
end
function Tick()
    Interval = Interval + 1
    if Interval % 60 == 0 then  -- 每间隔3s跳一次，并记录跳之前的坐标
        Stand = Bot:getStandOn()
        Bot:jump()
    end
    -- 实时监测假人自身位置，如果足够高就放方块
    local pos = Bot:getPos()
    if (pos.y - 1.62) - (Stand.y + 1) >= 1  then  -- 跳的高度超过一个方块
        --(pos.y - 1.62)表示假人实时的脚底高度, (Stand.y+1)表示上一个方块的上表面高度
        Bot:useItemOnPosition("stone", Stand, 1) -- 从上面往下放一个方块（自动从背包搜索石头）
    end
end
```

执行指令 `/player bot scirpt jump.lua` 即可让假人每3秒跳一次，并在脚下放置石头





