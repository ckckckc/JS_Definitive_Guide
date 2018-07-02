if (!Array.prototype.map) {
  Object.defineProperty(Array.prototype, 'map', {
    wirtable: true,
    enumerable: false,
    configurable: true,
    value: function(callback, thisArg) {
      var currentArray = this,
        resultArray = [];
      for (var i = 0, len = currentArray.length; i < len ; i++) {
        if (i in currentArray) {
          resultArray.push(callback.call(thisArg, currentArray[i], i, currentArray));
        }
      }

      return resultArray;
    }
  });
}
