function createCounter() {
    let count = 0; // Private variable inside closure
  
    return {
      increment: function () {
        count += 1;
        return count;
      },
  
      getCount: function () {
        return count;
      }
    };
  }
  
  // ✅ Testing the counter
  const counter = createCounter();
  
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.getCount());  // Output: 2
  