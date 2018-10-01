function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  constructor: Range,
  includes: function(x) { return this.from <= x && x <= this.to; },
  foreach: function(f) {
    for(var x = Math.ceil(this.from); x <= this.to; x++) f(x); 
  },
  toString: function(){ 
    return '(' + this.from + '...' + this.to + ')'; 
  }
};

Range.prototype.equals = function(that) {
  if (that == null) return false;
  if (that.constructor !== Range) return false;

  return this.from == that.from && this.to == that.to;
};

Range.prototype.compareTo = function(that) {
  if (!(that instanceof Range)) {
    throw new Error('Can\'t compare a Range with ' + that);
  }
  var diff = this.from - that.from;
  if (diff == 0) {
    diff = this.to - that.to;
  }
  return diff;
};

Range.byLowerBound = function(a, b) {
  return a.compareTo(b);
};