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
  });
});
