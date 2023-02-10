# 开发和部署

## 如何编译
1. 下载`Microsoft Visual Studio 2019`或更新的版本，然后你需要下载并安装`cmake`

2. 创建并进入`build`目录,在项目根目录下运行:

   ```powershell
   mkdir build && cd build
   ```

3. 构建Cmake项目,在build下运行如下命令:

   ```powershell
   cmake ..  -DCMAKE_BUILD_TYPE=Release -DDEV=OFF
   ```

4. 编译项目

   ```
   cmake --build   . --config Release
   ```

等待项目编译，等编译完后在`Release`目录即可生成`trapdoor-{mod vesrion}-{game version}.dll`文件

### PR

待定

