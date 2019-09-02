#### Project installation and server

yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

#### Production build (compile AoT)

```
yarn build:production
# OR
npm run build:production
```

## Snippets

Here are some [VSCode](https://code.visualstudio.com) snippets I'm using whilst recording this application, these help speed up boilerplate creation for things such as components, modules and services.

> Here's how to [install the snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets) in VSCode. Add them to `typescript.json` when prompted for which language the snippets are for.

```json
{
  "@Component": {
    "prefix": "@Component",
    "description": "Creates a component definition",
    "body": [
      "import { Component } from '@angular/core';",
      "",
      "@Component({",
      "\tselector: '${1:selector-name}',",
      "\tstyleUrls: ['${1:selector-name}.component.scss'],",
      "\ttemplate: `",
      "\t\t<div>",
      "\t\t\t",
      "\t\t</div>",
      "\t`",
      "})",
      "export class ${3:Name}Component {",
      "\tconstructor() {}",
      "}"
    ]
  },
  "@Injectable": {
    "prefix": "@Injectable",
    "description": "Creates an @Injectable service",
    "body": [
      "import { Injectable } from '@angular/core';",
      "",
      "@Injectable()",
      "export class ${1:Name}Service {",
      "\tconstructor() {}",
      "}"
    ]
  },
  "@NgModule": {
    "prefix": "@NgModule",
    "description": "Creates an @NgModule",
    "body": [
      "import { NgModule } from '@angular/core';",
      "",
      "@NgModule({",
      "\timports: [],",
      "\tdeclarations: [],",
      "\tproviders: []",
      "})",
      "export class ${1:Name}Module {}"
    ]
  },
  "@Pipe": {
    "prefix": "@Pipe",
    "description": "Creates an @Pipe",
    "body": [
      "import { Pipe, PipeTransform } from '@angular/core';",
      "",
      "@Pipe({",
      "\tname: '${1:selector-name}'",
      "})",
      "export class ${2:Name}Pipe implements PipeTransform {",
      "\ttransform(value: any) {",
      "\t\t$0",
      "\t}",
      "}"
    ]
  }
}
```

## Firebase Config

#### database.rules.json

```
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "schedule": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        ".indexOn": [
          "timestamp"
        ]
      }
    },
    "meals": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "workouts": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

#### firebase.json

```
{
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "",
    "ignore": [
      "firebase.json",
      ".firebaserc",
      ".vscode",
      ".git",
      ".gitignore",
      ".editorconfig",
      "src/**/.*",
      "database.rules.json",
      "package.json",
      "README.md",
      "tsconfig.json",
      "webpack.config.js",
      "yarn.lock",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Resources

There are several resources used inside this project, of which you can read further about to dive deeper or understand in more detail what they are:

* [Angular](https://angular.io)
* [Firebase Docs](https://firebase.google.com/docs/)
* [Firebase CLI](https://firebase.google.com/docs/cli/)
* [AngularFire2 Repo/Docs](https://github.com/angular/angularfire2)
* [npm](https://www.npmjs.com/)
* [Webpack](https://webpack.js.org/)
