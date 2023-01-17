const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION
const head = function(array) {
  const firstElement = array.shift();
  return firstElement;
};

module.exports = head;