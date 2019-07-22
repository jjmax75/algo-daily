// given an array of strings containing alphabetical characters and certain $ characters
// $ represents a DELETE action whereby the character before it is deleted
// are all strings in the array equal after parsing the DELETE actions?

function isDollarDeleteEqual(arr) {
  if (arr.length <= 1) {
    return true;
  }
  
  let lastStr = getFinalStr(arr[0]);
  
  for (let i = 1; i < arr.length; i++) {
    let currStr = getFinalStr(arr[i]);
    if (currStr !== lastStr) {
      return false; 
    }
    lastStr = currStr;
  }
  
  return true;
}

function getFinalStr(str) {
  const charStack = [];
  for (let char of str) {
    if (char === '$') {
      charStack.pop();
    } else {
     charStack.push(char); 
    }
  }
  return charStack.join('');
}

const input = ["f$st", "st"];
console.log(isDollarDeleteEqual(input)); // true
