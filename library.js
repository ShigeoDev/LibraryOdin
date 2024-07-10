class Book {
  constructor(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
  };
}

let books = JSON.parse(localStorage.getItem('books')) || [];

document.querySelector('.book').addEventListener('click', () => {

  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const pagesInput = document.querySelector('#pages');
  const finishedInput = document.querySelector('#read');

  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  finished = finishedInput.checked;

  if (!title || !author || !pages) {
    alert('Missing Required Field');
  }
  else {

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    finishedInput.checked = false;

    books.push(new Book(title, author, pages, finished));

    loadbooks();
    saveToStorage();
  }

});

document.querySelector('.clear').addEventListener('click', () => {
  books = [];
  localStorage.clear();
  loadbooks();
})

function loadbooks() {
  table = `
      <div class="row">
        <div class="cell title-cell">Title</div>
        <div class="cell author-cell">Author</div>
        <div class="cell pages-cell">Pages</div>
        <div class="cell finished-cell">Finished</div>
      </div>

`;
  books.forEach((book) => {
    table +=
      `
      <div class="row">
        <div class="cell title-cell">${book.title}</div>
        <div class="cell author-cell">${book.author}</div>
        <div class="cell pages-cell">${book.pages}</div>
        <div class="cell finished-cell">${book.finished ? 'Yes' : 'No'}</div>
      </div>

      `
  });
  document.querySelector('.table').innerHTML = table;

};

function saveToStorage() {
  localStorage.setItem('books', JSON.stringify(books));
  console.log('test')
}

loadbooks()
