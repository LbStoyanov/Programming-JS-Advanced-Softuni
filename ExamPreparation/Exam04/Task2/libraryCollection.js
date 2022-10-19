class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.capacity === 0) {
      throw new Error("Not enough space in the collection.");
    }

    this.books.push({
      bookName,
      bookAuthor,
      payed: false,
    });

    this.capacity--;
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    if (!this.books.some((b) => b.bookName === bookName)) {
      throw new Error(`${bookName} is not in the collection.`);
    }

    let searchedBook = this.books.find((b) => b.bookName === bookName);

    if (searchedBook.payed) {
      throw new Error(`${bookName} has already been paid.`);
    }

    searchedBook.payed = true;

    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    if (!this.books.some((b) => b.bookName === bookName)) {
      throw new Error("The book, you're looking for, is not found.");
    }

    let searchedBook = this.books.find((b) => b.bookName === bookName);

    if (!searchedBook.payed) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books = this.books.filter((b) => b.bookName !== bookName);
    this.capacity++;

    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let result = '';
    if (!bookAuthor) {
      result = `The book collection has ${this.capacity} empty spots left.\n`;
      let sortedBooks = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );

      for (let book of this.books) {
        let payedOrNot = book.payed == false ? "Not Paid" : "Has Paid";

        result += `${book.bookName} == ${book.bookAuthor} - ${payedOrNot}.\n`;
      }
    } else {
      let searchedBook = this.books.find((b) => b.bookAuthor === bookAuthor);
      let payedOrNot = searchedBook.payed == false ? "Not Paid" : "Has Paid";
      if (searchedBook) {
         return  `${searchedBook.bookName} == ${bookAuthor} - ${payedOrNot}.`;
      } else {
        result += `${bookAuthor} is not in the collection.`;
      }
    }

    return result.substring(0, result.length - 1);
  }
}

let library = new LibraryCollection(5);
console.log(library.addBook("Don Quixote", "Miguel de Cervantes"));
console.log(library.payBook("Don Quixote"));

console.log(library.addBook("In Search of Lost Time", "Marcel Proust"));

console.log(library.addBook("Ulysses", "James Joyce"));
console.log(library.getStatistics());

