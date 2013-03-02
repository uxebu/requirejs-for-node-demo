var requirejs = require('requirejs');
var join = require('path').join;

requirejs.config({
  baseUrl: join(__dirname, '..', 'src'),
  nodeRequire: require,
  paths: {
    abcdec: join(__dirname, '..', 'node_modules', 'abcdec', 'src'),
    swfparser: join(__dirname, '..', 'node_modules', 'swfparser', 'src'),
    lodash: join(__dirname, '..', 'node_modules', 'lodash')
  }
});
