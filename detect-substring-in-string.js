function detectSubstring(str, subStr) {
  if (str.length < subStr.length) {
    return -1;    
  }
  
  const checkLimit = str.length - subStr.length; // no need to keep checking string once remaining characters are less than length of subString

  for (let i = 0; i <= checkLimit; i++) {
    if (str[i] === subStr[0]) {
      const testStr = str.slice(i, i + subStr.length);
      if (testStr === subStr) {
        return i;
      }
    }
  }
  return -1;
}

console.log(detectSubstring("ggraph", "graph")); // 1
console.log(detectSubstring("geography", "graph")); // 3
console.log(detectSubstring("digginn", "inn")); // 4
console.log(detectSubstring("lool", "boo")); // -1
