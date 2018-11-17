var abstractmethod = require('./abstractmethod.js');

function AbstractSet() {
  throw new Error('Can\'t instantiate abstract classes');
}

AbstractSet.prototype.contains = abstractmethod;

module.exports = AbstractSet;