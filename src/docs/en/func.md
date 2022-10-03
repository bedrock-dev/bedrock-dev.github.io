# Functions

## Description

:::tip
The following description is same as vanilla commands, skip if familliar with it
:::

In ALL description of command

- `<>`represents varibles
- `<a|b|c>`represents choosing one between sub-commands`a,b,c`
- `<name:type>`represents variable to be input, `name` represents impilcation, `type` represents criteria, identical to vanilla feature
- `[name:type]` represents unnecessary variable

## Commands

### `trapdoor`

> Adjust the plugin's setting

```
/trapdoor hudfreq <frequency: int>
/trapdoor pm <low|medium|high>
/trapdoor pvd <maxDistance: int>
```

- `/trapdoor hudfreq ` Regulates hud information update frequency
- `/trapdoor pm` Regulates particles quality, higher its quality, highers the render pressure for client side
- `/trapdoor pvd` Regulates maximum particle render distance, not done

### `func`

> Switch on or off partial functions

```
/func blockrotate [onoroff: Boolean]
/func hoppercounter [onoroff: Boolean]
/func hud [onoroff: Boolean]
```

- `/func blockrotate` Enables cactus block rotating function, not done
- `/func hoppercounter` Enables hopper counter
- `/func hud` Enables global hud display

### `tick`

> Change world running speed

```
/tick <acc|slow> <times: int>
/tick <forward|warp> <tickNumber: int>
/tick <reset|query|freeze>
```

- `/tick <acc|slow> <times: int>` is for adjusting game speed to `time` or`1/time` of normal game speed

- `/tick <forward|warp> <tickNumber: int>` is for jumping to `tickNumber` gametick forward with a faster speed. `forward` should be done immediately, duration depends on server CPU strenth, `warp` is to run game with fastest speed under 20TPS for `tickNumber`gameticks

- `/tick <reset|query|freeze>`

  - `reset` resets world to normal speed
  - `query` inquires current world speed and tick remaining for `warp`
  - `freeze` freezes game

:::tip
`tick query`command is unavailable during game forwarding
:::

### `prof`

> Detect lag source and check the performance of the server

```
/prof <normal|entity|chunk|pt> [numberOfTick: int]
```

- `prof normal` Run profile and list duration for loading serveral game contents

- `prof entity` Run profile for entity system

- `prof chunk` Run profile for chunk updates

- `prof pt` Run profile for pending tick (unavailable yet)

`numberOfTick` Repersents ticks required for sampling prof value, default value would be 100

### `player`

> Summon fakeplayer and control their behavior

```
/player
/player <name: string> <lookat|moveto> [vec3: x y z]
/player <name: string> <spawn|despawn>
/player <name: string> <stop|cancel>
/player <name: string> attack [repeat] [interval: int] [times: int]
/player <name: string> backpack [slot: int]
/player <name: string> destroy [repeat] [interval: int] [times: int]
/player <name: string> destroyon [blockPos: x y z] [repeat] [interval: int] [times: int]
/player <name: string> interact [repeat] [interval: int] [times: int]
/player <name: string> jump [repeat] [interval: int] [times: int]
/player <name: string> set <itemId: Item>
/player <name: string> use <itemId: Item> [repeat] [interval: int] [times: int]
/player <name: string> useon <itemId: Item> [blockPos: x y z] [repeat] [interval: int] [times: int]
```

`name` repersents name of a fakeplayer which is a **must-fill variable**

- `/player <name: string> <spawn|despawn>` Summon and kick fakeplayers (fakeplayers will be kicked after dying)
- `/player <name: string> <lookat|moveto> [vec3: x y z]` Control coordinates that fakeplayer is looking or standing at
- `/player <name: string> set <itemId: Item>` Set main-hand item for fakaplayer which enables them to search item in inventory, nothing will be happening if no such item exists
- `/player <name: string> backpack [slot: int]` Print all item in fakeplayer's inventory, slot variables unavailable yet

All of the following commands includeds `[repeat] [interval: int] [times: int]` variables, which enables fakeplayers to repeat certain action.`interval` repersents time interval between action with gt as unit(1gt as default),`times` repersents number of such action will be repeated, **fakeplayers in such status is called "working mode"**

