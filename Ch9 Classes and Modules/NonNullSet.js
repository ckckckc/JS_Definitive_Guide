var inherit = require('./inherit.js');
var Set = require('./Set.js');

function NonNullSet() {
  // Just chain to our superclass.
  // Invoke the superclass constructor as an ordinary function to initialize
  // the object that has been created by this constructor invocation.
  Set.apply(this, arguments);
}

NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

NonNullSet.prototype.add = function() {
  for (var i = 0, len = arguments.length ; i < len ; i++ ) {
    if (arguments[i] == null) {
      throw new Error('Cant\'t add null or undefined to NonNullSet');
    }
  }

  // Chain to the superclass to perform the actual insertion
  return Set.prototype.add.apply(this, arguments);
};

module.exports = NonNullSet;