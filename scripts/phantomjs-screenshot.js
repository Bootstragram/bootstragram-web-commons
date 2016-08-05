var system = require('system');
var args = system.args;
var url = '';

if (args.length === 2) {
  url = args[1];

  var page = require('webpage').create();
  page.open(url, function() {
     page.render('screenshot.png');
     phantom.exit();
  });
} else {
  console.log('Try to pass some arguments when invoking this script!');
  args.forEach(function(arg, i) {
    console.log(i + ': ' + arg);
  });
  phantom.exit();
}
