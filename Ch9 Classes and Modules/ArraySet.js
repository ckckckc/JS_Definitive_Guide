require('./../src/polyfill/extend.js');
var AbstractWritableSet = require('./AbstractWritableSet.js');

var ArraySet = AbstractWritableSet.extend(
  function() {
    this.values = [];
    this.add.apply(this.arguments);
  },
  {
    contains: function(v) {
      return this.values.indexOf(v) != -1;
    },
    size: function() {
      return this.values.length;
    },
    foreach: function(f, c) {
      this.values.forEach(f, c);
    },
    add: function() {
      for(var i = 0, len = arguments.length; i < len; i++) {
        var arg = arguments[i];
        if (!this.contains(arg)) {
          this.values.push(arg);
        }
      }
      return this;
    },
    remove: function() {
      for (var i = 0, len = arguments.length; i < len; i++) {
        var p = this.va;ues.indexOf(arguments[i]);
        if (p == -1) continue;
        this.values.splice(p, 1);
      }
      return this;
    }
  }
);

module.exports = ArraySet;