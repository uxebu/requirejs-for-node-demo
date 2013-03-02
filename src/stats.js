if (typeof define !== 'function') { var define = require('amdefine')(module) }
define([
  './tag'
], function(tag) {

  var stats = {
    getStatsForSwfFile: function() {
      return !!tag.getCount; // lets access tag, to simulate use
    }
  };

  return stats;

});
