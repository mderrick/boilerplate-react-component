var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, '../demo/dist'), function(err) {
    console.error(err);
});