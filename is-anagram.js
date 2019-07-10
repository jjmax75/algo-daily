// check if a string is an anagram of another

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false; 
  }
  str1 = str1.toLowerCase().split('').sort().join('');
  str2 = str2.toLowerCase().split('').sort().join('');
  
  return str1 === str2;
}
