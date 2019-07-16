function lonelyNumber(numbers) {
  const nums = {};
  
  numbers.forEach(number => {
    if (nums[number]) {
      delete nums[number];
    } else {
      nums[number] = true;
    }
  });
  return Object.keys(nums)[0];
}

// test
lonelyNumber([1, 2, 3, 4, 1, 2, 4]); // 3
