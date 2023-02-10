# Customizing

This plugin provides highly customizable config for different needs, the default config will be generated as belows:

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

`commands` enables every kinds of command and their permission level:

- enabled when `enable` is "1", not registered when "0"
- `permission-level` repersents the permission level, all players can use when `0`, while only operators can use when `1`

### basic-config

`basic-config` has the basic setting of the plugin, which part of them can be altered by `trapdoor` command

- `particle-performance-level` alters the render quality of particles, filling in `0,1,2` can change its quality which higher value represents better quality
- `particle-view-distance` repersents render distance of particles, not rendered if player exceed such distance
- `hud-refresh-freq` repersents the referesh frequency of `HUD` command, 20gt for default

### default-enable-functions
`default-enable-functions` enables functions in `func` when server starts

### default-enable-tweaks

`default-enable-tweak` enables functions in `tweak` when server starts



### Advanced functions-Shortcuts

shortcut allows the activation of commands after players has done certain action, three variation supported currently:

1. `use` when player use certain kind of item
2. `useon` when player right-click certain kind of block with certain item
3. `command` when player run customized command

You can add unlimited amount of activator in `shortcuts` key to have a variety of functions

#### use activator

This example repersents the use of `cactus` by a player while using `count print` command

```json
 {
      "type": "use", //activator type
      "item": "cactus", //item used, supports input with xx:1 format
      "prevent": false, //whether it stops the original respond
      "actions": [ //the commands to be run
        "counter print"
      ]
    }
```

Build-in variables for command available as follows:

- `iname` item name
- `iaux` item ID
- `px` x-coordinate of player
- `py` y-coordinate of player
- `pz` z-coordinate of player

#### use-on triggers when players right-click certain block type with certain kind of item

Below show the function of the triggering `count print {baux}` command when a player uses `cactus` to right-click concrete 

```json
 "shortcuts": [
    {
      "type": "use-on", //activator type
      "item": "cactus", //item used, supports name:aux format
      "block": "concrete", //right-clicked block name, supports name:aux format
      "prevent": false, //whether it stops the original respond
      "actions": [ //the commands to be run
        "counter print {baux}"
      ]
    },
```

Build-in variable as follows

- `iname` item name
- `iaux` item ID
- `bname` block name right-clicked
- `baux` block ID right-clicked
- `bx` block x-coordinate
- `by` block y-coordinate
- `bz` block z-coordinate
- `px` player x-coordinate
- `py` player y-coordinate
- `pz` player z-coordinate

#### Customized short command

Below shows when `c` command is run, the plugin will run the`/gamemode creative` command as a player

```json
{
  "type": "command", //activator type
  "command": "c", //name of command shortcut
  "actions": [ //the commands to be run
    "gamemode creative"
  ]
}
```

Build-in variable as follows

- `px` player x-coordinate
- `py` player y-coordinate
- `pz` player z-coordinate
