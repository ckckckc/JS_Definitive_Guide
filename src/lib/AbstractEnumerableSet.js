require('./../polyfill/extend.js');
var AbstractSet = require('./AbstractSet.js');
var abstractmethod = require('./abstractmethod.js');

var AbstractEnumerableSet = AbstractSet.extend(
  function() { throw new Error('Can\'t instantiate abstract classes'); },
  {
    size: abstractmethod,
    foreach: abstractmethod,
    isEmpty: function() { return this.size() == 0; },
    toString: function() {
      var s = '{', i = 0;
      this.foreach(function(v) {
        if (i++ > 0) s += ', ';
        s += v;
      });
      return s + '}';
    },
    toLocaleString: function() {
      var s = '{', i = 0;
      this.foreach(function(v) {
        if (i++ > 0) s += ', ';
        if (v == null) s += v;
        else s += v.toLocaleString();
      });
      return s + '}';
    },
    toArray: function() {
      var a = [];
      this.foreach(function(v) { a.push(v); });
      return a;
    },
    equals: function(that) {
      if (!(that instanceof AbstractEnumerableSet)) return false;

      if (this.size() != that.size()) return false;

      try{
        this.foreach(function(v) {
          if (!(that.contains(v))) throw false;
        });
        return true;
      }
      catch(err) {
        if (err === false) return false;
        throw err;
      }
    }
  }
);

module.exports = AbstractEnumerableSet;