/* eslint-disable no-console */

const ghpages = require('gh-pages');
const path = require('path');
const chalk = require('chalk');
const pkg = require('./../package.json');
const fs = require('fs');
const distPath = path.join(__dirname, '../demo/dist');

try {
    if (process.env.GITHUB_TOKEN) {
        const author = pkg && pkg.author || {};
        fs.accessSync(distPath, fs.F_OK);
        if (!author.name || !author.email) {
            console.log(chalk.red('Fields "author.name" and "author.email" are required in your package.json.'));
        } else {
            ghpages.publish(distPath, {
                repo: `https://${process.env.GITHUB_TOKEN}@$github.com/mderrick/webpack-react-boilerplate.git`,
                user: author.name,
                email: author.email
            }, (err) => {
                if (err) {
                    console.log(chalk.red(err));
                    return;
                }
                console.log(chalk.green('Demo has succesfully deployed.'));
            });
        }
    } else {
        console.log(chalk.red('process.env.GITHUB_TOKEN with "repo" access is required to deploy gh-pages.'));
    }
} catch (e) {
    console.log(chalk.red('Please run "npm i && npm run i:demo && npm run build:demo" and try again.'));
}
