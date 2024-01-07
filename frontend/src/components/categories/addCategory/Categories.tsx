import React, { ChangeEvent, useState } from "react";
import { createCategory } from "../../../service/category.graphql";
import { useMutation } from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";

// create new category
const Categories = () => {
  const [name, setName] = useState({
    name: "",
  });

  // create category mutation
  const [addCategory] = useMutation(createCategory);

  //handleChange function for input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit function for form
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // reset the form
      e.currentTarget.reset();
      // create new category
      await addCategory({
        variables: {
          name: name.name,
        },
      });

      toast(`Created Successfully `, {
        type: "success",
      });
      // reset the form
      e.currentTarget.reset();
    } catch (error: any) {
      if (error.message.includes("E11000 duplicate key error collection")) {
        toast("category already exist", {
          type: "error",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="form-group mt-2">
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Create Book Category
      </button>
    </form>
  );
};

export default Categories;