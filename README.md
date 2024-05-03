# _Board Game_

![github](https://img.shields.io/github/stars/CodeEnemies/board-game-front "Github")
![typescript](https://img.shields.io/badge/typescript-5.4.5-0076c6 "Typescript")
![node](https://img.shields.io/badge/node-20.12.2-75AC64 "Node")
![vscode](https://img.shields.io/badge/vscode-1.89-1E97E8 "Visual Studio Code")

# Necessary Tech stack:

|Name                 | Source | File name version		      |Link for download
|:-------------------:|-------:|---------------------------:|:-----------------
|`typescript`         |language|                            |https://www.typescriptlang.org/
|`node`			          | engine |node-v20.12.2-x64.msi			  |https://nodejs.org/en/download
|`visual studio code` |  IDE   |VSCodeUserSetup-x64-1.89.0	|https://code.visualstudio.com/docs

# Description
Generic Board Game.

### Roadmap
#### in development
- [ ] campaign
- [ ] ludo
- [ ] dungeon crawler
#### in concept
- [ ] puzzle
- [ ] card game
- [ ] fighting
- [ ] rpg
- [ ] roguelike
- [ ] mmorpg
- [ ] fps
- [ ] moba
- [ ] battle royale
- [ ] strategy
- [ ] simulation

## Summary
* [How to work with this project](#how-to-work-with-this-project)
  - [create this project](#create-this-project)
  - [change folder and access by vscode](#change-folder-and-access-by-vscode)
  - [clone the project and build locally](#clone-the-project-and-build-locally)
  - [install dependencies for this project](#install-dependencies-for-this-project)
  - [run project](#run-project)
  - [build project](#build-project)
* [deploy on Tomcat Server](#deploy-on-tomcat-server)
* [Features](#features)
* [HTTP Status code list](#http-status-code-list)
* [Developers](#developers)
* [Licence](#licence)

## How to work with this project
type in terminal

### create this project
```
npm create vite@latest table-front -- --template react-ts
```
### change folder and access by vscode
```
cd table-front
code .
```
### clone the project and build locally
```
git clone https://github.com/CodeEnemies/board-game-front
```
### install dependencies for this project
```
npm i
```
### run project
```
npm run dev
```
### build project
```
npm run build
```

# Reference API download link

> [https://github.com/CodeEnemies/board-game-back](https://github.com/CodeEnemies/board-game-back)

# Reference API, running locally

> [http://localhost:8080/board-game](http://localhost:8080/board-game)

## Commit types
* feature: Um novo recurso para a aplicação, e não precisa ser algo grande, mas apenas algo que não existia antes e que a pessoa final irá acessar.
* fix: Correções de bugs
* docs: Alterações em arquivos relacionados à documentações
* style: Alterações de estilização, formatação etc
* refactor: Um codigo de refatoração, ou seja, que foi alterado, que tem uma mudança transparente para o usuário final, porém uma mudança real para a aplicação
* perf: Alterações relacionadas à performance
* test: Criação ou modificação de testes
* chore: Alterações em arquivos de configuração, build, distribuição, CI, ou qualquer outra coisa que não envolva diretamente o código da aplicação para o usuário final

## Git
### initialize git repository, create git folder
```
git init
```
### add all files on the staging area
```
git add .
```
### shows tracked files on the staging
```
git status
```
### packs tracked files on the staging
```
git commit -m "[ID]<type_of_commit>:<message>"
```
### shows commit history
```
git log
```
### define main branch
```
git branch -M main
```
### add remote repository, don't forget "Git Credential Manager Core"
```
git remote add origin https://*.git
```
### sends changes to the repository
```
git push -u origin <branch_name>
```
### update branch
```
git pull
```
### create new branch
```
git checkout -b <branch_name>
```
### delete a local branch
```
git branch -d <branch_name>
```
### delete a remote branch
```
git push --delete origin <branch_name>
```
### show all branch
```
git branch
```
### upload uma branch
```
git push -u <branch_name>
```
### update branch
```
git rebase main
```
### 
```
git push -f
```

# Deploy
## Deploy in nginx
```
npx browserslist@latest --update-db
set -e
npm run build
npm run preview
service nginx stop
rm -rf /usr/share/nginx/html/<old-name>
cp /home/<user>/<application-name>.zip /usr/share/nginx/html/
unzip /usr/share/nginx/html/<application-name>.zip
chown nginx:nginx /usr/share/nginx/html/<application-name>
rm /usr/share/nginx/html/<application-name>.zip
service nginx start
```

### Edit /etc/nginx/conf.d/default.conf

Add the new code
```
location /<folder> {
    root    /usr/share/nginx/html;
    index   index.html  index.htm;
}
```

# SVG Icons

> [SVG Icons](https://www.svgrepo.com/)

## HTTP Status code list
> [HHTP Status Code](https://httpstatuses.com/)

## Developers
> [Gadelha TI](https://github.com/gadelhati)
> [Lucas](https://github.com/lucassmartins)
> [Augusto](https://github.com/augustmat)
> [Diego](https://github.com/diegoferreirapinto)

## Licence
> [MIT License](https://choosealicense.com/licenses/mit/)
```
MIT License

Copyright (c) 2020 Jason Watmore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.