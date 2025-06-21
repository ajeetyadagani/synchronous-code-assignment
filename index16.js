function multiply(a, b) {
    return a * b;
  }
  
  function multiplyNumbers(num1, num2) {
    return multiply.apply(null, [num1, num2]);
  }
  
  // ✅ Test Cases
  console.log(multiplyNumbers(3, 4)); // Output: 12
  console.log(multiplyNumbers(5, 6)); // Output: 30
  