---
templateKey: blog-post
title: Configurer Prettier et ESLint dans VSCode
langKey: "fr"
date: 2020-05-24T12:04:22.699Z
description: Guide rapide pour configurer les plugins Prettier et ESLint dans VSCode.
featuredpost: false
featuredimage: /img/vscode-logo.png
tags:
  - TIL
  - Dev
---

## Étape 1 - Instale Prettier

### Instale le package npm Prettier

Tu peut installer le plugin au niveau global ou dans les dependences de development de ton projet.

```sh
npm install --global prettier
```

```sh
cd project/
npm install --dev prettier
```

### Instale le plugin VSCode Prettier

- Click sur les touches `Cmd+Shift+X` ou `Ctrl+Shift+X` pour ouvrire le panneau d'extension.
- Recherche "prettier" dans le "Marketplace" des extensions et click sur install.
- Relance VSCode.

---

## Étape 2 - Instale ESLint

### Instale le package npm ESLint

Pareil que pour prettier, tu peut installer le plugin au niveau global ou dans les dependences de development de ton projet.

```sh
npm install --global eslint
```

```sh
cd project/
npm install --dev eslint
```

### Instale le plugin ESLint Prettier

- Click sur les touches `Cmd+Shift+X` ou `Ctrl+Shift+X` pour ouvrire le panneau d'extension.
- Recherche "eslint" dans le "Marketplace" des extensions et click sur install.
- Relance VSCode.

---

## Utiliser Prettier et ESLint

### Formattage automatique des documents

Pour formatter un document dans VSCode, tu peut utiliser la Palette de commande `Cmd+Shift+P` et executer la commande **_>Format Document_**.

Tu peux aussi utiliser le raccourcis clavier `Shift+Option+F`.

**Pour configurer le formattage automatique lors de la sauvegarde d'un document:**

- Appuis sur `Cmd+,` pour ouvrire le panneau des reglages VSCode

- Recherche **_onSave_** et met la valeur **Editor: Format on Save** : **true**

### Configurer un nouveau projet

```sh
npm i --dev eslint-config-prettier eslint-plugin-prettier
```

Initialisation de .eslintrc.js

```sh
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

Puis on ajoute dans .eslintrc.js:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```
