var freezeProps = require('./freezeProps.js');
var hideProps = require('./hideProps.js');

function FrozenRange(from, to) {
  this.from = from;
  this.to = to;
  freezeProps(this);
}

FrozenRange.prototype = hideProps({
  constructor: FrozenRange,
  includes: {
    value: function(x) { return this.from <= x && x <= this.to; }
  },
  foreach:  {
    value: function(f) {
      for (var x = Math.cell(this.from); x <= this.to; x++)
        f(x);
    }
  },
  toString: {
    value: function() {
      return '(' + this.from + '...' + this.to + ')';
    }
  }
});

module.exports = FrozenRange;