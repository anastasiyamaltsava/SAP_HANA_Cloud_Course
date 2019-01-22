var books = [];
var moc = new Moc();
var xhr = new XMLHttpRequest();
var booksTable;

function LoadBooks() {

    xhr.open('GET', 'http://localhost:3000/books', false);
    xhr.send();

    var tableBooks = document.getElementById("books");
    var btnAdd = document.getElementById("add");
    btnAdd.setAttribute("onclick", "AddBook()");

    if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
    } else {

        booksTable = JSON.parse(xhr.responseText);

        for (var i = 0; i < booksTable.length; i++) {
            books.push(moc.GetBookFromObject(booksTable[i].data));
            tableBooks.appendChild(GetRowToBookTable(books[i], booksTable[i].id));
        }
    }
}

function Book(title, fieldOfStudy, publisher, bindingType, CD, DVD, author) {

    this.title = title;
    this.fieldOfStudy = fieldOfStudy;
    this.publisher = publisher;
    this.bindingType = bindingType;
    this.CD = CD;
    this.DVD = DVD;
    this.author = author;

    this.getTitle = function () {
        return this.title;
    }

    this.setTitle = function (value) {
        this.title = value;
    }

    this.getFieldOfStudy = function () {
        return this.fieldOfStudy;
    }

    this.setFieldOfStudy = function (value) {
        this.fieldOfStudy = value;
    }

    this.getPublisher = function () {
        return this.publisher;
    }

    this.setPublisher = function (value) {
        this.publisher = value;
    }

    this.getBindingType = function () {
        return this.bindingType;
    }

    this.setBindingType = function (value) {
        this.bindingType = value;
    }

    this.getCD = function () {
        return this.CD;
    }

    this.setCD = function (value) {
        this.CD = value;
    }

    this.getDVD = function () {
        return this.DVD;
    }

    this.setDVD = function (value) {
        this.DVD = value;
    }
    this.getAuthor = function () {
        return this.author;
    }

    this.setAuthor = function (value) {
        this.author = value;
    }

    Book.prototype.toString = function () {
        return "\nTitle: " + this.title + "\nField of study: " + this.fieldOfStudy + "\nPublisher: " + this.publisher + "\nBinding type: " + this.bindingType + " \nCD: " + this.CD + "\nDVD: " + this.DVD + "\nAuthor: " + this.author + "\nOn CD: " + this.onCD + "\nOn DVD: " + this.onDVD;
    }
}

function Moc() {

    this.serialize = function (book){
        return JSON.stringify(book);
    }

    this.deserialize = function (book){
        return JSON.parse(book);
    }

    this.GetBookFromObject = function (some) {
        var book = new Book(some.title, some.fieldOfStudy,
            some.publisher,
            some.bindingType,
            some.CD,
            some.DVD,
            some.author);
        return book;
    }
}

function GetRowToBookTable(book, rowID) {
    var row = document.createElement("tr");
    row.appendChild(GetTD(book.getTitle()));
    row.appendChild(GetTD(book.getFieldOfStudy()));
    row.appendChild(GetTD(book.getPublisher()));
    row.appendChild(GetTD(book.getBindingType()));
    row.appendChild(GetTD(book.getCD()));
    row.appendChild(GetTD(book.getDVD()));
    row.appendChild(GetTD(book.getAuthor()));
    row.appendChild(GetEditTD(rowID));
    row.appendChild(GetDeleteTD(rowID));

    return row;
}

function GetTD(value) {
    var td = document.createElement("td");
    td.innerHTML = value;
    return td;
}

function GetEditTD(rowID) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.innerHTML = "Edit";
    button.setAttribute("onclick", "EditRow(" + rowID + ")");
    td.appendChild(button)
    return td;
}

function GetDeleteTD(rowID) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.innerHTML = "Delete";
    button.setAttribute("onclick", "DeleteRow(" + rowID + ")");
    td.appendChild(button)
    return td;
}

function EditRow(rowID) {
    var a = "form.html";
    rowID = rowID;
    window.location.href = (a + '?rowID=' + rowID + '&&mode=edit');
}

function DeleteRow(rowID) {
    var delRow = confirm("Do you want to delete row?");
    if (delRow) {
        xhr.open('DELETE', 'http://localhost:3000/books/' + rowID);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    }
}

function AddBook() {
    var maxID = 0;
    for (var i = 0; i < booksTable.length; i++) {
        if (maxID < booksTable[i].id)
            maxID = booksTable[i].id;
    }

    var a = "form.html";
    window.location.href = (a + '?rowID=' + ++maxID + '&&mode=add');
}