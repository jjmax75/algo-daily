// Time complexity is O(n)

reverseString(str) {
  let left = 0;
  let right = str.length - 1;
  let stringArr = str.split();
  
  while (left <= right){
    [stringArr[left], stringArr[right]] = [stringArr[right], stringArr[left]];
    left += 1;
    right -= 1;
  }
  return stringArr.join('');
}
