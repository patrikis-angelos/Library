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
    let alreadyRead = (this.read)? 'already read' : 'not read yet'
    return title + ' by ' + author + ', ' + pages + ' pages' + ', ' + alreadyRead 
  }
};

function addBookToLibrary() {
  let newBook = new Book(title.value, author.value, pages.value, read.checked)

  library.push(newBook)

  showBooks()
}

function showBooks() {
  container.innerHTML = ''
  for (let i = 0; i < library.length; i++) {
    let content = document.createElement('div');
    content.setAttribute("id", i);
    let text = document.createElement('p');
    text.textContent = library[i].info();

    let removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', removeBook);
    removeBtn.textContent = 'Remove';

    let changeReadBtn = document.createElement('button');
    changeReadBtn.addEventListener('click', changeRead);
    changeReadBtn.textContent = 'Readed?'

    content.appendChild(text);
    content.appendChild(changeReadBtn);
    content.appendChild(removeBtn);
    container.appendChild(content);
  }
}

function showForm() {
  form.classList.toggle('hidden');
  btn.classList.toggle('hidden');
}

function removeBook() {
  id = this.parentNode.id;
  library.splice(id, 1);
  showBooks()
}

function changeRead() {
  id = this.parentNode.id;
  let para = this.parentNode.querySelector('p');
  library[id].read = !library[id].read;
  para.innerHTML = library[id].info();
}

button.addEventListener('click', addBookToLibrary);

newBookBtn.addEventListener('click', showForm);