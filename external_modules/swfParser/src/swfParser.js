define([
  './requireStyleFile',
  './nodeStyleFile',
  '../lib/png'
], function(requireStyleFile,
//            nodeStyleFile,
            png
  ) {

  var swfParser = {
    parse: function() {},
    canSeeLibPngFile: function() {
      return png.iAm == 'png.js';
    },
    canSeeRequireStyleFile: function() {
      return requireStyleFile.iAm == 'requireStyleFile.js';
    },
    canSeeNodeStyleFile: function() {
      return nodeStyleFile.iAm == 'nodeStyleFile.js';
    }
  };

  return swfParser;

});
