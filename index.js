
function sum(a, b) {
  if (a === b) {
    return b;
  }
  return a + sum(a + 1, b);
}

module.exports = sum;