let library = [];
let container = document.querySelector('.container')
let title = document.querySelector('#title')
let author = document.querySelector('#author')
let pages = document.querySelector('#pages')
let button = document.querySelector('#btn')
let read = document.querySelector('#read')
let form = document.querySelector('form')
let newBookBtn = document.querySelector('#form')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    let alreadyRead = (read)? 'already read' : 'not read yet'
    return title + ' by ' + author + ', ' + pages + ' pages' + ', ' + alreadyRead 
  }
};

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value, read.checked)

  library.push(newBook)

  showBook()
}

function showBook() {
  container.innerHTML = ''
  for (let i = 0; i < library.length; i++) {
    let content = document.createElement('div');
    let text = document.createElement('p');
    text.textContent = library[i].info();
    content.appendChild(text);
    container.appendChild(content);
  }
}

function showForm() {
  form.classList.toggle('hidden');
  btn.classList.toggle('hidden');
}

button.addEventListener('click', addBookToLibrary);

newBookBtn.addEventListener('click', showForm);