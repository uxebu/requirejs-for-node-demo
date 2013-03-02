var requirejs = require('./requireSetup')(require);
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([
  './stats'
], function(stats) {

  return {
    stats: stats
  };

});
