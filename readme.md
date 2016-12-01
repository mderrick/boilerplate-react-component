[![Build Status](https://travis-ci.org/mderrick/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/mderrick/react-component-boilerplate)

# component-boilerplate

You can view a demo [here](https://mderrick.github.io/react-component-boilerplate/);

## Quick Start

- `npm i`
- `npm run i:demo`
- `npm start`

## TODO
- Install demo dependencies as post install (https://stackoverflow.com/questions/40898219/how-to-install-nested-npm-packages-with-postinstall-or-single-npm-command)
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
