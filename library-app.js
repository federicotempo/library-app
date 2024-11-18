const myLibrary = [];

const theHobbit = new Book("The Lord of The Ring", "J.R.R Tolkien", 1216, true);
const gameOfThrones = new Book("Game of Thrones", "George R.R. Martin", 694, true);

myLibrary.push(theHobbit);
myLibrary.push(gameOfThrones);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks(myLibrary) {

    myLibrary.forEach((books) => {
        const bookContainer = document.querySelector(".book-container");
        const book = document.createElement("div");
        book.classList.add("book");
        const bookTitle = document.createElement("h4");
        bookTitle.classList.add("book-title");
        const bookAuthor = document.createElement("h5");
        bookAuthor.classList.add("book-author");
        const bookPages = document.createElement("h5");
        bookPages.classList.add("book-pages");
        const bookButtons = document.createElement("div")
        bookButtons.classList.add("book-buttons");
        const readButton = document.createElement("button");
        readButton.classList.add("read-button");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        bookTitle.innerHTML = `Book:<br> ${books.title}`;
        bookAuthor.innerHTML = `Author:<br> ${books.author}`;
        bookPages.innerHTML = `Pages:<br> ${books.pages}`;
        readButton.textContent = `${books.read ? "READ" : "NOT READ"}`;
        deleteButton.innerHTML = `<svg class="delete-icon" width="20px" height="20px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-alert</title><path d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 15H21V17H19V15M19 7H21V13H19V7Z" /></svg>`
        bookButtons.append(readButton, deleteButton);
        book.append(bookTitle, bookAuthor, bookPages, bookButtons);
        bookContainer.appendChild(book);
        
    })
}

displayBooks(myLibrary);
