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
}

function AudioBook(duration) {
    Book.call(this);
    this.duration = duration;

    this.getDuration = function () {
        return this.duration;
    }

    this.setDuration = function (value) {
        this.duration = value;
    }
}

function TextBook(pages) {
    Book.call(this);
    this.pages = pages;

    this.getPages = function () {
        return this.pages;
    }

    this.setPages = function (value) {
        this.pages = value;
    }
}

function Moc() {

    this.serialize = function (book){
        return JSON.stringify(book);
    }

    this.deserialize = function (book){
        return JSON.parse(book);
    }
}

var book = new Book("War and Peace", "novel", "Modern Library", true, true, true, "Tolstoy");
var moc = new Moc();
console.log(moc.serialize(book));

var bookDeserialize = moc.deserialize(moc.serialize(book));
console.log(bookDeserialize);

var textBook = new TextBook(1225);
textBook.setTitle(book.getTitle());
textBook.setFieldOfStudy(book.getFieldOfStudy());
textBook.setPublisher(book.getPublisher());
textBook.setBindingType(book.getBindingType());
textBook.setCD(book.getCD());
textBook.setDVD(book.getDVD());
textBook.setAuthor(book.getAuthor());
console.log(moc.serialize(textBook));

var textBookDeserialize =  moc.deserialize(moc.serialize(textBook));
console.log(textBookDeserialize);

var audioBook = new AudioBook(3666);
audioBook.setTitle(book.getTitle());
audioBook.setFieldOfStudy(book.getFieldOfStudy());
audioBook.setPublisher(book.getPublisher());
audioBook.setBindingType(book.getBindingType());
audioBook.setCD(book.getCD());
audioBook.setDVD(book.getDVD());
audioBook.setAuthor(book.getAuthor());
console.log(moc.serialize(audioBook));

var audioBookDeserialize =  moc.deserialize(moc.serialize(audioBook));
console.log(audioBookDeserialize);