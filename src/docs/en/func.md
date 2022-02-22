## Brief introduction
Trapdoor plugin provides a large variety of command-activated functions. To have better experience, you are highly recommened to activiate the latest version of Trapdoor CUI texture pack on client side.

## Description
For all commands below,
- `[]`means filling in parameter
- `[int]`means filling in integers, such as `-1,1,0,12,128`
- `[bool]`means filling bool, such as `true`(`1`) or`false`(`0`)
- `[str]`means filling words or symbols

Moreover, for all commands, you can use `?` to seek help, for example:
```shell
tick ?
```
will show all `tick` commands and their description
## Command list

### `td?`
It shows all commands that **you are allowed to use**, if it did not show some commands, there is a possibility of command being switched off by the sever operator,or your operation level is not high enough.

### `apicfg`
It is for adjusting the setting of the api of plugin,only two options available.
- `apicfg pvd [int]`  adjust the visible distance of the particles including village boundary, chunk visualize, etc.
- `apicfg pm [bool]`  reducing the lag cause by the particles which also reduce the quality of particles

### `tick`
#### sub-commands
- `tick fz` stop world ticking
- `tick slow [int]`  slow down ticking speed to `1gt = 50 * num ms`,`num`is between`[2,64]`
- `tick acc [int]` accelerate ticking speed to`1gt = 50/num ms`, actual effect depends on how good your server is , which `num` lies between `[2,10]` 
- `tick fw [int]` tick forward `num` gt, which skips the`num`of gt. If the `num` is too large, it needs to load for a longer time.
- `tick r` reset the tick speed back to normal game tick speed
- `tick q` ask for the ticking speed status
#### Description
1. After running a large amount of`tick`related command, there is a possibility of players unable to join in the server because of the clock synchronization. This problem is unable to be fixed unless you restart the server.
2. While using the`tick acc`, prevent having a very large value. Using `prof` command to check mstp and calculate `50/mstp` as the `[int]`

### `mspt`
Shows the `mspt` and `TPS` in game, reminded that **only 1 gametick is in calculated** and as tasks done in redstone tick is much more than non-redstone tick, it is normal that the mstp is fluctuating. If the value is very large, it means that redstone tick is detected and vice versa. If you want a more reliable value, `prof` is recommended or simply take average of the `mstp` value

At new version of `mstp` when the symbol `#` is in red, it means it is at redstone tick and white means non-redstone tick

### `prof`

- `prof` calculate and display the average value of`100gt`, so it will be taking `5s` for a result. This would be outputted as result:

>mstp & TPS
>
>time of redstone system ticking
>
>time of chunks loaded and of entities ticking
>
>amount of chunks being ticking and the total tick time
>
>random tick of chunks
>
>block entities ticking 
>
>pending tick 

- `prof actor` calculate and display the detailed calculation time for all entities while the game is running, which can also be used to display all entities in ticking area. If the entities shows zero, it means that it is `despawned` during the calculation. An average in `100gt` will be calculated and displayed with the following format:
>entity name, english display, total ticking time (total amount of entities in loaded chunks )

### `func`
It is for switching on or off specific function for all players and server
- `func rotate [bool]` on or off cactus rotating function, default off
- `func hopper [bool]` on or off hopper counter, default off
- `func spawn [bool]` on or off mob spawning rates analysis, default off
- `func expl [bool]` on or off explosion  destroy blocks (affecting entities but not landscape while on)
- `func ncud [bool]` on or off NC(neighbor changed) update
### `village`
It is for village related commands
- `village list` lists **all ticking village**, update once per `1s`
- `village b [bool]` on or off visualizing village boundary, red at default
- `village c [bool]` on or off visualizing village center, heart particle as default
- `village s [bool]` on or off visualizing iron golem spawning area (if inaccurate area is displayed, please contact developer), red at default
- `village p [bool]` on or off displaying POI requesting boundary, red at default
- `village v [bool]` on or off village info display, `B M J` will be displayed above villagers' head which represent `Bed`, `Bell` and `Job` respectively which red represent non-linked and green represent linked. Attacking the villager will show the village center and POI linked while attacking iron golem can show the village center which the iron golem is in. When this function is enabled, it will not do any damage to villager and iron golem while attacking it.
- `village n`lists all detail information of the nearest village including all POI and the linking relationship
> Color of the boundary display and the particle for village center display can be set in the `trapdoor-config.json`

