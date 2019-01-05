# NPM Project 🔥
> Pre-configured boilerplate for starting an npm module

##### Start developing your module in seconds!

[![Build Status][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]
[![Dependencies][dependencies]][david-dm]
[![Dev Dependencies][dev-dependencies]][david-dm-dev]
[![License: MIT][license-image]][license-link]

This repo consists of all the necessary boilerplate for successfully starting an npm project.

<img src="https://i.imgur.com/iwUA19u.png" width="200px" align="right" hspace="30px" vspace="100px">

## Features

1. Provides `.editorconfig` file for uniform editor configuration
2. Provides linting scripts with ESLint along with `.eslintrc` and `.eslintignore` file
3. Provides `.gitignore` and `.npmignore` for ignoring respective files while pushing or publishing
4. Defines Travis CI config in `.travis.yml` file
5. Provides Coveralls coverage reporting script
6. Provides testing setup with `mocha` and local html coverating reporting with `nyc`
7. Provides Code Minification

## Getting Started

### Installation
You can start creating cloning this repo.
```bash
git clone https://github.com/hacktivistic/npm-project
```
### Preparing
When cloning a repo, the directory where the project is cloned is git pre-configed with this git repo. So, you need to remove git files.
For this just remove `.git` folder.
### Customizing
The `package.json` file is comes with details of this repo. To modify run,
```bash
npm init
```
This command prompts for project details. Details which you don't need to change can be left blank.

## Available Scripts

1. `npm start` - Executes your index.js file with node
2. `npm test` - Runs tests in test directory without linting or coverage results.
3. `npm run test:cover` - Runs tests and produces local html based coverage report in './coverage' directory
4. `npm run coverage` - Gets Lcov coverage report for your code and pushes it to coveralls.io
5. `npm run lint` - Runs ESLint for linting code
6. `npm run build` - Runs babel-cli to remove comments and minify the code

## Module Development Practices
Common practices shall be followed while developing a module because it is always a joy to work with good code-base.
## Tests & Linting

1. Lint your code for uniformity. Run `npm run lint` command to check if there are any linting errors.
2. Make sure you write tests for all the changes/bug fixes.
3. Make sure all the tests are passing on `travis`.
4. Make sure to have full coverage on your tests.

### General Practices

ES6 shall be prefered for development, since it comes with latest javascript features. Also, be sure to comment your codes properly so that your fellow can understand you easily.

If commenting is not done properly, following may happen
>While Coding: Only You and God knows what it does

>After some time: Only God knows what it does

To prevent this, let's all commit to commenting. 😉

## Author

Robin Panta (Hacktivistic) 😎  &nbsp; [GitHub](https://github.com/hacktivistic) | [Blog](https://robinpanta.com)
> I prefer `yarn` over `npm`

[travis-image]: https://travis-ci.org/hacktivistic/npm-project.svg?branch=master
[travis-url]: https://travis-ci.org/hacktivistic/npm-project
[coveralls-image]: https://coveralls.io/repos/github/hacktivistic/npm-project/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/hacktivistic/npm-project?branch=master
[dependencies]: https://david-dm.org/hacktivistic/npm-project/status.svg
[dev-dependencies]: https://david-dm.org/hacktivistic/npm-project/dev-status.svg
[david-dm]: https://david-dm.org/hacktivistic/npm-project
[david-dm-dev]: https://david-dm.org/hacktivistic/npm-project?type=dev
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-link]: https://opensource.org/licenses/MIT
