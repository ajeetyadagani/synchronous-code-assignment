function outerFunction() {
    let message = "Hello from closure!";
  
    function innerFunction() {
      console.log(message);
    }
  
    return innerFunction;
  }
  
  // Storing the returned inner function
  const closureExample = outerFunction();
  
  // Invoking the stored function
  closureExample(); // Output: Hello from closure!
  