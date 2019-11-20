class DomElements {
  constructor() {
    this.submitButton = document.querySelector('.form--js');
    this.inputTitle = document.querySelector('.input__title--js');
    this.inputAuthor = document.querySelector('.input__author--js');
    this.inputISBN = document.querySelector('.input__isbn--js');
    this.information = document.querySelector('.information--js');
    this.tableBody = document.querySelector('.table__tbody--js');
    this.removeButtons = null;
  }

  addToTableBody(arr) {
    this.tableBody.textContent = '';

    arr.forEach((element) => {
      const newElement = `<tr class="table__row">
      <td class="table__cell table__cell--title">${element.title}</td>
      <td class="table__cell table__cell--author">${element.author}</td>
      <td class="table__cell table__cell--isbn">${element.isbn}</td>
      <td class="table__cell table__cell--btn">
        <button class="table__button" id="${element.id}">remove</button>
      </td>
    </tr>`;

      this.tableBody.innerHTML += newElement;
    });
  }

  checkInputs() {
    if (this.inputTitle.value === '' || this.inputAuthor.value === '' || this.inputISBN.value === '') {
      displayInformation(this.information, 'red', 'Please fill inn all empty fields');
      clearInformationTimeOut(this.information);

      return false;
    } else {
      // clearInformation(this.information);
      return true;
    }
  }

  bookAdded() {
    displayInformation(this.information, 'green', 'Book has been added to list');
    clearInformationTimeOut(this.information)
  }

  clearInputs() {
    this.inputTitle.value = '';
    this.inputAuthor.value = '';
    this.inputISBN.value = '';
  }

  getTitle() {
    return this.inputTitle.value;
  }

  getAuthor() {
    return this.inputAuthor.value;
  }

  getIsbn() {
    return this.inputISBN.value;
  }
}

const displayInformation = (element, color, message) => {
  element.style.visibility = 'visible'
  element.style.backgroundColor = color;
  element.textContent = message;
}

const clearInformation = (element) => {
  element.style.visibility = 'hidden';
}

const clearInformationTimeOut = (element) => {
  setTimeout(() => {
    clearInformation(element);
  }, 3000);
}

export default DomElements;