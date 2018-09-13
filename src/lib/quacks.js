module.exports = function quacks(inputObject) {
  var isObjectHavingAllMethods = function(sourceObj, targetObject) {

    if (Object.getOwnPropertyNames) {
      var predictMethods = Object.getOwnPropertyNames(targetObject);

      for (var i = 0, len = predictMethods.length ; i < len ; i++) {
        var predictMethod = predictMethods[i];

        if (typeof targetObject[predictMethod] !== 'function') continue;

        if (typeof sourceObj[predictMethod] !== 'function') return false;
      }
    }
    else {
      for (var method in targetObject) {
        if (typeof targetObject[method] !== 'function') continue;

        if (typeof sourceObj[method] !== 'function') return false;
      }
    }

    return true;
  };

  for (var i = 1, len = arguments.length; i < len ; i++) {
    var argument = arguments[i];

    switch (typeof argument) {
      case 'string':
        if (typeof inputObject[argument] !== 'function') return false;
        continue;
      case 'function':
        if (isObjectHavingAllMethods(inputObject, argument.prototype)) {
          continue;
        }
        return false;
      case 'object':
        if (isObjectHavingAllMethods(inputObject, argument)) {
          continue;
        }
        return false;
    }
  }

  return true;
}