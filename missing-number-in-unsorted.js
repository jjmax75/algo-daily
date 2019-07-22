// use Gauss Sum for numbers in 1 to n sum is n(n + 1) / 2

function missingInUnsorted(arr, lowerBound, upperBound) {
  const gaussSumHigher = upperBound * (upperBound + 1) / 2;
  const gaussSumLower = lowerBound * (lowerBound - 1) / 2;
  const gaussSumConsecutives = gaussSumHigher - gaussSumLower;
  
  const arraySum = arr.reduce((acc, curr) => acc + curr, 0);
  return gaussSumConsecutives - arraySum;
}

console.log(missingInUnsorted([ 2, 5, 1, 4, 9, 6, 3, 7 ], 1, 9)); // 8
