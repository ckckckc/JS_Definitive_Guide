var AbstractWritableSet = require('./AbstractWritableSet.js');

function StringSet() {
  this.set = Object.create(null);
  this.n = 0;
  this.add.apply(this, arguments);
}

StringSet.prototype = Object.create(AbstractWritableSet.prototype, {
  constructor: {
    value: StringSet
  },
  contains: {
    value: function(x) { return x in this.set; }
  },
  size: {
    value: function() { return this.n; }
  },
  foreach: {
    value: function(f, c) {
      Object.keys(this.set).forEach(f, c);
    }
  },
  add: {
    value: function() {
      for (var i = 0, len = arguments.length ; i < len; i++ ) {
        console.log('arguments[i]', arguments[i])
        if (!(arguments[i] in this.set)) {
          this.set[arguments[i]] = true;
          this.n++;
        }
      }
      return this;
    }
  },
  remove: {
    value: function() {
      for (var i = 0, len = arguments.length; i < len ;i++ ) {
        if (arguments[i] in this.set) {
          delete this.set(arguments[i]);
          this.n--;
        }
      }
      return this;
    }
  }
});

// var s = new StringSet(1, 2, 3);
// s.foreach(function(v) {
//   console.log(v);
// })
// console.log(s.contains(1))
module.exports = StringSet;