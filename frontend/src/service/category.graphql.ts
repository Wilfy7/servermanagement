import { gql } from "@apollo/client";

//mutation to create new category
export const createCategory = gql`
  mutation createNewCategory($name: String!) {
    addCategory(name: $name) {
      name
      slug
    }
  }
`;

// get all categories query
export const getAllCategories = gql`
  query getAllCategories {
    categories {
      id
      name
      slug
    }
  }
`;

// delete category mutation
export const deleteCategory = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
      name
      slug
    }
  }
`;