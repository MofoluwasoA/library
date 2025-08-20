/**
 * requiements
 * list all books in the library
 * add new books to the library
 * remove booksbform the library
 * borrow books(marks them as borrow)
 * return books(mark them as available)
 */

enum BookGenre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Biography = "Biography",
  Science = "Science",
  Fantasy = "Fantasy",
  History = "History",
}

type Book = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  genre: BookGenre;
  isAvailable: boolean;
};

const book1 = {
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "9780743273565",
  genre: BookGenre.Fiction,
  isAvailable: true,
};

const book2 = {
  id: 2,
  title: "A Brief History of Time",
  author: "Stephen Hawking",
  isbn: "9780553380163",
  genre: BookGenre.Science,
  isAvailable: false,
};

const book3 = {
  id: 3,
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  isbn: "9780062316097",
  genre: BookGenre.History,
  isAvailable: true,
};

const book4 = {
  id: 4,
  title: "Harry Potter and the Sorcerer’s Stone",
  author: "J.K. Rowling",
  isbn: "9780590353427",
  genre: BookGenre.Fantasy,
  isAvailable: true,
};

const book5 = {
  id: 5,
  title: "The Diary of a Young Girl",
  author: "Anne Frank",
  isbn: "9780553296983",
  genre: BookGenre.Biography,
  isAvailable: false,
};

const libraryBooks: Array<Book> = [];
const borrowedBooks: Array<Book> = [];
const availableBooks: Array<Book> = [];
const books: Map<Number, Book> = new Map();

books.set(1, book1);
books.set(2, book2);
books.set(3, book3);
books.set(4, book4);
books.set(5, book5);

function addToLibrary(book: Book) {
  const existingBook = books.get(book.id); //when i wrote book.get, i got an error message:Property 'get' does not exist on type 'Book'. (ts 2339)
  if (!existingBook) {
    console.log("No book found in the shelf");
    return "No book found in the shelf";
  } else {
    libraryBooks.push(book);
  }
}

function addToBorrowedBooks(book: Book) {
  const existingBook = books.get(book.id);
  if (!borrowedBooks) {
    console.log("The Book has not been borrowed");
    return "The Book has not been borrowed";
  } else {
    borrowedBooks.push(book);
    console.log(`${book.title}has been borrowd`);
  }
}

function toCheckIfBookIsAvailable(book: Book) {
  const existingBook = books.get(book.id);
  if (!existingBook.isAvailable) {
    console.log("the book is not available");
    return "the book is not available";
  } else if (existingBook?.isAvailable) {
    console.log(`${book.title} IS available`);
  } else {
    availableBooks.push(book);
  }
}

function returnBook(book: Book) {
  const availableBooks = books.get(book.id); // when i wrote book.isbn, i got an error
  if (availableBooks?.isbn) {
    console.log();
  }
}

function viewAddedBooks() {
  console.table(libraryBooks);
}

function viewBorrowedBooks() {
  console.table(borrowedBooks);
}

function viewAvailableBooks() {
  console.table(availableBooks);
}
console.log("-----------------------------------------------------");
addToLibrary(book1);
addToLibrary(book2);
addToLibrary(book3);
addToLibrary(book4);
addToLibrary(book5);
viewAddedBooks();

console.log(
  "                                                                            ",
);

addToBorrowedBooks(book1);
viewBorrowedBooks();

console.log(
  "                                                                            ",
);

toCheckIfBookIsAvailable(book1);
viewAvailableBooks();

// git log which shows your commit starting with the most recent
