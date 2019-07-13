// given a string, reverse only the alphabetical characters

function reverseAlphaOnly(str) {
  if (str.length <= 1) {
    return str;
  }
  
  let left = 0;
  let right = str.length - 1;
  const strArray = str.split('');
  
  while (left < right) {
    if (!isAlpha(str[left])) {
      left += 1;
    } else if (!isAlpha(str[right])) {
      right -= 1;
    } else {
      [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
      left += 1;
      right -= 1;
    }
  }
  
  return (strArray.join(''));
}

const isAlpha = char => /^[a-z]+$/i.test(char);

// test
console.log(reverseAlphaOnly('h!ey'); // 'y!eh'
