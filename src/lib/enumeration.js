function inherit(p) {
  // inherit() returns a newly created object that inherits properties from the 
  // prototype object p. It uses the ECMAScript 5 function Object.create() if 
  // it is defined, and otherwise falls back to an older technique.

  if (p == null) throw TypeError(); // p must be a non-null object

  if (Object.create)                // If Object.create() is defined...
    return Object.create(p);        // then just use it.

  var t = typeof p;                 // Otherwise do some more type checking

  if (t !== 'object' && t !== 'function') throw TypeError();

  function f() {}                   // Define a dummy constructor function.

  f.prototype = p;                  // Set its prototype property to p.

  return new f();                   // Use f() to create an "heir" of p.
}

function enumeration(namesToValues) {
  // This is the dummy constructor function that will be the return value.
  var Enumeration = function() {
    throw 'Can\'t Instantiate Enumerations';
  };

  Enumeration.values = [];

  Enumeration.foreach = function(loopHandler, context) {
    for (var i = 0, len = this.values.length ; i < len ; i++) {
      loopHandler.call(context, this.values[i]);
    }
  };

  Enumeration.prototype.toString = function() {
    console.log('toString');
    return this.name;
  };

  Enumeration.prototype.valueOf = function() {
    console.log('valueOf');
    return this.value;
  };

  Enumeration.prototype.toJSON = function() {
    return this.name;
  };

  for (var name in namesToValues) {
    var entity = inherit(Enumeration.prototype);
    entity.name = name;
    entity.value = namesToValues[name];
    Enumeration[name] = entity;
    Enumeration.values.push(entity);
  }

  return Enumeration;
}

module.exports = enumeration;