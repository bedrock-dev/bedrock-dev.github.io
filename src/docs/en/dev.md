# Develop

## How to complie

### Peparation
Please install `Microsoft Visual Studio 2019` and `cmake`

### create a new dir
Run the following command in the source code root folder(use powershell):

```shell
mkdir build
```

### Configure Cmake
run `cd build` to enter the `build` dir then run:
```shell
cmake ..  -DCMAKE_BUILD_TYPE=Release
```
### Compilation
Run the follow command in the `build` folder
```shell
cmake --build   . --config Release
```
after compilation,  `trapdoor-mod.dll `will  be generated in  `Release` folder

::: warning
Only the `Release`  version can be used, not the  `Debug` 
:::

## Develop

:::warning
 **Reference only**
:::

### Structure of project soruce code

This is how the project looks:
```
├─api  //No actual function, mainly ports for BDS under the index
│  ├─block   //blocks related ports
│  ├─commands  //commands analyse
│  ├─entity   //entities ports
│  ├─exexpermental  
│  ├─graphics  //graphics ports
│  ├─include
│  ├─lib   //hook related
│  ├─math  
│  ├─tools  //tools-related
│  └─world //world-running ports
├─doc
├─img
├─include
├─mod   //the implement of functions
│  ├─config  //trapdoor-config related
│  ├─function 
│  ├─hopper
│  ├─player
│  ├─spawn
│  ├─tick
│  └─village
└─test
```
### Creating personal mod with trapdoor's api
1. Create a new class to `trapdoor::BDSMod`
```cpp
    class TrapdoorMod : public trapdoor::BDSMod {
}
```
2. Initialise the mod target from`dllmain.cpp`
```cpp
trapdoor::BDSMod *createBDSModInstance() {
    return new mod::TrapdoorMod();
}

void mod_init() {
    initConsole();
    // trapdoor::initLogger("trapdoor.log", false, true, true);
    trapdoor::initLogger("trapdoor.log", true, false, false);
    auto *mod = createBDSModInstance();
    trapdoor::initializeMod(mod);
    mod::TrapdoorMod::printCopyRightInfo();
}
```
3. Choose`ServerLevel::tick` in `GameTick.cpp`as the target of initializing
```cpp
THook(
        void,
        MSSYM_B1QA4tickB1AE11ServerLevelB2AAA7UEAAXXZ,
        trapdoor::Level * serverLevel
) {


    if (!trapdoor::bdsMod) {
        L_ERROR("mod is nullptr");
    }
    if (!trapdoor::bdsMod->getLevel()) {
        trapdoor::bdsMod->setLevel(serverLevel);
        trapdoor::bdsMod->asInstance<mod::TrapdoorMod>()->initialize();
    }
}
```
