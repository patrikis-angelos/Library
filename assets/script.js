let library = [];
const container = document.querySelector('.container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const button = document.querySelector('#btn');
const read = document.querySelector('#read');
const form = document.querySelector('form');
const newBookBtn = document.querySelector('#form');

const Book = (title, author, pages, read) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getRead = () => read;
  const alreadyRead = () => (read ? 'already read' : 'not read yet');

  const info = () => `${getTitle()} by ${getAuthor()}, ${getPages()} pages, ${alreadyRead()}`;

  const changeRead = () => {
    read = !read;
  };

  return {
    info, changeRead, getTitle, getAuthor, getPages, getRead,
  };
};

function saveLibrary() {
  const temp = [];
  for (let i = 0; i < library.length; i += 1) {
    const info = [
      library[i].getTitle(),
      library[i].getAuthor(),
      library[i].getPages(),
      library[i].getRead()];
    temp.push(info);
  }
  localStorage.lib = JSON.stringify(temp);
}

function removeBook() {
  const { id } = this.parentNode;
  library.splice(id, 1);
  saveLibrary();
  showBooks(); // eslint-disable-line
}

function bookRead() {
  const { id } = this.parentNode;
  const para = this.parentNode.querySelector('p');
  library[id].changeRead();
  para.innerHTML = library[id].info();
  saveLibrary();
}

function showBooks() {
  container.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    const content = document.createElement('div');
    content.setAttribute('id', i);
    const text = document.createElement('p');
    text.textContent = library[i].info();

    const removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', removeBook);
    removeBtn.textContent = 'Remove';

    const changeReadBtn = document.createElement('button');
    changeReadBtn.addEventListener('click', bookRead);
    changeReadBtn.textContent = 'Readed?';

    content.appendChild(text);
    content.appendChild(changeReadBtn);
    content.appendChild(removeBtn);
    container.appendChild(content);
  }
}

function addBookToLibrary() {
  const newBook = Book(title.value, author.value, pages.value, read.checked);

  library.push(newBook);

  saveLibrary();
  showBooks();
}

function showForm() {
  form.classList.toggle('hidden');
  button.classList.toggle('hidden');
}

function loadLibrary() {
  const temp = JSON.parse(localStorage.lib);
  const books = [];
  for (let i = 0; i < temp.length; i += 1) {
    books.push(Book(temp[i][0], temp[i][1], temp[i][2], temp[i][3]));
  }
  return books;
}

if (localStorage.lib) {
  library = loadLibrary();
  showBooks();
}

button.addEventListener('click', addBookToLibrary);

newBookBtn.addEventListener('click', showForm);