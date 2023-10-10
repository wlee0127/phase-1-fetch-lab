function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => {renderBooks(books)})  
}
/*
async function fetchBooks() {
  let books =[];
  const response = await fetch("https://anapioficeandfire.com/api/books");
  const data = await response.json();
  extractName(data,books);
  renderBooks(books);
}
*/
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function extractName(data,books){
  for (const element of data){
    books.push(element.name);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
