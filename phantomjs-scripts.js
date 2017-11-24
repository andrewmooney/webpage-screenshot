var page = require('webpage').create();
var args = require('system').args;

page.open(args[1], function () {
    page.paperSize = {
        format: 'A4',
        orientation: 'portrait',
        margin: '1cm'
    }
    page.render(args[2]);
    phantom.exit();
});