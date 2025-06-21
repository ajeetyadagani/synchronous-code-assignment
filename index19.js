function timer(duration, onComplete) {
    setTimeout(() => {
      const message = `Timer of ${duration} ms finished`;
      onComplete(message);
    }, duration);
  }
  
  // ✅ Example usage
  function handleFinish(msg) {
    console.log(msg);
  }
  
  // Call the timer function with 2000ms (2 seconds)
  timer(2000, handleFinish); // Output after 2 sec: "Timer of 2000 ms finished"
  