module.exports = function getZerosCount(number, base) {
    var result = Number.MAX_VALUE, 
    array = [],
    count, copyNumber,
    copyBase = base;
       
  for (let a = 2; a <= base; a++) { 
    let temporary = 0; 
    while (base % a === 0 && base > 0) { 
      temporary++; 
      base /= a; 
    }

    if (temporary > 0) {
      array[a] = temporary;
    }
    
  }
  for  (let a = 2; a <= copyBase; a++) {
    if (array[a] != null) {
      count = 0;
      copyNumber = number;
      while (copyNumber  / a > 0) {
        count += Math.floor(copyNumber / a);
        copyNumber /= a;
      }
      result = Math.min(result, Math.floor(count / array[a]));
    }
  } 
  return result;
}