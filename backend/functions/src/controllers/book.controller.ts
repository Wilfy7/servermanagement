import { Request, Response } from "express";
import Book from "../model/books.model";



export const AddBook = async (req: Request, res: Response) => {
    try {
        //Get the Data from request body
        const bookData = req.body;
        
        //Add a new book to the database
        const newBook = await Book.create(bookData)

        return res.status(200).json({
            message: "Book added successfully",
            book: newBook
        });

    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: "Internal server error" 
      });  
    }
};

export const AllBooks = async (req: Request, res: Response) => {
  try {
       //Get all books from the database
       const books = await Book.find({})

       return res.status(200).json({
        message: "All Books",
        books
       })
  } catch (error) {
     return res.status(500).json({
      message: "Internal server error"
     });
  }
};