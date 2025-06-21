const userProfile = {
    name: "Alice",
    age: 28,
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;
  
      // Corrected: calling the method instead of referencing it
      console.log(this.details());
    }
  };
  
  // ✅ Test
  userProfile.updateAge(30);
  console.log(userProfile.details()); // Expected: "Alice is 30 years old."
  