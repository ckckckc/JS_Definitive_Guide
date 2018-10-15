function Set() {
  this.values = {};
  this.n = 0;

  this.add.apply(this, arguments);
}

Set.fromArray = function(array) {
  var set = new Set();
  set.add.apply(set, array);
  return set;
};

Set._v2s = function(val) {
  switch(val) {
    case undefined: return 'u';
    case null: return 'n';
    case true: return 't';
    case false: return 'f';
    default: switch(typeof val) {
      case 'number': return '#' + val;      // prefix # for number
      case 'string': return '"' + val;      // prefix " for string
      default: return '@' + objectId(val);  // prefix @ for object and function
    }
  }

  // 這個 objectId 有個副作用
  // 它偷加 |**objectid**|: {number} property 到 o 裡
  // 萬一 o 已經剛好有 property name 為 |**objectid**| 時
  // Set._v2s 可能會回傳不唯一的值
  function objectId(o){
    var prop = '|**objectid**|';
    if (!o.hasOwnProperty(prop)) {
      o[prop] = Set._v2s.next++;
    }
    return o[prop];
  }
};

Set._v2s.next = 100;

Set.prototype.toString = function() {
  var s = '{', i = 0;

  this.foreach(function(value){
    s += ((i++ > 0) ? ', ' : '') + value;
  });

  return s + '}';
};

Set.prototype.toLocaleString = function() {
  var s = '{', i = 0;

  this.foreach(function(value){
    if (i++ > 0) {
      s += ', ';
    }
    // null & undefined
    if (value == null) {
      s += value;
    }
    // all others
    else {
      s += value.toLocaleString();
    }
  });

  return s + '}';
};

// Convert a set to an array of values
Set.prototype.toArray = function() {
  var array = [];

  this.foreach(function(value) {
    array.push(value);
  });

  return array;
};

// Treat sets like arrays for the purposes of JSON stringification.
Set.prototype.toJSON = Set.prototype.toArray;

Set.prototype.add = function() {
  for (var i = 0, len = arguments.length ; i < len ; i++) {
    var val = arguments[i];
    var str = Set._v2s(val);
    if (!this.values.hasOwnProperty(str)) {
      this.values[str] = val;
      this.n++;
    }
  }
  return this;
};

Set.prototype.remove = function() {
  for (var i = 0, len = arguments.length ; i < len ; i++) {
    var str = Set._v2s(arguments[i]);
    if (this.values.hasOwnProperty(str)) {
      delete this.values[str];
      this.n--;
    }
  }
  return this;
};

Set.prototype.contains = function(value) {
  return this.values.hasOwnProperty(Set._v2s(value));
};

Set.prototype.size = function() {
  return this.n;
};

Set.prototype.foreach = function(f, context) {
  for (var s in this.values) {
    // 忽略繼承而來的 properties
    if (this.values.hasOwnProperty(s)) {
      f.call(context, this.values[s]);
    }
  }
};

Set.prototype.equals = function(that) {
  if (this === that) return true;

  if (!(that instanceof Set)) return false;

  if (this.size() != that.size()) return false;

  try {
    this.foreach(function(value) {
      if (!that.contains(value)) {
        throw false;
      }
      return true;
    });
  } catch (x) {
    if (x === false) {
      return false;
    }

    throw x;
  }
};