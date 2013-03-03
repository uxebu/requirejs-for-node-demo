// external modules
var requirejs = require('requirejs');
var join = require('path').join;

module.exports = function(nodeRequire) {
  requirejs.config({
    baseUrl: __dirname,
    nodeRequire: nodeRequire,
    paths: {
    }
  });
  return requirejs;
};
