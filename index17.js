function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  
  // Object with name and age
  const person = {
    name: "Alice",
    age: 25
  };
  
  // Using call() to invoke personInfo with `person` as `this`
  personInfo.call(person);
  