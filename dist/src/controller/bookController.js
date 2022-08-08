"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("../model/book");
class BookController {
    constructor() {
        this.showListBook = async (req, res) => {
            let bookData = await book_1.Book.find();
            res.render('book/list', {
                books: bookData
            });
        };
        this.showCreateBook = (req, res) => {
            res.render('book/createBook');
        };
        this.createBook = async (req, res) => {
            try {
                const bookNew = new book_1.Book(req.body);
                const book = await bookNew.save();
                if (book) {
                    res.redirect('/book/list');
                }
                else {
                    res.render("error");
                }
            }
            catch (err) {
                res.render("error");
            }
        };
        this.updateBook = async (req, res) => {
            try {
                let id = req.params.id;
                const book = await book_1.Book.findOne({ _id: id });
                console.log(req.body);
                book.title = req.body.title;
                book.description = req.body.description;
                book.author = req.body.author;
                await book.save();
                if (book) {
                    res.redirect('/book/list');
                }
                else {
                    res.render("error");
                }
            }
            catch (err) {
                res.render("error");
            }
        };
        this.editBook = async (req, res) => {
            try {
                const book = await book_1.Book.findOne({ _id: req.params.id });
                if (book) {
                    res.render("book/updateBook", { book: book });
                }
                else {
                    res.render("error");
                }
            }
            catch (err) {
                res.render("error");
            }
        };
        this.deleteBook = async (req, res) => {
            try {
                let id = req.params.id;
                const book = await book_1.Book.findOne({ _id: id });
                if (book) {
                    await book.remove();
                    res.redirect('/book/list');
                }
            }
            catch (err) {
                res.render("error");
            }
        };
    }
}
exports.default = new BookController();
//# sourceMappingURL=bookController.js.map