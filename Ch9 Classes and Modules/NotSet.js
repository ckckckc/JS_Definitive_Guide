require('./../src/polyfill/extend.js');
var AbstractSet = require('./AbstractSet.js');

var NotSet = AbstractSet.extend(
  function NotSet(set) { this.set = set; },
  {
    contains: function(x) { return !this.set.contains(x); },
    toString: function() { return '~' + this.set.toString(); },
    equals: function(that) {
      return that instanceof NotSet && this.set.equals(that.set);
    }
  }
);