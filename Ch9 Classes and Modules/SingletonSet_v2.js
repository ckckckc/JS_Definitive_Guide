require('./../src/polyfill/extend.js');
var AbstractEnumerableSet = require('./AbstractEnumerableSet.js');

var SingletonSet = AbstractEnumerableSet.extend(
  function SingletonSet(member) {
    this.member = member;
  },
  {
    contains: function(v)  {
      return v === this.member;
    },
    size: function() { return 1; },
    foreach: function(f, ctx) {
      f.call(ctx, this.member);
    }
  }
);

module.exports = SingletonSet;