import React, { useEffect, useState } from "react";
import { deleteBook, getAllBooks } from "../../service/bookService";
import { useNavigate } from "react-router-dom";


interface CollectedBooks{
    id: String
    title: String;
    author: String;
    price: Number;
    description: String;
    category: String;
}


const CollectAllBooks = () => {

    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    const handleEdit = (id: string) => {
       navigate(`/books/${id}`)
    }

    const handleDelete = (id: string) => {
        deleteBook(id)
        setBooks(books.filter((book:CollectedBooks) => book.id !==id))
    }

    useEffect (() => {
      const fetchBooks = async () =>{
        const response = await getAllBooks();
        setBooks(response)
      }
      fetchBooks();
    }, []);


  return (
   <>
    <div className="container">
    <h1>Admin task for Users</h1>

    {books && books.length > 0 ? (
      <div>
        <table className="table mt-3 table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book: any) => (
              <tr key={book._id}>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.category}</td>
                <td>{book.description}</td>
                <td>
                  <button
                    onClick={() => handleEdit(book.id)}
                    className="btn btn-primary me-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <div className="text-center">
        <h2>Loading...</h2>
      </div>
    )}
  </div>
</> 
  );
};


export default CollectAllBooks;