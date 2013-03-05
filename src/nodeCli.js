/*
  This shall demostrate how to include requirejs style modules
  from a node style module.
 */
console.log('\n\n====== Running src/nodeCli.js ======\n');
var main = require('./main');

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
