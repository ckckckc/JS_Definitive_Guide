if(!Function.prototype.bind) {
  Function.prototype.bind = function(assignedObj) {
    var boundFunction = this,
      boundArguments = arguments;

    return function() {
      var invokingArguments = arguments,
        totalArguments = [], i, len;

      for (i = 1, len = boundArguments.length ; i < len ; i++)
        totalArguments.push(boundArguments[i]);

      for (i = 0, len = invokingArguments.length ; i < len ; i++)
        totalArguments.push(invokingArguments[i]);

      return boundFunction.apply(assignedObj, totalArguments);
    };
  };
}