// check if a string is a palindrome

function isPalindrome(str) {
  str = str.toLowerCase();
  const strippedStr = str.split('').filter(char => isAlphaNumeric(char)).join('');
  let left = 0;
  let right = strippedStr.length - 1;
  while(left < right) {
    if (strippedStr[left] !== strippedStr[right]) {
     	return false; 
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function isAlphaNumeric(c) {
	const reAlphaNumeric = /^[a-z0-9]+$/i;
	return reAlphaNumeric.test(c);
}
