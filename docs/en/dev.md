# Development
## Get ready

Download `Microsoft Visual Studio 2019` or newer version, then install `cmake`

## Build new index

Run under the main index:
```shell
md build
```
## Set up Cmake
Enter `build` index and run:
```shell
cmake ..  -DCMAKE_BUILD_TYPE=Release
```
## Use cmake to compile

Run under the `build` index
```shell
cmake --build   . --config Release
```
Wait until the complete of complilation and `trapdoor-{mod vesrion}-{game version}.dll` will be automatically generated under the `Release` index

> Attention, only available for `Release` versions but not `Debug`versions.