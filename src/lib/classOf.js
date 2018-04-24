/**
 * CH6 6.8.2 p.119 

 * Usage:
  
  classOf(null)        // => "NULL"
  classOf(1)           // => "Number"
  classOf("")          // => "String"
  classOf(false)       // => "Boolean"
  classOf({})          // => "Object"
  classOf([])          // => "Array"
  classOf(/./)         // => "Regexp"
  classOf(new Date())  // => "Date"
  classOf(window)      // => "Window"
  function f() {}; 
  classOf(new f());    // => "Object"

 */

function classOf(obj) {
  if (obj === null) return 'Null';
  if (obj === undefined) return undefined;
  return Object.prototype.toString.call(obj).slice(8, -1);
}

module.exports = classOf;