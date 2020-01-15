function Book(title, author, year) {
    this.id = Math.round(Math.random() * 1000000);
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;

    this.changeAvailability = function () {
        this.isAvailable = !this.isAvailable;
    }
}


const booksDb = {
    books: [],

    generateBooks: function () {
        for (let i = 0; i < 10; i++) {
            this.addBook(new Book(`Book${i}`, `Author${i}`, 1990 + (i * 2)));
        }
    },

    getBooks: function () {
        return this.books;
    },

    getBookById: function (id) {
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book.id === id) {
                return book;
            }
        }
        return null;
    },

    addBook: function (book) {
        let oldLenght = this.books.length;
        this.books.push(book);
        return oldLenght !== this.books.length;
    },

    deleteBook: function (id) {
        let indexForRemoval = -1;
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if (book.id === id) {
                indexForRemoval = i;
                break;
            }
        }
        if (indexForRemoval === -1) {
            return null;
        }
        let deletedBook = this.books.splice(indexForRemoval, 1);
        return deletedBook[0];
    }
}

booksDb.generateBooks();

const booksService = {
    showBooks: function (books, htmlElement) {
        htmlElement.innerHTML = '';
        for (const book of books) {
            let li = document.createElement('li');
            if (book.isAvailable) {
                li.style.color = 'green';
            } else {
                li.style.color = 'red';
            }
            li.innerHTML = `Id: ${book.id}<br>
                        Title: ${book.title}<br>
                        Author: ${book.author}<br>
                        Year: ${book.year}`;
            htmlElement.appendChild(li);
        }
    },

    searchAuthorByLetter: function (letter, books) {
        let filteredBooks = [];
        for (const book of books) {
            if (book.author.toLowerCase().startsWith(letter.toLowerCase())) {
                filteredBooks.push(book);
            }
        }
        return filteredBooks;
    },

    searchAuthor: function (author, books) {
        let filteredBooks = [];
        for (const book of books) {
            if (book.author.toLowerCase().includes(author.toLowerCase())) {
                filteredBooks.push(book);
            }
        }
        return filteredBooks;
    },

    searchByYear: function (fromYear, toYear, books) {
        let filteredBooks = [];
        for (const book of books) {
            if (book.year >= parseInt(fromYear)
                && book.year <= parseInt(toYear)) {
                filteredBooks.push(book);
            }
        }
        return filteredBooks;
    },

    handleInfoMessage: function (message) {
        const infoMessage = document.getElementById("info-message");
        infoMessage.innerText = '';
        infoMessage.innerText = message;

        this.clearMessageText(infoMessage);
    },

    clearMessageText: function (htmlElement) {
        setTimeout(function () {
            htmlElement.innerText = '';
        }, 2000);
    }
}

// Html elements that are reusable

let showItemList = document.getElementById("books");
let bookIdElement = document.getElementById("bookId");

// EVENTS 

document
    .getElementById("showBooks")
    .addEventListener("click", function () {
        booksService.showBooks(booksDb.getBooks(), showItemList);
    });

document
    .getElementById("save-btn")
    .addEventListener("click", function () {
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let year = document.getElementById("year").value;

        let book = new Book(title, author, year);
        let isAdded = booksDb.addBook(book);
        if (isAdded) {
            booksService.handleInfoMessage(`Successfuly added book ${book.title}`);
        } else {
            booksService.handleInfoMessage(`An error has occured while trying to add book`);
        }
        booksService.showBooks(booksDb.getBooks(), showItemList);
    });

document
    .getElementById("lend-btn")
    .addEventListener("click", function () {
        let id = parseInt(bookIdElement.value);
        let book = booksDb.getBookById(id);
        if (!book) {
            booksService.handleInfoMessage(`Book with id ${id} was not found`);
        } else {
            book.changeAvailability();
        }
        booksService.showBooks(booksDb.getBooks(), showItemList);
    });

document
    .getElementById("delete-btn")
    .addEventListener("click", function () {
        let id = parseInt(bookIdElement.value);
        let book = booksDb.deleteBook(id);
        if (book) {
            booksService.handleInfoMessage(`Successfuly deleted book ${book.title}`);
        } else {
            booksService.handleInfoMessage(`An error has occured while trying to delete book`);
        }
        booksService.showBooks(booksDb.getBooks(), showItemList);
    });


document
    .getElementById("letter-btn")
    .addEventListener("click", function () {
        let searchByLetter = document.getElementById("letter-search").value;
        let filteredBooks = booksService
            .searchAuthorByLetter(searchByLetter, booksDb.getBooks());
        if (filteredBooks.length === 0) {
            booksService.handleInfoMessage(`No books was found with ${searchByLetter} phrase`);
            return;
        }
        booksService.showBooks(filteredBooks, showItemList);
    });

document
    .getElementById("search-btn")
    .addEventListener("click", function () {
        let searchInput = document.getElementById("search").value;
        let filteredBooks = booksService
            .searchAuthor(searchInput, booksDb.getBooks());
        if (filteredBooks.length === 0) {
            booksService.handleInfoMessage(`No books was found with ${searchInput} phrase`);
            return;
        }
        booksService.showBooks(filteredBooks, showItemList);
    });

document
    .getElementById("year-btn")
    .addEventListener("click", function () {
        let from = document.getElementById("year-from").value;
        let to = document.getElementById("year-to").value;
        let filteredBooks = booksService
            .searchByYear(from, to, booksDb.getBooks());
        if (filteredBooks.length === 0) {
            booksService.handleInfoMessage(`No books was found from ${from} to ${to}`);
            return;
        }
        booksService.showBooks(filteredBooks, showItemList);
    })
