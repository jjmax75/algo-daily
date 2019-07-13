// fizz buzz....no explanation needed

function fizzBuzz(n) {
  const vals = [];
  for (let i = 1; i <= n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      vals.push('fizzbuzz');
    } else if (i % 3 === 0) {
      vals.push('fizz');
    } else if (i % 5 === 0) {
      vals.push('buzz');
    } else {
      vals.push(i);
    }
  }
  return vals.join('');
}

// tests
fizzBuzz(1);
fizzBuzz(15);
