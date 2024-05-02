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

# create app
npm create vite@latest table-front -- --template react-ts
# change folder and access the vscode
cd table-front
code .

# commit types <type_of_commit>


# initialize git repository, create git folder
git init
# add all files on the staging area
git add .
# shows tracked files on the staging
git status
# packs tracked files on the staging
git commit -m "[ID]<type_of_commit>:<message>"
# shows commit history
git log
# define main branch
git branch -M main
# add remote repository, don't forget "Git Credential Manager Core"
git remote add origin https://*.git
# sends changes to the repository
git push -u origin <branch_name>
# update branch
git pull
# create new branch
git checkout -b <branch_name>