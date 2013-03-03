//if (!requirejs) { var requirejs = require('./requireSetup')(require); }

define([
  './stats'
], function(stats) {

  return {
    stats: stats
  };

});
