var mode = "";
var book = new Book();
var moc = new Moc();
var rowID = 0;

var xhr = new XMLHttpRequest();

function Start() {
    
    var btnSave = document.getElementById("save");
    btnSave.setAttribute("onclick", "UpdateData()");

    var btnBack = document.getElementById("back");
    btnBack.setAttribute("onclick", "GoBack()");

    var url_string = window.location.href;
    var url = new URL(url_string);
    rowID = url.searchParams.get("rowID");
    mode = url.searchParams.get("mode");
    console.log(rowID + " " + mode);

    LoadDataToForm(rowID);
}


function LoadDataToForm(rowID) {
    if (mode === "edit") {
        console.log("edit mode ..." + rowID);

        var urlGetBook = ('http://localhost:3000/books/').concat(rowID);
        console.log(urlGetBook);

        xhr.open('GET', urlGetBook, false);
        xhr.send();

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {

            var bookTableElement = JSON.parse(xhr.responseText);

            book = moc.GetBookFromObject(bookTableElement.data);
            console.log(book);

            UpBootToForm(book);

        }
    }
}

function UpBootToForm(_book) {
    var title = document.getElementById("book_title");
    var fieldOfStudy = document.getElementById("book_fieldOfStudy");
    var publisher = document.getElementById("book_publisher");
    // var bindingType = document.getElementById("book_publisher");
    // var avaliability = document.getElementById("book_avliability");
    var author = document.getElementById("book_author");
    var CD = document.getElementById("book_CD");
    var DVD = document.getElementById("book_DVD");

    var radios = document.getElementsByName('book_binding');

    title.value = _book.getTitle();
    fieldOfStudy.value = _book.getFieldOfStudy();
    // pagesCount.value = _book.getPagesCount();
    publisher.value = _book.getPublisher();
    // avaliability.value = _book.getAvaliability();
    author.value = _book.getAuthor();
    CD.checked = _book.getCD();
    DVD.checked = _book.getDVD();

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].value.toUpperCase() == _book.getBindingType().toUpperCase()) {
            radios[i].checked = true;
            console.log("Select ragio " + _book.getBindingType());
            break;
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

function UpdateData() {

    UpdateBookData();

    var DataToUpdate = function (_id, _data) {
        this.id = _id;
        this.data = _data;
    }

    var dataToUpdate = new DataToUpdate(rowID, book);

    if (mode === "edit")
    {
        xhr.open('PUT', 'http://localhost:3000/books/' + rowID);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(dataToUpdate));

        alert("Update row");
    }
    else if (mode === "add")
    {
        xhr.open('POST', 'http://localhost:3000/books');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(dataToUpdate));

        alert("Add new row");
    }
    else
    {
        alert('Error: incorent MODE of work');
    }

    GoBack();
}

function UpdateBookData() {
    var title = document.getElementById("book_title").value;
    var field = document.getElementById("book_fieldOfStudy").value;
    var publisher = document.getElementById("book_publisher").value;
    var bindingType = "";
    var author = document.getElementById("book_author").value;
    var CD = document.getElementById("book_CD").checked;
    var DVD = document.getElementById("book_DVD").checked;

    var radios = document.getElementsByName('book_binding');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            bindingType = radios[i].value;
            break;
        }
    }

    book = new Book(title, field, publisher, bindingType, CD, DVD, author);
}

function GoBack()
{
    window.location.href = "index.html";
}