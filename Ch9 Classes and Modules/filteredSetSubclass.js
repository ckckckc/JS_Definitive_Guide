var inherit = require('./inherit.js');

function filteredSetSubclass(superclass, filter) {
  var constructor = function() {
    superclass.apply(this, arguments);
  };
  constructor.prototype = inherit(superclass.prototype);

  constructor.prototype.constructor = constructor;

  constructor.prototype.add = function() {
    for (var i = 0, len = arguments.length ; i < len ; i ++) {
      var value = arguments[i];

      if (!filter(value)) {
        throw('value ' + value + ' rejected by filter');
      }
    }

    return superclass.prototype.add.apply(this, arguments);
  };

  return constructor;
}

module.exports = filteredSetSubclass;