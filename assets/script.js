let library = [];
let container = document.querySelector('.container')
let title = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#pages')
let button = document.querySelector('#btn')
let read = document.querySelector('#read').checked

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let alreadyRead = (read)? 'already read' : 'not read yet'
    return title + ' by ' + author + ' ' + pages + ' pages'
  }
};

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value, read)

  library.push(newBook)

  showBook()
}

function showBook() {
  container.innerHTML = ''
  for (let i = 0; i < library.length; i++) {
    let content = document.createElement('div')
    let text = document.createElement('p')
    text.textContent = library[i].info()
    content.appendChild(text)
    container.appendChild(content)
  }
}

button.addEventListener('click', addBookToLibrary)

