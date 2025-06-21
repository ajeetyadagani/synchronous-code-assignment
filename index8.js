const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book) {
      // Check if all fields are valid
      if (
        typeof book.title !== "string" ||
        typeof book.author !== "string" ||
        typeof book.year !== "number"
      ) {
        console.log("Error: Book information is incomplete or invalid.");
        return;
      }
  
      this.books.push(book);
      console.log(`Book titled "${book.title}" added successfully.`);
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        const removedBook = this.books.splice(index, 1)[0];
        console.log(`Removed book titled "${removedBook.title}".`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
  // Test cases
  library.addBook({ author: "George Orwell", year: 1949 }); // Missing title
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // Correct
  
  console.log("Total books:", library.books.length); // Should be 2 if only the second book added
  console.log(library.findBookByTitle("1984")); // Should return book object
  
  library.removeBook("The Hobbit"); // Should remove successfully
  library.removeBook("Unknown Book"); // Should log not found
  