(function() {
  var idprop = '|**objectId**|';
  var nextid = 1;

  function idGetter() {
    if (!(idprop in this)) {
      if (!Object.isExtensible(this)) {
        throw new Error('Can\'t define id for nonextensible objects');
      }

      Object.defineProperty(this, idprop, {
        value: nextid++,
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
    return this[idprop];
  }

  Object.defineProperty(Object.prototype, 'objectId', {
    get: idGetter,
    enumerable: false,
    configurable: false
  });
})();