import { useQuery, useMutation } from "@apollo/client";
import {
  getAllCategories,
  deleteCategory,
} from "../../../service/category.graphql";

const AllCategories = () => {
  // fetch all categories
  const { loading, error, data } = useQuery(getAllCategories);

  // delete category mutation
  const [removeCategory] = useMutation(deleteCategory);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :{error.message}</p>;

  // get all the data from the query
  const { categories } = data ? data : [];

  // handleDelete function
  const handleDelete = (id: string) => {
    // delete the category
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      // delete category
      removeCategory({
        variables: {
          id,
        },
      });

      // refetch the data by fetching the delete category
      const refetchData = data.categories.filter(
        (category: any) => category.id !== id
      );

      // refetch the data
      data.categories = refetchData;
    }
  };

  return (
    <div>
      <h1>all categories</h1>

      <div>
        <table className="table mt-3 table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Actions</th>
            </tr>
          </thead>
          {categories.map((category: any) => (
            <tbody key={category.id}>
              <tr>
                <td>{category.name}</td>
                <td>{category.slug}</td>
                <td>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCategories;