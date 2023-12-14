import "./index.scss";

const libraryDOM = {
    bookDisplay: document.getElementById("book-display"),
    addBookBtn: document.getElementById("new-book"),
    titleInput: document.getElementById("title"),
    authorInput: document.getElementById("author"),
    pagesInput: document.getElementById("pages"),
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
        this.bookArr = [new Book("Game Of Thrones", "Someone", 300, false), new Book("Something", "Someone", 300, false)]; 
    }
    addBookToArray(name) {
        let book = new Book(name);
        this.bookArr.push(book);
        return book;
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
    const readBtn= document.createElement("button");
    newBookDiv.textContent = book.nameOfBook + " " + book.authorOfBook + " " + book.numOfPages;
    newBookDiv.classList.add("book");
    dltBtn.textContent = "Delete";
    readBtn.textContent = "Read";
    newBookDiv.append(dltBtn, readBtn);
    libraryDOM.bookDisplay.append(newBookDiv);
}

libraryDOM.addBookBtn.addEventListener("click", addBook);
libraryDOM.subBtn.addEventListener("click", submitBook);

function addBook() {
    libraryDOM.bookForm.style.visibility = "visible";
    console.log("click");
}

function submitBook() {
    const title = libraryDOM.titleInput.value;
    // const author = libraryDOM.authorInput.value;
    // const pages = libraryDOM.pagesInput.value;
    let pushBooks = newBook.addBookToArray(title);
    renderBooks(pushBooks);
    console.log(bookArray);
    e.preventDefault();
}

bookArray.forEach(renderBooks);