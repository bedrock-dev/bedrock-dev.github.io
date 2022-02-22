How to PR

1. Fork this project and downbload

2. Install node modules, execute this command in src
npm install

3. Run project in dev mode by execute this command in src:
npm run docs:dev
and open your browser to http://localhost:8080/tr-wiki/

4. Edit file sin src/docs/(en)/*.md, the website will update automatically


5. Biuld the project after finished edit by execute this command in src:
npm run docs:build

6. Run .\deploy.ps1 to copy files to root dir

7. Commit and pr in github
