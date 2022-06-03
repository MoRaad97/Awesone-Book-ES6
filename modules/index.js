import Books, {} from './books.js';
import CreatBook, {} from './createbook.js';
import Store, {} from './store.js';

// display books
document.addEventListener('DOMContentLoaded', CreatBook.displayBooks);

// =============================================================
// Add book

document.getElementById('book-form').addEventListener('submit', (event) => {
  // preventDefault
  event.preventDefault();
  // get values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  // create New book

 const book = new Books(title, author, Date.now());

  // Add book to the page
  CreatBook.createBookElements(book);

  // Add book to local storage
  Store.addBook(book);
  // clear the fields
  CreatBook.clearfields();
});

// =============================================================
// Remove book

document.querySelector('.books').addEventListener('click', (e) => {
  Store.removeBook(e.target.getAttribute("id"));
  CreatBook.delete(e.target);
});

// Display Pages Functions
CreatBook.openListPage();
CreatBook.openAddPage();
CreatBook.openContactPage();

// Date and Time

CreatBook.dateTime();
