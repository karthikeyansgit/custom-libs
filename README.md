# Create Custom Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Install Dependencies

npm install

## Build Library

ng build alerts-lib

## Create a Pack file

- cd dist/alerts-lib
- npm pack



# Creating Libraries

## Getting started - Steps to Creating Libraries

- ng new my-workspace --create-application=false
- cd my-workspace
- ng generate library my-lib

Reference URL: https://angular.io/guide/creating-libraries

## Build Library

ng build my-lib

## Create a Pack file

- cd dist/my-lib
- npm pack

## Publishing your library

- ng build my-lib --prod
- cd dist/my-lib
- npm publish