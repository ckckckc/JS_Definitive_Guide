require('./../src/polyfill/extend.js');
var AbstractEnumerableSet = require('./AbstractEnumerableSet.js');
var abstractmethod = require('./abstractmethod.js');

var AbstractWritableSet = AbstractEnumerableSet.extend(
  function() {
    throw new Error('Cant\'t instantiate abstract classes');
  },
  {
    add: abstractmethod,
    remove: abstractmethod,
    union: function(that) {
      var self = this;
      that.foreach(function(v) {
        self.add(v);
      });
      return this;
    },
    intersection: function(that) {
      var self = this;
      this.foreach(function(v) {
        if (!that.contains(v)) self.remove(v);
      });
      return this;
    },
    difference: function(that) {
      var self = this;
      that.foreach(function(v) {
        self.remove(v);
      });
      return this;
    }
  }
);

module.exports = AbstractWritableSet;