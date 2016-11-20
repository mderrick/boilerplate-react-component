var generateConfig = require('./generateConfig');

module.exports = generateConfig({
    hot: false,
    optimize: true,
    extractCss: true
});
