[![Build Status](https://travis-ci.org/mderrick/react-component-boilerplate.svg?branch=master)](https://travis-ci.org/mderrick/react-component-boilerplate)

# component-boilerplate

You can view a demo [here](https://mderrick.github.io/boilerplate-react-component/);

## Quick Start

- `npm i`
- `npm run i:demo`
- `npm start`

## Publishing

In order to publish and deploy your new package via TravisCI, you need to go through the following three steps.

1. Modify the `.travis.yml` with your own npm details. The simplest way to do this is by following [this guide](https://docs.travis-ci.com/user/deployment/npm/) or running `travis setup npm`.

2. To deploy the demo to a gh-pages branch you need to make a Github token with `repo` access on `process.env.GITHUB_TOKEN` or run `travis encrypt -r GITHUB_TOKEN=[the token here]` to add it to your travis.yml. Be warned if you have collaborators, this gives access to all repositories. Note: A project specific SSH key would prove safer. Look into adding this.

Finally once the above has been set up, you can run `npm version <newversion>` as per the [npm docs](https://docs.npmjs.com/cli/version). This will create a tagged commit that is pushed to the repository and will start the TraviCI process deployment process.

## TODO
- Install demo dependencies as post install
- Better build logging
- Remove `dist` from importing css files.
- define plugin for `process.env` variables.
- Document
