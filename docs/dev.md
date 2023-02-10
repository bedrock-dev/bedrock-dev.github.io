# 开发和部署
## 准备

首先你需要下载`Microsoft Visual Studio 2019`或更新的版本，然后你需要下载安装`cmake`

## 创建新目录

在项目主目录下运行:
```shell
md build
```
## 配置Cmake
进入`build`目录后执行
```shell
cmake ..  -DCMAKE_BUILD_TYPE=Release
```
## 使用cmake进行编译

在`build`目录内执行
```shell
cmake --build   . --config Release
```
等待项目编译，等编译完后在`Release`目录即可生成`trapdoor-{mod vesrion}-{game version}.dll`文件

> 注意，只能用`Release`版本，`Debug`版会用不了