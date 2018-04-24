/**
 * CH6 6.7 p.134 Add a nonenumerable extend() method to Object.prototype.
 */

Object.defineProperty(Object.prototype, 'extend', {
  writable: true,
  enumerable: false,
  configurable: true,
  value: function(inputObject) {
    var inputProperties = Object.getOwnPropertyNames(inputObject);

    for (var i = 0, len = inputProperties.length; i < len ; i++){
      var property = inputProperties[i], descriptor;
      if (property in this) continue;
      descriptor = Object.getOwnPropertyDescriptor(inputObject, property);
      Object.defineProperty(this, property, descriptor);
    }
  }
});
