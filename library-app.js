const myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 1216, true);
const gameOfThrones = new Book("Game of Thrones", "George R.R. Martin", 694, true);

myLibrary.push(theHobbit);
myLibrary.push(gameOfThrones);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


