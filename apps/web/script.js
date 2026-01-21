const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

const API_URL = "http://127.0.0.1:8000/api/books/";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const bookData = {
    book_name: document.getElementById("book_name").value,
    author_name: document.getElementById("author_name").value,
    release_year: document.getElementById("release_year").value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookData)
  });

  form.reset();
  loadBooks();
});

async function loadBooks() {
  const response = await fetch(API_URL);
  const books = await response.json();

  bookList.innerHTML = "";

  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.book_name} by ${book.author_name} (${book.release_year})`;
    bookList.appendChild(li);
  });
}

loadBooks();
