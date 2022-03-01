如何PR
1. Fork本项目然后下载到本地

2. 安装Node，然后再src目录下执行如下命令以安装相关依赖:
npm install
3. 在debug模式下运行本项目:
npm run docs:dev
浏览器打开http://localhost:8080/tr-wiki/就能看到相关页面

4. 接下来要做的就是编写和修改内容，直接改src/docs/(en)/*.md的文件即可，保存后浏览器会自动更新

5. 改好后运行如下命令以生成html文件
npm run docs:build

6. 运行.\deploy.ps1以把相关文件拷贝到根目录

7. 提交，上传更新并PR


How to PR

1. Fork this project and downbload

2. Execute this command in src to install node modules,
npm install

3. Run project in dev mode by executing this command in src:
npm run docs:dev
and open your browser to http://localhost:8080/tr-wiki/

4. Edit file sin src/docs/(en)/*.md, the website will update automatically


5. Biuld the project after finishing edit by execute this command in src:
npm run docs:build

6. Run .\deploy.ps1 to copy files to root dir

7. Commit, Pull and PR in github



