var defineSubClass = require('./../lib/defineSubClass.js');

if (!Function.prototype.extend) {
  Function.prototype.extend = function(constructor, methods, statics) {
    return defineSubClass(this, constructor, methods, statics);
  };
}
