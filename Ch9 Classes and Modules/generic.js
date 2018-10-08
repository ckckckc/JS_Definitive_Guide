var generic = {
  toString: function() {
    var s = '[';
    
    // 如果有非標準的 constructor name property，提供 constructor name
    if (this.constructor && this.constructor.name) {
      s += this.constructor.name + ': ';
    }

    var n = 0;

    // 只列出非繼承的自有 property
    // property 不包含 function
    for (var name in this) {
      if (!this.hasOwnProperty(name)) {
        continue;
      }

      var value = this[name];

      if (typeof value === 'function') {
        continue;
      }

      if (n++) {
        s += ', ';
      }

      s += name + '=' + value;
    }

    return s + ']';
  },
  equals: function(that) {
    if (that == null) {
      return false;
    }

    if (this.constructor !== that.constructor) {
      return false;
    }

    for (var name in this) {
      // 這是應應之前 Set Class 的 property
      if (name === '|**objectid**|') {
        continue;
      }

      if (!this.hasOwnProperty(name)) {
        continue;
      }

      if (this[name] !== that[name]) {
        return false;
      }
    }

    return true;
  }
};

module.exports = generic;