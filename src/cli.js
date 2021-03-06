console.log('\n\n====== Running src/cli.js ======\n');
// This file contains the command line interface.
// All code that is ONLY needed for the cli is contained
// in here, this file is only used in the `/bin/<filename>.js`!
if (!requirejs) { var requirejs = require('./requireSetup')(require); }

requirejs([
  './main'
], function(main) {
  var stats = main.stats;

  var argv = require('optimist')
      .usage('Usage: $0 filename.swf')
      .argv;
  var swfFileName = argv._[0];

  console.log(
    stats.getStatsForSwfFile(swfFileName) + ' = stats.getStatsForSwfFile\n',
    stats.canSeeTagGetCountFunction() + ' = stats.canSeeTagGetCountFunction()\n',
    stats.canSeeSwfParserModule() + ' = stats.canSeeSwfParserModule()\n',
    stats.canSeeSwfParserLibFile() + ' = stats.canSeeSwfParserLibFile()\n',
    stats.canSeeExternalNodeStyleFile() + ' = stats.canSeeExternalNodeStyleFile()\n',
    stats.canSeeExternalRequireStyleFile() + ' = stats.canSeeExternalRequireStyleFile()'
  );
});
