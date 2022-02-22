Remove-Item -Path ./assets -Force -Recurse
Remove-Item -Path *.html -Force -Recurse
Remove-Item -Path ./en -Force -Recurse
Remove-Item -Path ./imgs -Force -Recurse
#cp -r  .
Copy-Item -Path "./src/docs/.vuepress/dist/*" -Destination "." -Recurse
