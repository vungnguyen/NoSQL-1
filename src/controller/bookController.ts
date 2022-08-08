import {Request, Response} from "express";
import {Book} from "../model/book";

 class BookController{
     showListBook = async (req: Request, res: Response) => {
         let bookData = await Book.find()
         res.render('book/list',{
             books: bookData
         })
     }
     showCreateBook = (req: Request, res: Response) => {
         res.render('book/createBook')
     }
     createBook = async (req: Request, res: Response) => {
         try {

             const bookNew = new Book(req.body);

             const book = await bookNew.save();

             if (book) {

                 res.redirect('/book/list')

             } else {

                 res.render("error");

             }

         } catch (err) {

             res.render("error");

         }

     }
     updateBook = async (req: Request, res: Response) => {
         try {
             let id = req.params.id;
             const book = await Book.findOne({ _id: id })
             console.log(req.body)

             book.title = req.body.title;

             book.description = req.body.description;

             book.author = req.body.author;

             await book.save();

             if (book) {
                 res.redirect('/book/list')
             } else {
                 res.render("error");
             }
         } catch (err) {
             res.render("error");
         }
 }
     editBook = async (req: Request, res: Response) => {
         try {
             const book = await Book.findOne({ _id: req.params.id });
             if (book) {
                 res.render("book/updateBook", {book: book})
             } else {
                 res.render("error");
             }
         } catch (err) {
             res.render("error");
         }
     }
     deleteBook = async (req: Request, res: Response) => {
         try {
             let id = req.params.id;
             const book = await Book.findOne({ _id: id })
             if(book){
                 await book.remove();
                 res.redirect('/book/list')
             }
         }catch (err) {
             res.render("error");
         }
     }
}
export default new BookController();