function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  // ✅ Example Input
  const original = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
  };
  
  // ✅ Cloning the object
  const clone = deepClone(original);
  
  // ✅ Modify the cloned object
  clone.hobbies.push("coding");
  
  // ✅ Output to verify deep cloning
  console.log("Original:", original);
  console.log("Clone:", clone);
  