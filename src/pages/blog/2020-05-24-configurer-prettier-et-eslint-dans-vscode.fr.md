---
templateKey: blog-post
langKey: fr
title: Configurer Prettier et ESLint dans VSCode
date: 2020-05-24T12:04:22.699Z
description: Guide rapide pour configurer les plugins Prettier et ESLint dans
  VSCode afin de formatter automatiquement votre code.
featuredpost: false
featuredimage: /img/vscode-logo.png
tags:
  - TIL
  - Dev
---
## Étape 1 - Installe Prettier

<div style="text-align:center">

![Prettier Logo](/img/prettier.png "Prettier Logo")

<https://prettier.io/>

</div>

### Installe le package npm Prettier

Tu peut installer le plugin au niveau global ou dans les dependences de development de ton projet.

```shell
npm install --global prettier
```

```shell
cd project/
npm install --dev prettier
```

### Installe le plugin VSCode Prettier

* Lance VSCode.  
* Tape la commande `Cmd+Shift+X` ou `Ctrl+Shift+X` pour ouvrir le panneau d'extension.
* Recherche "prettier" dans le "Marketplace" des extensions et click sur install.
* Relance VSCode.

- - -

## Étape 2 - Installe ESLint

### Installe le package npm ESLint

Pareil que pour prettier, tu peut installer le plugin au niveau global ou dans les dependences de development de ton projet.

```shell
npm install --global eslint
```

```shell
cd project/
npm install --dev eslint
```

### Installe le plugin ESLint Prettier

* Click sur les touches `Cmd+Shift+X` ou `Ctrl+Shift+X` pour ouvrir le panneau d'extension.
* Recherche "eslint" dans le "Marketplace" des extensions et click sur install.
* Relance VSCode.

- - -

## Utiliser Prettier et ESLint

<div style="text-align:center">

![Prettier Logo](/img/eslint.png "ESLint Logo")

<https://eslint.org/>

</div>

### Formatage automatique des documents

Pour formatter un document dans VSCode, tu peut utiliser la Palette de commande `Cmd+Shift+P` et executer la commande ***\>Format Document***.

Tu peux aussi utiliser le raccourcis clavier `Shift+Option+F`.

**Pour configurer le formatage automatique lors de la sauvegarde d'un document:**

* Appuis sur `Cmd+,` pour ouvrir le panneau des réglages VSCode
* Recherche ***onSave*** et met la valeur **Editor: Format on Save** : **true**

### Configurer un nouveau projet

```shell
npm i --dev eslint-config-prettier eslint-plugin-prettier
```

Initialisation de .eslintrc.js

```shell
eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? Browser, Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript
```

Puis on ajoute le plugin prettier dans .eslintrc.js:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```