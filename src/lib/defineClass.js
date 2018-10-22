var extend = require('./extend.js');

function defineClass(constructor, methods, statics) {
  if (methods) {
    extend(constructor.prototype, methods);
  }

  if (statics) {
    extend(constructor, statics);
  }

  return constructor;
}

module.exports = defineClass;