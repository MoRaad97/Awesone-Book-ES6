import Store, {} from './store.js';
import { DateTime } from './luxon.js';
// global values
const listSection = document.querySelector('.list-section');
const addSection = document.querySelector('.add-section');
const contactSection = document.querySelector('.contact-section');

export default class CreatBook {
  // variables
    // display books
    static displayBooks = () => {
      const books = Store.getBooks();
      // localStorage.clear();
      if (books !== null) {
        books.forEach((book) => CreatBook.createBookElements(book));
      }
      // no books found
    }

    // creat books and add them in the UI

    static createBookElements = (book) => {
      const bookContainer = document.querySelector('.books');
      const bookDiv = document.createElement('div');
      const bookName = document.createElement('h2');
      const authorName = document.createElement('h2');
      const btn = document.createElement('button');
      btn.classList.add('delete');
      btn.setAttribute('id', book.id);
      bookDiv.classList.add('container');

      // Fill the elements
      bookName.innerText = book.title;
      authorName.innerText = book.author;
      btn.innerHTML = 'Delete';

      // For showing the above staff in browser we have to append them
      bookDiv.append(bookName, authorName, btn);

      // This div must also append to some where in HTML so
      bookContainer.appendChild(bookDiv);
    }

    static openListPage = () => {
      const bookList = document.getElementById('list');
      bookList.addEventListener('click', () => {
        addSection.classList.add('hidden');
        listSection.classList.remove('hidden');
        contactSection.classList.add('hidden');
      });
    }

    static openAddPage = () => {
      const bookList = document.getElementById('add');
      bookList.addEventListener('click', () => {
        addSection.classList.remove('hidden');
        listSection.classList.add('hidden');
        contactSection.classList.add('hidden');
      });
    }

    static openContactPage = () => {
      const bookList = document.getElementById('contact');
      bookList.addEventListener('click', () => {
        addSection.classList.add('hidden');
        listSection.classList.add('hidden');
        contactSection.classList.remove('hidden');
      });
    }

    // remove logic
    static delete = (el) => {
      if (el.classList.contains('delete')) {
        el.parentElement.remove();
      }
    }

    // clear fields
    static clearfields = () => {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }

    // data and time
    static dateTime = () => {
      setInterval(() => {
        const dateTimeDiv = document.getElementById('time-date');
        dateTimeDiv.innerText = DateTime.now().toLocaleString(DateTime.DATETIME_HUGE);
      }, 500);
    }
}