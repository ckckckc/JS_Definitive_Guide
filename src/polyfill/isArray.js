Array.isArray = Array.isArray || function(o) {
  return typeof o === 'object' && 
  Object.prototype.toString.call(o) === '[object Array]';
};
