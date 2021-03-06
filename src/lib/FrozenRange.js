var hideProps = require('./hideProps.js');

function FrozenRange(from, to) {
  if (from > to) {
    throw new Error('Range: from must be <= to');
  }
  
  function getFrom() {
    return from;
  }

  function getTo() {
    return to;
  }

  function setFrom(f) {
    if (f <= to){
      from = f;
    }
    else{
      throw new Error('Range: from must be <= to');
    }
  }

  function setTo(t) {
    if (t >= from) {
      to = t;
    }
    else {
      throw new Error('Range: to must be >= from');
    }
  }

  Object.defineProperties(this, {
    from: {
      get: getFrom,
      set: setFrom,
      enumerable: true,
      configurable: false
    },
    to: {
      get: getTo,
      set: setTo,
      enumerable: true,
      configurable: false
    }
  });
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