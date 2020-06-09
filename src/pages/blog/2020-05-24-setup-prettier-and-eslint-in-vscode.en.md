---
templateKey: blog-post
title: Setup Prettier and ESLint in VSCode
langKey: "en"
date: 2020-05-24T12:04:22.699Z
description: Quick tutorial on how to configure the Prettier and ESLint plugin
  to have clean and formatted project automatically.
featuredpost: false
featuredimage: /img/vscode-logo.png
tags:
  - TIL
  - Dev
---

## Step 1 - Install Prettier

### Install the Prettier npm package

You can install it globally in your dev environnement or in the dev dependencies of the project.

```sh
npm install --global prettier
```

```sh
cd project/
npm install --dev prettier
```

### Install the Prettier VSCode plugin

- Press `Cmd+Shift+X` or `Ctrl+Shift+X` to open the extensions panel.
- Search for "prettier" in the Extensions Marketplace and click install.
- Reload VSCode.

---

## Step 2 - Install ESLint

### Install the ESLint npm package

Same as prettier, you can install it globally in your dev environnement or in the dev dependencies of the project.

```sh
npm install --global eslint
```

```sh
cd project/
npm install --dev eslint
```

### Install the ESLint VSCode plugin

- Press `Cmd+Shift+X` or `Ctrl+Shift+X` to open the extensions panel.
- Search for "eslint" in the Extensions Marketplace and click install.
- Reload VSCode.

---

## Using Prettier and ESLint

### Autoformat documents

To format a document you can use the Command Palette `Cmd+Shift+P` and select the command **_>Format Document_**.

You can also use the shortcut `Shift+Option+F`.

**To configure the autoformat on save:**

- Press `Cmd+,` to open the Setting Panel

- Search **_onSave_** and set **Editor: Format on Save** to **true**

### Configure a new project

```sh
npm i --dev eslint-config-prettier eslint-plugin-prettier
```

Init the .eslintrc.js

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

Then in .eslintrc.js:

```json
{
  "extends": ["plugin:prettier/recommended"]
}
```
