if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    wirtable: true,
    enumerable: false,
    configurable: true,
    value: function(callback, initialValue) {
      var accumulator, len = this.length, i;

      if (arguments.length > 1) {
        accumulator = initialValue;
      }
      else {
        i = 0;
        while(i < len) {
          if (i in this) {
            accumulator = this[i];
            break;
          }
          i++;
        }

        if (i >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
      }

      while (i < len) {
        if (i in this) {
          accumulator = callback(accumulator, this[i], i, this);
        }
        i++;
      }

      return accumulator;
    }
  });
}
