define([
  './tag',
  'swfParser/main'
], function(tag, swfParserModule) {
  var swfParser = swfParserModule.swfParser;

  var stats = {
    getStatsForSwfFile: function() {
      return !!tag.getCount; // lets access tag, to simulate use
    },
    canSeeTagGetCountFunction: function() {
      return !!tag.getCount;
    },
    canSeeSwfParserModule: function() {
      return typeof swfParser != 'undefined';
    },
    canSeeSwfParserLibFile: function() {
      return swfParser.canSeeLibPngFile();
    },
    canSeeExternalNodeStyleFile: function() {
      return swfParser.canSeeNodeStyleFile();
    },
    canSeeExternalRequireStyleFile: function() {
      return swfParser.canSeeRequireStyleFile();
    },
    tag: tag
  };

  return stats;

});
