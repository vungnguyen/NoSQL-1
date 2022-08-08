import express from 'express';
import bodyParser from "body-parser";
import  mongoose from "mongoose";
import {router} from "./src/routes/book.router";

const PORT = 3000;
const app = express();
app.set('views','./src/views/');
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/book_manager').then(() =>{
    console.log('DB connected')
}).catch(() => {
    console.log('connect error')
});
app.use(bodyParser.json());
app.use('',router)

app.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});