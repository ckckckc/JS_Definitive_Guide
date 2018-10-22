/**
 * CH6 6.1.4 p.119 
 * inherit() returns a newly created object that inherits properties from the
 * prototype object p. 
 * It uses the ECMAScript 5 function Object.create() if it is defined, 
 * and otherwise falls back to an older technique.
 */

function inherit(p) {
  if (p == null) throw TypeError();
  if (Object.create)
    return Object.create(p);
  var t = typeof p;
  if (t !== 'object' && t !== 'function') throw TypeError();
  function f() {}
  f.prototype = p;
  return new f();
}

module.exports = inherit;