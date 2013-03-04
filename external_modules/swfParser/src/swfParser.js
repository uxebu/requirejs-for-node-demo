define([
  '../lib/png'
], function(png) {

  var swfParser = {
    parse: function() {},
    canSeeLibPngFile: function() {
      console.log(png);
      return png.iAm == 'png.js';
    }
  };

  return swfParser;

});
