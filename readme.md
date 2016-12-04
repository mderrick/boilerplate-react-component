[![Build Status](https://travis-ci.org/mderrick/boilerplate-react-component.svg?branch=master)](https://travis-ci.org/mderrick/boilerplate-react-component)

# boilerplate-react-component

You can view a demo [here](https://mderrick.github.io/boilerplate-react-component/).

## Quick Start

- `npm i`
- `npm run i:demo`
- `npm start`

## Publishing

In order to publish and deploy your new package via TravisCI, you need to go through the following steps.

1. Modify the `.travis.yml` with your own npm details. The simplest way to do this is by following [this guide](https://docs.travis-ci.com/user/deployment/npm/) or running `travis setup npm`.

2. To deploy the demo to a gh-pages branch you need to make a Github token with `repo` or `public_repo` access by going to your [Github settings](https://github.com/settings/tokens). This token should be accessed via `process.env.GITHUB_TOKEN`. Either add it via the Travis UI or run `travis encrypt -r GITHUB_TOKEN=[the token here]` to add it to your travis.yml. Be warned if you have collaborators, this gives access to all your repositories.

3. Run `npm version <newversion>` as per the [npm docs](https://docs.npmjs.com/cli/version). This will create a tagged commit that is pushed to the repository and will start the TraviCI test, deployment and publish.

## Browser support

Update the `browserslist` file in the root directory to change the browser support. This is primarily used for [CSS autoprefixing](https://github.com/postcss/autoprefixer).

## TODO
- Install demo dependencies as post install
- Better build logging
- Remove `dist` from importing css files.
- define plugin for `process.env` variables.
- Document
