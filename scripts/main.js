import Book from './Book.js';
import DomElements, {
  displayInformation,
  clearInformationTimeOut
} from './DomElements.js';
import BookList from './BookList.js';

const dom = new DomElements();
const bookList = new BookList();

if (bookList.getList().length > 0) {
  dom.addToTableBody(bookList.getList());
  findRemoveButtons();
}
// console.log(bookList.getList());

//====================================================
function findRemoveButtons() {
  dom.removeButtons = document.querySelectorAll('.table__button');
  dom.removeButtons.forEach(el => {
    el.addEventListener('click', removeElementFromList);
  })
}

function removeElementFromList() {
  const indexToFind = Number(this.id);
  bookList.setList(bookList.getList().filter(el => el.id !== indexToFind));
  dom.addToTableBody(bookList.getList());
  displayInformation(dom.information, 'blue', 'Element has been removed from book list');
  clearInformationTimeOut(dom.information);
  findRemoveButtons();
}


//====================================================
const submitBook = (e) => {
  e.preventDefault();

  if (!dom.checkInputs())
    return;

  const newBook = new Book(bookList.getUniqeID(), dom.getTitle(), dom.getAuthor(), dom.getIsbn());
  dom.clearInputs();

  bookList.addBook(newBook)
  dom.bookAdded();
  dom.addToTableBody(bookList.getList());

  findRemoveButtons();
  console.log('Working===================: ')
}

dom.submitButton.addEventListener('submit', submitBook);