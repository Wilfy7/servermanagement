import axios from "axios";
import { token } from "./userService";


const APIURL =  "http://localhost:5001/api/v1";


//Register a book
export const registerBook = async (book: any) => {
    try {
        const res = await axios.post(`${APIURL}/books/add-book`, book)
        return res.data;

    } catch (error) {
      console.log(error)  
    }
};

//Get all books
export const getAllBooks = async () => {
    try {
        const res = await axios.get(`${APIURL}/books/all`, {
            headers: {
                Authorization: token
            }
        });
        return res.data.books

    } catch (error) {
      console.log(error)        
    }
};

//Get a single book
export const getBook = async (id: string) => {
    try {
        const res = await axios.get(`${APIURL}/books/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return res.data.book
    } catch (error) {
      console.log(error)  
    }
};

//Update a book
export const updateBook = async (id: string, editData: string) => {
    try {
       const res = await axios.put(`${APIURL}/books/${id}`, editData,
       {
        headers: {
            Authorization: token
        }
       });
       return res.data
    } catch (error) {
      console.log(error)
        
    }
};

//Delete a book
export const deleteBook = async (id: string) => {
    try {
        const res = await axios.delete(`${APIURL}/book/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return res.data.message
    } catch (error) {
      console.log(error) 
    }
}


