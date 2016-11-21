[![Build Status](https://travis-ci.org/mderrick/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/mderrick/react-component-boilerplate)

# component-boilerplate

## Quick Start

`npm i && cd demo && npm i && cd ../ && npm start`

## TODO
- Install demo dependencies as post install
- Better build logging and guidances
	- Auto open browser
	- Port in use error
	- etc
- Eslint rules.
- Travis.yml.
- Remove `dist` from importing css files.
- define plugin for `process.env` variables.
- Document

## Travis deployments

If you intend to deploy your package on npm via Travis you can modify the `.travis.yml` with your own details. The simplest way to do this is by following [this guide](https://docs.travis-ci.com/user/deployment/npm/) or running `travis setup npm`.
