const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toogleRead() {
        if (this.read === true) {
            this.read = false;
        } else {
            this.read = true;
        }
    }
}

const theHobbit = new Book("The Lord of The Ring", "J.R.R Tolkien", 1216, true);
const gameOfThrones = new Book("Game of Thrones", "George R.R. Martin", 694, false);

myLibrary.push(theHobbit);
myLibrary.push(gameOfThrones);

function addBookToLibrary() {
    const title = document.querySelector("#form-title").value;
    const author = document.querySelector("#form-author").value;
    const pages = document.querySelector("#form-pages").value;
    const read = document.querySelector("#form-read").checked;
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    formDialog.close();

    displayBooks(myLibrary);
}

function displayBooks(myLibrary) {
    const bookContainer = document.querySelector(".book-container");
    bookContainer.innerHTML = "";

    myLibrary.forEach((books, index) => {
        const book = document.createElement("div");
        book.classList.add("book");
        book.id = `book-${index}`;
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
        readButton.textContent = `${books.read ? "READ" : "UNREAD"}`;
        if (readButton.textContent === "UNREAD") {
            readButton.style.background = "red";
        }
        deleteButton.innerHTML = `<svg class="delete-icon" width="20px" height="20px" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-alert</title><path d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 15H21V17H19V15M19 7H21V13H19V7Z" /></svg>`
        bookButtons.append(readButton, deleteButton);
        book.append(bookTitle, bookAuthor, bookPages, bookButtons);
        bookContainer.appendChild(book);

        readButton.addEventListener("click", () => {
            readBook(index);
        })

        deleteButton.addEventListener("click", () => {
            deleteBook(index);
        })

    })
}

function readBook(index) {
    let book = document.getElementById(`book-${index}`).getElementsByTagName("button");
    let readButton = book[0];
    if (readButton.textContent === "READ") {
        readButton.textContent = "UNREAD";
        readButton.style.background = "red";
    } else {
        readButton.textContent = "READ";
        readButton.style.background = "#007bff";
    }
    myLibrary[index].toogleRead();

}

function deleteBook(index) {
    let book = document.getElementById(`book-${index}`);
    if (book) {
        book.remove();
    }

    myLibrary.splice(index, 1);
}

const addButton = document.querySelector(".add-button");
const formDialog = document.querySelector("#formDialog")
addButton.addEventListener("click", () => {
    formDialog.showModal();
})

const closeDialog = document.getElementById('closeDialog');
closeDialog.addEventListener('click', () => {
    formDialog.close();
    form.reset()
});

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
    form.reset()
});

displayBooks(myLibrary);