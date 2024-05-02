# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Summary
* [How to work with this project](#how-to-work-with-this-project)
  - [how to create this project](#how-to-create-this-project)
  - [how change folder and access by vscode](#how-change-folder-and-access-by-vscode)
  - [how to clone the project and build locally](#how-to-clone-the-project-and-build-locally)
  - [how to install dependencies for this project](#how-to-install-dependencies-for-this-project)
  - [how to run project](#how-to-run-project)
  - [how to stop application on localhost](#how-to-stop-application-on-localhost)
  - [how to create file war](#how-to-create-file-war)
  - [how to select page on get request](#how-to-select-page-on-get-request)
* [How to deploy on Tomcat Server](#how-to-deploy-on-tomcat-server)
* [Features](#features)
* [HTTP Status code list](#http-status-code-list)
* [Developers](#developers)
* [Licence](#licence)

## How to work with this project
Type in intellij terminal tab

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
git clone https://github.com/CodeEnemies/table-front
```

# commit types <type_of_commit>
* feature: Um novo recurso para a aplicação, e não precisa ser algo grande, mas apenas algo que não existia antes e que a pessoa final irá acessar.
* fix: Correções de bugs
* docs: Alterações em arquivos relacionados à documentações
* style: Alterações de estilização, formatação etc
* refactor: Um codigo de refatoração, ou seja, que foi alterado, que tem uma mudança transparente para o usuário final, porém uma mudança real para a aplicação
* perf: Alterações relacionadas à performance
* test: Criação ou modificação de testes
* chore: Alterações em arquivos de configuração, build, distribuição, CI, ou qualquer outra coisa que não envolva diretamente o código da aplicação para o usuário final

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

ref: https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657

add color, template: `#RRGGBB`, ex.:	`#0969DA`

references:
- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

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
