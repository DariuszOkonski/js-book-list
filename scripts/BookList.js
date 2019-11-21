class BookList {
  constructor() {
    this.bookList = [];
  }

  addBook(newBook) {
    this.bookList.push(newBook);
  }

  getUniqeID() {
    return Math.floor(new Date().getUTCMilliseconds() * Math.random() * 1000000);
  }

  getList() {
    return this.bookList;
  }

  setList(newList) {
    this.bookList = newList;
  }
}

export default BookList;