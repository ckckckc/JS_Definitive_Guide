var Set = require('./Set.js');
var extend = require('./extend.js');
var inherit = require('./inherit.js');

function SingletonSet(member) {
  this.member = member;
}

SingletonSet.prototype = inherit(Set.prototype);

extend(SingletonSet.prototype, {
  constructor: SingletonSet,
  add: function() {
    throw 'read-only set';
  },
  remove: function() {
    throw 'read-only set';
  },
  size: function() {
    return 1;
  },
  foreach: function(f, context) {
    f.call(context, this.member);
  },
  constain: function(x) {
    return x === this.member;
  },
  equals: function(that) {
    return that instanceof Set && that.size() === 1 && that.contains(this.member);
  }
});

module.exports = SingletonSet;