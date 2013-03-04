define([
  './requireStyleFile',
  './nodeStyleFile',
  '../lib/png'
], function(requireStyleFile, nodeStyleFile, png) {

  var swfParser = {
    parse: function() {},
    canSeeLibPngFile: function() {
      console.log(png);
      return png.iAm == 'png.js';
    },
    canSeeRequireStyleFile: function() {
      console.log(tag);
      return png.iAm == 'requireStyleFile.js';
    },
    canSeeNodeStyleFile: function() {
      console.log(tag);
      return png.iAm == 'nodeStyleFile.js';
    }
  };

  return swfParser;

});