### `hsa`
- `hsa show [bool]`shows the hsa at specific structures, which red represents `fortress`, green for `witch hut`, blue for `ocean monument` and yellow for `pillager outpost` (due to bugs of render dragon, hsa in fortress are unable to display at version `1.16.201` or above)
- `hsa draw [bool]` place block under hsa
- `hsa clear` clear hsa data and print amount of cleared hsa data
### `slime`

- `slime show [bool]` on or off slime chunk display, updated each `5s`
- `slime c`clear and re-calculate the slime chunk saved
- `slime r [int]` set the radius of slime chunk display being visualize with radius: `r`
### `spanwcounter`

> Function removed as potential risk of corruption

This command support mob spawning analysing supports
- `spawncounter s` start counting mob spawning
- `spawncounter e` stop counting mob spawning
- `spawncounter p`print result
### `o,s,c`
An extension of `gamemode` command
- `o` switch to spectator mode
- `s` switch to survival mode
- `c` switch to creative mode

### `OS`

Display server usage information,

```
CPU : 12%
Mem: 170MB VMem 171MB
Read/Write: 1203/1234 KB
```

### `self`

Display player's personal information which will not affect other players

- `self`display chunk location, direction facing,biome name ,dimension and some other info
- `self chunk [bool]`display chunk border where the player is located
- `self me [bool]` on or off measuring function
- `self rs [bool]` on or off signal source displaying

### `backup`

This is backup-related function, which needs to fill  level name in config file before using

- `backup b`backup the world
- `backup l`list all backups
- `backup crash`crash server

All world files are not compressed and copied into the `trapdoor-backup` folder

### `draw`

Have to enable `func draw true` before using

This command has increased the possibility of `fill` command and enable drawing circle and sphere

All filling block will be the block below the player

- `draw ci [int]`fill a circle with radius of `abs(num)` while num>0 it will filled with solid, (num)<0 will be filling with hollow
- `draw sp [int]`fill a sphere which using basically the same system mentioned above

> This command is not working if player is standing on block which height 1.5 (blame hhhxiao, he is not planning to fix kekw)

### `counter`

Have to enable`func hopper true`before using

Hopper counter is for counting the amount of item collected

After using `/func hopper true`, if the hopper is not aiming at any color of concrete but not chests, the hopper will become infinite hopper which all items absorbed into hopper with not enter any slot of the hopper but data will be recorded. By using `counter p channel`, you can check the data of item collected by hopper, amount of item and the rate of item entering the hopper. Using `/counter reset [channel]` can reset hopper data of all channels which `[channel]` is `[0-15]`. Once if you are not sure about which channel do the color represents, you can right click with a cactus to show specific channels.

### `fakeplayer`
 > Experimental function, please download code to recomplie

 trapdoor **can not create a fakeplayer**, it can only interact with  [fake player software](https://github.com/ddf8196/FakePlayer) . After activating the websocket of fake player,players are able to control fake player in game
- `fakeplayer conn [str]`connect with fake player software, which `str` is the link of websocket, such as `ws://127.0.0.1:1234`
- `fakeplayer add [str]` adding fake player to spawn
- `fakeplayer remove [str]`removing fake player
- `fakeplayer list [str]` list all fake player
- `fakeplayer tp [str]` teleport fake player to where the player located

## Functions
The following is some of non-command function
### Cactus rotating function
Can be used after enabling `func rotate true`.
Right clicking the block can rotate specific blocks such as all slabs, stairs and redstone components

### Chunk visualizing

Need to enable `self chunk true` before using

Enabling it can display the chunk boarder which green grid represents slime chunks and white grid represents normal chunks(major purpose is to replace the chunk boarder pack outdated since `1.16.200`)

### Mob spawning function

Need to enable`func spawn true` before using
- right click on blocks with bones can show the process spawning spot choosing of the Y axis
- right click on blocks with gun powder can show the spawning rates of hostile mob
- right click on the feather can show passive mob spawning rates while at `light level 15`

### Measuring

Need to enable `self me true` before using

Right click a point with wooden sword, then right click another one with a wooden one, then it will output:
>Coordinates of  two points
> 
> Y-axis considered while calculating ; Euclidean Distance ; Manhattan distance
> 
> Y-axis not considered while calculating ; Euclidean Distance ; Manhattan distance



### Signal source finder

Need to enable `self rs true` before using

Right click the redsone component with wooden rod, replaying the strength of the redstone component (meaningless for repeater), which shows the coordinate of the signal source and its strength also showing white particles above the signal source.
