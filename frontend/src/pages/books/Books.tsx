import React, { useState } from "react"
import Categories from "../../components/categories/addCategory/Categories";
import CollectAllBooks from './collectAllBooks';
import AddBook from "./addBook";

const Books = () => {

    const [addClicked, setAddClicked] = useState(false);
  const [getallClicked, setGetAllClicked] = useState(false);
  const [addCopy, setAddCopy] = useState(false)

  // handle click event of the button to open the modal
  const handleAddClick = () => {
    setGetAllClicked(false);
    setAddCopy(false);
    setAddClicked(true);
  };

  const handleGetAllClick = () => {
    setAddClicked(false);
    setAddCopy(false);
    setGetAllClicked(true);
  };

  const handleAddCopy = () => {
    setAddClicked(false);
    setGetAllClicked(false);
    setAddCopy(true);
   
  }

  return (
   
    <>
      <div className="container">
        <h1>Books Management</h1>

        <div className="mt-3">
          <div className="mt-2 d-flex justify-content-end gap-2">
            <button onClick={handleAddClick} className="btn btn-primary">
              Create Category
            </button>
            <button onClick={handleAddCopy} className="btn btn-primary">
              Add Book
            </button>
            <button onClick={handleGetAllClick} className="btn btn-primary">
              Get All Books
            </button>
          </div>

          {addClicked && (
            <div className="mt-2">
              <Categories />
            </div>
          )}

          {getallClicked && (
            <div className="mt-2">
              <CollectAllBooks />
            </div>
          )}

            {addCopy && (
            <div className="mt-2">
              <AddBook />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Books;