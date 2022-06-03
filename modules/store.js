export default class Store {
    static bookLocalStorage = () => {
      return JSON.parse(localStorage.getItem('books'));
    }
  
    static getBooks = () => {
      return Store.bookLocalStorage();
    }
  
    static addBook = (book) => {
      const books = Store.bookLocalStorage() ? Store.bookLocalStorage() : [];
      if (Array.isArray(books)) {
        books.push(book);
      }
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removeBook = (bookId) => {
      let books = Store.getBooks();
        books = books.filter((book) => book.id != bookId);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }