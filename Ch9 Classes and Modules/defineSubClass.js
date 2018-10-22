var inherit = require('./inherit.js');
var extend = require('./extend.js');

function defineSubClass(superClass, constructor, methods, statics) {
  constructor.prototype = inherit(superClass.prototype);
  constructor.prototype.constructor = constructor;

  if (methods) {
    extend(constructor.prototype, methods);
  }

  if (statics) {
    extend(constructor, statics);
  }

  return constructor;
}

module.exports = defineSubClass;
