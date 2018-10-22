function extend(sourceObj) {
  for (var i = 1, len = arguments.length ;  i < len ; i++) {
    var targetObj = arguments[i];

    for (var property in targetObj) {
      sourceObj[property] = targetObj[property];
    }
  }

  return sourceObj;
}

module.exports = extend;
