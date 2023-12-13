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
}

class Books {
    constructor() {
        this.bookArr = [new Book("Game Of Thrones")]; 
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

bookArray.forEach(renderBooks);

function renderBooks(book) {

}

libraryDOM.addBookBtn.addEventListener("click", addBook);

function addBook() {}
