// external modules
var requirejs = require('requirejs');
var join = require('path').join;

module.exports = function(nodeRequire) {
  requirejs.config({
    baseUrl: __dirname,
    nodeRequire: nodeRequire,
    paths: {
      module1: join(__dirname, '..', 'external_modules', 'swfParser', 'src')
    }
  });
  return requirejs;
};
