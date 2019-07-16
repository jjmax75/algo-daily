function powerOfThree(num) {
  if (num === 3) {
    return true;
  } else if (num % 3 === 0) {
    return powerOfThree( num / 3);
  } else {
    return false;
  }
}

powerOfThree(27) // true
