[![Build Status](https://travis-ci.org/mderrick/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/mderrick/react-component-boilerplate)

# component-boilerplate

You can view a demo [here](https://mderrick.github.io/boilerplate-react-component/);

## Quick Start

- `npm i`
- `npm run i:demo`
- `npm start`

## Publishing

Run `npm version <newversion>` as per the [npm docs](https://docs.npmjs.com/cli/version). This will create a tagged commit that is pushed to the repository.

If you intend to deploy your package on npm via Travis you can modify the `.travis.yml` with your own details. The simplest way to do this is by following [this guide](https://docs.travis-ci.com/user/deployment/npm/) or running `travis setup npm`. TravisCI will pick up the tag, run tests, publish the package and deploy the demo to gh-pages branch.

## TODO
- Install demo dependencies as post install
- Better build logging
- Remove `dist` from importing css files.
- define plugin for `process.env` variables.
- Document
