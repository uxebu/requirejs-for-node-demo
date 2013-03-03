if (!requirejs) { var requirejs = require('./requireSetup')(require); }

define([
  './swfParser'
], function(swfParser) {

  return {
    swfParser: swfParser
  };

});
