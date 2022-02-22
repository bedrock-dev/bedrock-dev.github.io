# 开发

## 编译

### 准备

首先你需要下载`Microsoft Visual Studio 2019`,然后你需要下载安装`cmake`
### 创建新目录
在项目主目录下运行:
```shell
md build
```
(c)
### 配置Cmake
进入`build`目录后执行
```shell
cmake ..  -DCMAKE_BUILD_TYPE=Release
```
### 编译
在`build`目录内执行
```shell
cmake --build   . --config Release
```
等待项目编译，等编译完后在`Release`目录即可生成`trapdoor-mod.dll`

> 注意，只能用`Release`版本，`Debug`版会用不了

## 开发

> 不建议在本插件的基础上进行二次开发，因为作者不保证接口的可靠性和长期维护.

### 项目目录结构

项目的目录结构是这样的:
```
├─api  //这里都是BDS的接口或者方便进行开发的库，不含具体功能,命名空间都是trapdoor::
│  ├─block   //方块相关接口
│  ├─commands  //简单的命令解析器
│  ├─entity   //实体相关接口
│  ├─exexpermental  
│  ├─graphics  //图形想换接口
│  ├─include
│  ├─lib   //hook相关
│  ├─math  
│  ├─tools  //工具类
│  └─world //世界运行相关接口
├─doc
├─img
├─include
├─mod   //这里面是具体的功能实现，命名空间都是mod::，每个目录下面都是一些功能
│  ├─config  //配置文件
│  ├─function 
│  ├─hopper
│  ├─player
│  ├─spawn
│  ├─tick
│  └─village
└─test
```
### 利用trapdoor的api创建自己的mod
1. 写一个派生至 `trapdoor::BDSMod`类(以TrapdoorMod为例):
```cpp
    class TrapdoorMod : public trapdoor::BDSMod {
}
```
然后根据需要重写一些方法
2. 在`dllmain.cpp`中初始化全局mod对象:
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
3. 在`GameTick.cpp`中的`ServerLevel::tick`中初始化mod对象:
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
以后有空会提供一个mod的模板工程，然后出一些更为详细的教程