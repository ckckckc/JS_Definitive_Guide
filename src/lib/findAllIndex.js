const findAllIndex = (arr, value) => {
  let results = [],
      currentIndex = 0,
      len = arr.length;

  while(currentIndex < len) {
    currentIndex = arr.indexOf(value, currentIndex);
    if (currentIndex === -1) {
      break;
    }
    results.push(currentIndex++);
  }

  return results;
};

module.exports = findAllIndex;