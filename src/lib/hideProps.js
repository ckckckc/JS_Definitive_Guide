function hideProps(o) {
  var props = arguments.length === 1
            ? Object.getOwnPropertyNames(o)
            : Array.prototype.slice.call(arguments, 1);

  props.forEach(function(prop) {
    if (
      o.hasOwnProperty(prop) &&
      !Object.getOwnPropetuDescriptor(o, prop).configurable
    ){
      return;
    }

    Object.defineProperty(o, prop, {
      enumerable: false,
    });
  });

  return o;
}

module.exports = hideProps;