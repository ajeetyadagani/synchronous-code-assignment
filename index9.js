const checkout = {
    items: [],
    total: 0,
  
    addItem(item) {
      // Attempt to coerce the price into a number
      const price = parseFloat(item.price);
  
      // Validate the price
      if (isNaN(price) || typeof item.name !== 'string') {
        console.log("Invalid item or price.");
        return;
      }
  
      this.items.push({ ...item, price }); // store item with parsed price
      this.total += price;
      console.log(`Item "${item.name}" added. Price: $${price.toFixed(2)}`);
    },
  
    getTotal() {
      // Correct template string and formatting
      return `Total: $${this.total.toFixed(2)}`;
    }
  };
  
  // ✅ Test cases
  checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // string price
  checkout.addItem({ name: "Milk", price: 3.50 });             // number price
  checkout.addItem({ name: "Invalid", price: "abc" });         // invalid price
  
  console.log(checkout.getTotal());  // Output: Total: $103.45
  