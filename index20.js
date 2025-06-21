// Step 1: Simulate asynchronous data fetching
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // 50% chance
        if (isSuccess) {
          resolve("Fetched data successfully!");
        } else {
          reject("Failed to fetch data due to network issue.");
        }
      }, 1000); // Simulate 1 second delay
    });
  }
  
  // Step 2: Async function to handle success/failure
  async function fetchDataHandler() {
    try {
      const result = await fetchData();
      console.log(result); // "Fetched data successfully!"
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  // Step 3: Run the handler multiple times to test
  fetchDataHandler();
  