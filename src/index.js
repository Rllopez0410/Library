import "./index.scss";

const libraryDOM = {
    bookDisplay: document.getElementById("book-display"),
    addBookBtn: document.getElementById("new-book"),
    titleInput: document.getElementById("title"),
    titleError: document.getElementById("title-error"),
    authorInput: document.getElementById("author"),
    authorError: document.getElementById("author-error"),
    pagesInput: document.getElementById("pages"),
    pagesError: document.getElementById("pages-error"),
    bookForm: document.getElementById("form"),
    subBtn: document.getElementById("submit-btn")
};

class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }
    get nameOfBook() {
        return this.name;
    }
    get authorOfBook() {
        return this.author;
    }
    get numOfPages() {
        return this.pages;
    }
}

class Books {
    constructor() {
        this.bookArr = JSON.parse(localStorage.getItem("bookArr")) || [];
    }
    addBookToArray(name, author, pages) {
        let book = new Book(name, author, pages);
        this.bookArr.push(book);
        this.saveBooksToLocalStorage();
        return book;
    }
    changeReadStatus(book) {
        book.read = true;
        this.saveBooksToLocalStorage();
    }
    saveBooksToLocalStorage() {
        localStorage.setItem("bookArr", JSON.stringify(this.bookArr));
    }
    get allBooks() {
        return this.bookArr;
    }
}

let newBook = new Books();
let bookArray = newBook.allBooks;

function renderBooks(book) {
    const newBookDiv = document.createElement("div");
    const dltBtn = document.createElement("button");
    const readBtn = document.createElement("button");
    newBookDiv.textContent = book.nameOfBook + " " + book.authorOfBook + " " + book.numOfPages;
    newBookDiv.classList.add("book");
    dltBtn.textContent = "Delete";
    readBtn.textContent = "Read";
    newBookDiv.append(dltBtn, readBtn);
    libraryDOM.bookDisplay.append(newBookDiv);
    dltBtn.addEventListener("click", (i) => {
        if (bookArray[i] == dltBtn[i]) {
            bookArray.splice(bookArray.indexOf(book), 1);
            newBookDiv.remove();
            dltBtn.remove();
            newBook.saveBooksToLocalStorage();
            console.log(bookArray);
        }
    });
    readBtn.addEventListener("click", (i) => {
        if (bookArray[i] == readBtn[i]) {
            newBook.changeReadStatus(book);
            console.log(bookArray);
        }
    });
}

libraryDOM.addBookBtn.addEventListener("click", addBook);
libraryDOM.subBtn.addEventListener("click", submitBook);

function addBook() {
    libraryDOM.bookForm.style.visibility = "visible";
    console.log("click");
}

function submitBook(e) {
    const title = libraryDOM.titleInput.value;
    const author = libraryDOM.authorInput.value;
    const pages = libraryDOM.pagesInput.value;
    if (libraryDOM.titleInput.validity.valueMissing) {
        libraryDOM.titleError.style.display = "flex";
        e.preventDefault();
    } else { 
        libraryDOM.titleError.style.display = "none"; 
        e.preventDefault();
    }
    if (libraryDOM.authorInput.validity.valueMissing) {
        libraryDOM.authorError.style.display = "flex";
        e.preventDefault();
    } else {
        libraryDOM.authorError.style.display = "none";
        e.preventDefault();
    }
    if (libraryDOM.pagesInput.validity.valueMissing) {
        libraryDOM.pagesError.style.display = "flex";
        e.preventDefault();
    } else {
        libraryDOM.pagesError.style.display = "none";
        e.preventDefault();
    }
    if (libraryDOM.titleInput.validity.valid &&
        libraryDOM.authorInput.validity.valid &&
        libraryDOM.pagesInput.validity.valid) {
        const pushBooks = newBook.addBookToArray(title, author, pages);
        libraryDOM.bookForm.style.visibility = "hidden";
        renderBooks(pushBooks);
        console.log(bookArray);
        e.preventDefault();
    }
}

bookArray.forEach(renderBooks);
