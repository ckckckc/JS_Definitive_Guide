var Set = require('./Set.js');
var defineSubClass = require('./defineSubClass.js');

var FilteredSet = defineSubClass(
  Set, 
  function FilteredSet(set, filter) {

    this.set = set;
    this.filter = filter;
    // Set.apply(this);
  },
  {
    add: function() {
      if (this.filter) {
        for (var i = 0, len = arguments.length ; i < len ; i ++) {
          var value = arguments[i];

          if (!this.filter(value)) {
            throw new Error('FilteredSet: value ' + value + ' rejected by filter');
          }
        }
      }

      // 將 add() method 轉傳給 this.set.add()
      this.set.add.apply(this.set, arguments);
      return this;
    },
    // 需要把剩下的 methods 轉傳給 this.set，因為這個 subclass 的 instance fields 只有 set 跟 filter
    remove: function() {
      this.set.remove.apply(this.set, arguments);
      return this;
    },
    contains: function(value) {
      return this.set.contains(value);
    },
    size: function() {
      return this.set.size();
    },
    foreach: function(f, c) {
      this.set.foreach(f, c);
    }
  }
);

module.exports = FilteredSet;