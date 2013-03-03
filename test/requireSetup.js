var requirejs = require('requirejs');
var join = require('path').join;

requirejs.config({
  baseUrl: join(__dirname, '..', 'src'),
  nodeRequire: require,
  paths: {
    swfParser: join(__dirname, '..', 'external_modules', 'swfParser', 'src')
  }
});
