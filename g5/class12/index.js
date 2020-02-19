//Old way

// function Car(tires, color, seats, gear)
// {
//     this.tires = tires;
//     this.color = color;
//     this.seats = seats;
//     this.gear = gear;

//     this.getCarColor = function()
//     {
//         return this.color;
//     }
// }

// let car1 = new Car(4, 'yellow', 5, 'MT');
// car1.getCarColor();

// Car.prototype.getNumOfTyres = function(){
//     return this.tires;
// }

// let car2 = new Car(4, 'red', 5, 'AT');
// car2.getNumOfTyres();

// //New way

// class Car
// {
//     constructor(tires, color, seats, gear)
//     {
//         this.tires = tires;
//         this.color = color;
//         this.seats = seats;
//         this.gear = gear;
//     }

//     getCarColor()
//     {
//         return this.color;
//     }

//     get gearOfCar()
//     {
//         return this.gear;
//     }
// }

//car1.gearOfCar;


/*
    #1. Create classes for library (Book, Author)
        Book should have: name, genre, authorID, comments
        Author should have: name, popularity

    #2. Create a link between these two classes.

    #3. Create couple of authors (new instances)

    #4. Create couple of books with authors (new instances)
*/

class Library
{
    constructor()
    {
        this.books = [];
        this.authors = [];
    }

    getAllBooks()
    {
        return this.books;
    }

    getAllAuthors()
    {
        return this.authors;
    }

    addNewBook(book)
    {
        this.books.push(book);
    }

    addNewAuthor(author)
    {
        this.authors.push(author);
    }
}

let l = new Library();

class Book
{
    constructor()
    {
        this.name;
        this.genre;
        this.authorID;
        this.comments;
    }

    set bookName(name)
    {
        if(name.length > 20)
        this.bookName = name;
        else
        alert('Name too short');
    }

    set bookGenre(genre)
    {
        this.genre = genre;
    }

    set bookAuthor(authorID)
    {
        if(l.getAllAuthors().indexOf(authorID) > -1)
        this.authorID = authorID;
        else
        alert(`This author doesn't exist`);
    }

    set bookComments(comments)
    {
        this.comments = comments;
    }
}

class Author
{
    constructor()
    {
        this.name;
        this.popularity;
    }

    setAuthor(name, popularity)
    {
        this.name = name;
        this.popularity = popularity;
    }
}

function resetAutor()
{
    return new Author();
}

function resetBook()
{
    return new Book();
}

let author = new Author();
//somewhere from a form I get the values
author.setAuthor('Petko', 4);

l.addNewAuthor(author);
author = resetAutor();

let book1 = new Book();
//book1.addBookDetails(name, genre, authorID, comments);
book1.bookName = 'Name';
book1.bookGenre = ['Drama', 'Sci-Fi'];
book1.authorID = 1;
book1.comments = ['comment1', 'comment2'];

l.addNewBook(book1);
book1.resetBook();
