// find first non repeating character in a string

function firstNonRepeat(str) {
  const uniqueVals = new Set();
  const repeatedVals = new Set();
  if (str.length <= 1) {
    return str;
  }
  
  for (let char of str) {
    if (repeatedVals.has(char)) {
      
    } else if (uniqueVals.has(char)) {
      uniqueVals.delete(char);
      repeatedVals.add(char);
    } else {
      uniqueVals.add(char);
    }
  }
  return uniqueVals.values().next().value;
}

// 'abcabcadcjdfyu' will return j
// What is the efficiency of lookup in a set?
