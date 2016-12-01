/* eslint-disable no-console */

const ghpages = require('gh-pages');
const path = require('path');
const chalk = require('chalk');

ghpages.publish(path.join(__dirname, '../demo/dist'), (err) => {
    if (err) {
        console.log(chalk.red(err));
        console.log(chalk.red('It is possible you have not built the demo. Please run "npm i && npm run i:demo && npm run build:demo" and try again.'));
        return;
    }
    console.log(chalk.green('Demo has succesfully deployed.'));
});
