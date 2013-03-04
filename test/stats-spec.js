requirejs([
  '../src/stats',
  '../src/tag'
], function(stats, tag) {

  describe('stats', function() {
    it('should return tag for tag property', function() {
      expect(stats.tag)
        .toBe(tag);
    });
    it('should return true for canSeeTagGetCountFunction', function() {
      expect(stats.canSeeTagGetCountFunction())
        .toBe(true);
    });
    it('should find external swfParser module', function() {
      expect(stats.canSeeSwfParserModule())
        .toBe(true);
    });
    it('should find external swfParsers lib png file', function() {
      expect(stats.canSeeSwfParserLibFile())
        .toBe(true);
    });
    it('should see swfparser node style file', function() {
      expect(stats.canSeeExternalNodeStyleFile())
        .toBe(true);
    });
    it('should see swfparser require style file', function() {
      expect(stats.canSeeExternalRequireStyleFile())
        .toBe(true);
    });
  });
});
