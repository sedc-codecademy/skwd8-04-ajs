function Book(title, author, year) {
    this.id = Math.round(Math.random() * 1000000);
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
    this.changeAvailability = function () {
        this.isAvailable = !this.isAvailable
    };
}

// BooksAppWithoutObjects

function showBooks(books, el) {
    el.innerHTML = "";
    for (const book of books) {
        let li = document.createElement("li");
        if (book.isAvailable) {
            li.style.color = "green";
        }
        else {
            li.style.color = "red";
        }
        li.innerHTML = `Id: ${book.id}<br>
            Title: ${book.title}<br>
            Author: ${book.author}<br>
            Year: ${book.year}`
        el.appendChild(li);
    }
}

function searchAuthorByLetter(letter) {
    let filteredBooks = [];
    for (const book of books) {
        if (book.author.toLowerCase().startsWith(letter.toLowerCase())) {
            filteredBooks.push(book);
        }
    }
    return filteredBooks;
}

function searchAuthor(text) {
    let filteredBooks = [];
    for (const book of books) {
        if (book.author.toLowerCase().includes(text.toLowerCase())) {
            filteredBooks.push(book);
        }
    }
    return filteredBooks;
}

function searchByYear(fromYear, toYear) {
    if (!fromYear)
        fromYear = 0
    if (!toYear)
        toYear = new Date().getFullYear()

    let filteredBooks = [];
    for (const book of books) {
        if ((book.year >= parseInt(fromYear)) &&
            (book.year <= parseInt(toYear))) {

            filteredBooks.push(book);
        }
    }
    return filteredBooks;
}

let books = [];

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let year = document.querySelector("#year");
let saveBtn = document.querySelector("#save-btn");

let bookList = document.querySelector("#books");

let bookId = document.querySelector("#bookId");
let lendBtn = document.querySelector("#lend-btn");

let deleteBtn = document.querySelector("#delete-btn");

let searchLetter = document.querySelector("#letter-search");
let letterBtn = document.querySelector("#letter-btn");

let fromYear = document.querySelector("#year-from");
let toYear = document.querySelector("#year-to");
let yearBtn = document.querySelector("#year-btn");

let searchInput = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");

saveBtn.addEventListener("click", function () {
    let book = new Book(title.value, author.value, parseInt(year.value));
    books.push(book);
    showBooks(books, bookList);
});

lendBtn.addEventListener("click", () => {
    for (const book of books) {
        if (book.id === parseInt(bookId.value)) {
            book.changeAvailability();
            showBooks(books, bookList);
        }
    }
})

deleteBtn.addEventListener("click", () => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (book.id === parseInt(bookId.value)) {
            books.splice(i, 1);
            showBooks(books, bookList);
        }
    }
})

letterBtn.addEventListener("click", () => {
    let filteredBooks = searchAuthorByLetter(searchLetter.value);
    showBooks(filteredBooks, bookList);
});

searchBtn.addEventListener("click", () => {
    let filteredBooks = searchAuthor(searchInput.value);
    showBooks(filteredBooks, bookList);
});

yearBtn.addEventListener("click", () => {
    let filteredBooks = searchByYear(fromYear.value, toYear.value);
    showBooks(filteredBooks, bookList);
})