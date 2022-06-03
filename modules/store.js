export default class Store {
    static bookLocalStorage = () => JSON.parse(localStorage.getItem('books'))

    static getBooks = () => Store.bookLocalStorage()

    static addBook = (book) => {
      const books = Store.bookLocalStorage() ? Store.bookLocalStorage() : [];
      if (Array.isArray(books)) {
        books.push(book);
      }
      localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook = (bookId) => {
      let books = Store.getBooks();
      // eslint-disable-next-line
      books = books.filter((book) => book.id != bookId);
      localStorage.setItem('books', JSON.stringify(books));
    }
}