- `/player <name: string> attack ...` Let fakeplayer attack entities, if available, in front of them
- `/player <name: string> destroyon [blockPos: x y z] ...`Let fakeplayer destroy blocks of certain coordinate
- `/player <name: string> destroy ...`Let fakeplayer destroy the block which player is pointing to
- `/player <name: string> interact ...`Let fakeplayer rightclick to interact with block which player is pointing to
- `/player <name: string> jump ...`Let fakeplayer jump
- `/player <name: string> use <itemId: Item> ...`Let fakeplayer use item, including bow, trident, food from inventory
- `/player <name: string> useon <itemId: Item> [blockPos: x y z] ...`Let fakeplayer rightclick block locating at `blockPos` with certain item

`player` also including the following three commands:

- `/player stop` Stop fakeplayer from its action, including destoying block, eating food, etc.
- `player cancal` Cancel the repeating action of fakeplayer which **they quit "working mode**
- `player` List all fakeplayer on the server and their position respectively

### `village`

> Inquire village information

```
/village <spawn|center|bound|poi|head> <onOroff: Boolean>
/village [info]
/village [info] <villageID: int>
/village list
```

- `village list`List all loaded village in the following format:

  ```
  - [vid] [center] r:? p:? g:? b:[bounds]  
  ```

  Which `vid` represents the **unique ID that Trapdoor gave to the village, the id will not change unless server is restarted(in a server, the ID is corresponded to the village's UUID**。`center`represents coordinates of village centre, `r` represents village radius, `p` represents the amount of villagers，`g` represents amount of iron golems, `b` represents amount of beds, `bounds` represents village boundary

- `/village <spawn|center|bound|poi|head> <onOroff: Boolean> ` enables visualizing village information, which:

  - `spawn` represents spawning area of iron golem
  - `center` represents village centre
  - `bounds` represents village boundary
  - `poi` represents POI searching area
  - `head` represents displaying information of villagers above their head with `[vid] 1 B M J 4514` format, which `vid` represents the number of village it belongs, `1` represents the numerical order of villager in its belonging village, `B M J` represents the linking status of bed, bell, and work station respectively, green for bineded while red is not, the last value represents the TS value of the villager.

- `/village [info] <villageID: int>` represents printing of detailed information for the village with the given `vid`, if ID is not inputed, nearest village's information will be printed instead as followings:

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

  the first line is the village ID given by Trapdoor and the actual UUID of the village, the following four lines represents center, area, radius and residents(including villagers, iron golems, cats) respectively. Followed by the POI table which the `i`th row shows the POI linking status of the `i`th villager. the POI data, including coordinates, amount of owner, max capacity, POI radius and POI rates, are listed in order under the POI.

### `data`

> Enables display of blocks, entities and item data

```
/data block [blockPos: x y z] [nbt] [path: string]
/data entity [nbt] [path: string]
/data item [nbt] [path: string] 
/data redstone <chunk|conn|signal> [blockPos: x y z]
```

- `/data block [blockPos: x y z] ...` prints information of the block located at `blockPos` including block ID, name, if absent, pointed block will be printed
- `/data entity ...` prints entity information which command user is pointing at
- `/data item ... ` prints item information which is on command user's hand
- `/data redstone <chunk|conn|signal> [blockPos: x y z]` prints redstone status of which located at `blockPos`
  - `signal` prints redstone strength of the redstone component located at`blockPos`
  - `chunk` marks every redstone component of the chunk which `blockPos` locates
  - `conn` marks the redstone component which located at `blockPos` which green box, source of redstone signal with red box, consumers supplied by yellow boxed component with yellow box

`data` command also have nbt data supported, which `[nbt][path:string]' are available for use:
Adding of `nbt` behind command will print nbt data of the block/item/entity.
`path` provides simple nbt checking function which is made by several `key` and tags which keys are separated with `.`, examples as follow:

1. Print the first slot of the chest under the command user:

```
data block ~ -1 ~ nbt "Items.[0].Name"
```

2. Print the detailed y-coordinate of an entity

```
data entitiy nbt "Pos.[1]" 
```

### `spawn`

> Enables counting of entities and analysing of spawning behavior

```
/spawn analyze <stop|clear|start|print>
/spawn count <all|chunk|density>
/spawn forcesp <actorType: EntityType> [blockPos: x y z]
/spawn prob [blockPos: x y z]
```

- `/spawn analyze ...` enables analyze of spawning ability
  - `start` starts counting of spawning of the **dimension where command user is located** and the **density check of the player when command is sent**.
  - `stop` stops the counting
  - `print` prints the counted value, including surface spawn, cave spawn, speed of spawning, and average density check occupation
  - `clear` clear counted data
- `/spawn count <all|chunk|density>` prints the amount of entites of the dimension, chunk and 9*9 chunk that player is located at respectively
- `/spawn prob [blockPos: x y z]` prints possibility all mobs spawning at `blockPos` and their corrisponding spawning type, rates and ability to spawn. If unavailable, pointed block coordinates will be used
- `/spawn forcesp <actorType: EntityType> [blockPos: x y z]` **forcibly** spawns a mob at `blockPos`. If unavailable, pointed block coordinates will be used

:::tip 

Skip `prob` and `forcesp` if you do not understand their usage

:::

### `hud`

> Enables display of HUD on screen

```
/hud <add|remove> <redstone|village|hoppercounter|mspt|base>
/hud show <onoroff: Boolean>
```

- `hud show` enables hud for yourself
- `hud <add|remove>` enables partial information on HUD for yourself
  - `redstone` displays redstone strength
  - `base` displays basic infomation including gameticks, coordinates, angle of view, pointed block coordinate, brightness and biome
  - `village` displays village information, unavailable yet
  - `chunk` visualizes chunk boarder of the loacated chunk
  - `mspt` displays the mspt and tps of the past second
  - `hoppercounter` display cooresponding hopper counter of specific concrete color 

This function can be enabled by `func` command

### `hsa`

> Enables visualizing of hard-coded spawning area(HSA)

```
/hsa clear
/hsa place <blockName: Block>
/hsa show <onOroff: Boolean>
```

- `hsa show` enables visualizing of HSA, particals will be used to display the HSA, with different color refering different type of HSA
  - Witch hut        - Red
  - Fortress         - Green
  - Ocean Monument   - Yellow
  - Pillager Outpost - Blue
- `hsa place` places specific block of all HSA cache, unavailable yet
- `hsa clear` clears the HSA cache

### `log`

> Enables printing of some game information

```
/log <mspt|os>
```

- `log mspt` prints the mspt and tps for the past second
- `log os` prints the CPU and RAM occupation status

:::tip

More function developing

:::

### `tweak`

> Enables functions that change vanilla feature

```
/tweak autotool <onoroff: Boolean>
/tweak fcopen <onoroff: Boolean>
/tweak fcplace <level: int>
/tweak nocost <onoroff: Boolean>
```

:::warning

This command changes vanilla feature, think twice before using

:::

- `tweak fcopen` enables forcibly opening containers
- `tweak fcplace` enables forcibly placing of blocks with level of `0,1,2`
  - 0: vanilla
  - 1: ignores entities
  - 2: ignores all placing condition
- `/tweak nocost ` enables dropper/dispenser to drop/dispense without any cost
- `tweak autotool` enables automatic searching of suitable tools when destroying blocks

### `counter`

> inquire the speed of item entering hopper

```
/counter print [channel: int]
/counter reset [channel: int]
```

After using `func hopper true`, all hoppers pointing to concrete will have unlimited volume, all items entering the hopper dissapear, but recorded. Using `counter` command can show these data

- `/counter print [channel: int]` prints data in `channel`, right clicking corresponding concrete also works
- `/counter reset [channel: int]` clears data in `channel`

Note: Hopper counter counts from the gametick when `func hopper true` is used

### `slime`

> Enables visualizing of slime chunks

```
/slime clear
/slime range <range: int>
/slime show <onoroff: Boolean>
```

- `slime show` enables the display of slime chunks
- `slime range` adjusts display range of slime chunks
- `slime clear` clear slime chunk cache


## Shortcut

`Shortcut` provides some shortcut for server users to customize functions by editing config.

