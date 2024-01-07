import { Router } from "express";
import { AddBook, AllBooks } from "../controllers/book.controller";



const bookRouter = Router();


//Create a book route
bookRouter.post("/books/add-book", AddBook);
bookRouter.get("/books/all", AllBooks);


export default bookRouter;