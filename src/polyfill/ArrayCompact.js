/**
 * Array.prototype.compact method:
 * Create a new dense array from invoking sparse array.
 *
 * @return {array} return a new dense array
 *
 * @example
 *
 * [, NaN, , -0, 0, , '', , null, , undefined, 'foo', false].compact(); 
 * // => [ NaN, -0, 0, '', null, undefined, 'foo', false ]
 */

Object.defineProperty(Array.prototype, "compact", {
  wirtable: true,
  enumerable: false,
  configurable: true,
  value: function() {
    var denseArray = [], denseArrayIndex = 0;

    if (Array.prototype.hasOwnProperty && Array.prototype.hasOwnProperty('filter')) {
      denseArray = Array.prototype.filter.call(this, function() {
        return true;
      });
      return denseArray;
    }

    for (var i = 0, len = this.length ; i < len ; i++) {
      if (!(i in this)) continue;
      denseArray[denseArrayIndex] = this[i];
      denseArrayIndex++;
    }

    return denseArray;
  }
});
