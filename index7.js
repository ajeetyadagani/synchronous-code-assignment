// Step 1: Declare global variable
let age = 25;

// Step 2: Function to display age
function displayAge() {
  console.log("Age is:", age);
}

// Step 3: Function to change age
function changeAge() {
  age = 30; // This modifies the global variable
  console.log("Age updated to:", age);
}

// Step 4: Call the functions
displayAge();     // Output: Age is: 25
changeAge();      // Output: Age updated to: 30
displayAge();     // Output: Age is: 30
