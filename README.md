# Taitamariki Potentia Events Website & Playbook

Project initiated by WDCC in 2023.

_# TODO: Add description of project._

## Team Leadership and Members

- Naren Rohan (Project Manager)
- Dana Seong (Tech Lead)
- Raymond Feng (Tech Advisor / Tech Lead)

- ... Add all other members here via commit

## Technologies

### Main frameworks

- [Next (v13)](https://nextjs.org/): A React framework for developing full-stack SSR enabled applications
- [TypeScript](https://www.typescriptlang.org/): A strongly typed language based on the JavaScript language
- [React](https://react.dev/): A framework for building web user interfaces

### Other tools / dependencies

- [ESLint](https://eslint.org/): A 'linter' that identifies and fixes code style problems
- [Linaria](https://linaria.dev/): A CSS-in-JS tool that allows you to write CSS in JS files.
- [Normalize.css](https://www.npmjs.com/package/normalize.css): Resets default HTML styles to a normalized style
- [Prettier](https://prettier.io/): An opinionated code formatter that keeps code the same
- [Husky](https://typicode.github.io/husky): A tool that allows you to hook into git actions (e.g. run linting/tests
  before a commit)

## Prerequisites

Install yarn (follow the instructions here: https://yarnpkg.com/getting-started/install). Yarn is a package manager
for JS/TS based web applications.

We are using version 3 of `yarn`, which does not have a `node_modules` folder (instead, `.yarn` is uploaded with the
repository and supports 'Zero-Install'. To check the version, run the command `yarn --version`. If this is not 3+, set
the version through `yarn set version latest`.

## How to start

1. Run the command `yarn` to install dependencies if not already there.
2. Set up any environment variables in a .env file (currently none).
3. Run the command `yarn dev` to start the development server locally.

### Other useful commands

`yarn prettify` - Runs prettier code formatting on the src directory.

`yarn lint` - Tests that the code style of the project is valid.

## How to deploy

_# TODO: TBC_
