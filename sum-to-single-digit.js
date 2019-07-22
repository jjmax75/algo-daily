// sum a number until it is one digit

function sumDigits(num) {
  if (num <= 9) {
    return num;
  }
  
  return sumDigits(
    String(num)
    	.split('')
    	.reduce((acc, curr) => acc + Number(curr), 0)
  );
}

console.log(sumDigits(1));
console.log(sumDigits(49));
console.log(sumDigits(439230));
