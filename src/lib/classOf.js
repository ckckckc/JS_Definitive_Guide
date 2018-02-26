/**
 * CH6 6.8.2 p.119 

 * Usage:
  
  classof(null)        // => "NULL"
  classof(1)           // => "Number"
  classof("")          // => "String"
  classof(false)       // => "Boolean"
  classof({})          // => "Object"
  classof([])          // => "Array"
  classof(/./)         // => "Regexp"
  classof(new Date())  // => "Date"
  classof(window)      // => "Window"
  function f() {}; 
  classof(new f());    // => "Object"

 */

function classOf(obj) {
  if (obj === null) return "Null";
  if (obj === undefined) return undefined;
  return Object.prototype.toString.call(obj).slice(8, -1);
}

module.exports = classOf;