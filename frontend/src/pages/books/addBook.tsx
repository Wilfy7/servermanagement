import React, { ChangeEvent, useState } from 'react'
import { registerBook } from '../../service/bookService';

const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        price: "",
        category: "",
        image: "",
        countInStock: "",
        description: ""
    }); 

    //Handle change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value 
        })
    };

    //Handle Submit
    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault();
       await registerBook(bookData);
       
       //Setting input back to default after submition
       setBookData({
        title: "",
        author: "",
        price: "",
        category: "",
        image: "",
        countInStock: "",
        description: ""
       })

    };
    
  return (
    <div className="container">
        <h3>Add a new book</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">    
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input 
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleChange}
            />
          </div>  

          <div className="mb-3">    
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input 
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleChange}
            />
          </div>  

          <div className="mb-3">    
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input 
            type="price"
            className="form-control"
            id="price"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            />
          </div>  

          <div className="mb-3">    
            <label htmlFor="title" className="form-label">
              Category
            </label>
            <input 
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            />
          </div>  
           
          <div className="mb-3">    
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input 
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={bookData.image}
            onChange={handleChange}
            />
          </div>  

          <div className="mb-3">    
            <label htmlFor="countInStock" className="form-label">
              countInStock
            </label>
            <input 
            type="number"
            className="form-control"
            id="countInStock"
            name="countInStock"
            value={bookData.countInStock}
            onChange={handleChange}
            />
          </div>  

          <div className="mb-3">    
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input 
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={bookData.description}
            onChange={handleChange}
            />
          </div>  

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
       </form>
    </div>
  )
}

export default AddBook;