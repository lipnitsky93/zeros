module.exports = function getZerosCount(number) {
  var commonCount = 0;
  var n = 5;
  while (n < number) {
  var count = Math.floor(number / n);
  n *= 5;
  
  commonCount += count;
  }
  return commonCount;
}
