// This file contains the command line interface.
// All code that is ONLY needed for the cli is contained
// in here, this file is only used in the `/bin/<filename>.js`!

var stats = require('./main').stats;

var argv = require('optimist')
    .usage('Usage: $0 filename.swf')
    .argv;
var swfFileName = argv._[0];

console.log(stats.getStatsForSwfFile(swfFileName) && stats.canSeeTagGetCountFunction());
