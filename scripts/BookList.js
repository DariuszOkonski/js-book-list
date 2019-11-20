class BookList {
  constructor() {
    // this.bookList = [];
    this.bookList = [{
        id: 1,
        title: 'book1',
        author: 'author1',
        isbn: '123'
      },
      {
        id: 2,
        title: 'book2',
        author: 'author2',
        isbn: '123'
      },
      {
        id: 3,
        title: 'book3',
        author: 'author3',
        isbn: '123'
      },
    ];
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