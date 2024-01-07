import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../service/userService";
import { useNavigate } from "react-router-dom";

interface User {
  _id: string;
  email: string;
  fullName: string;
  country: string;
}

const Users = () => {
  const [users, setUsers] = useState([]);

  // navigate
  const navigate = useNavigate();

  //handle delete function
  const handleDelete = async (id: string) => {
    deleteUser(id);
    setUsers(users.filter((user: User) => user._id !== id));
  };

  // handle edit function
  const handleEdit = (id: string) => {
    navigate(`/users/${id}`);
  };
 
  //use effect to get all users
  useEffect(() => {
    const fetchUsers = async () => {
      // refresh the window
      const response = await getUsers();
      setUsers(response);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Admin task for Users</h1>

        {users && users.length > 0 ? (
          <div>
            <table className="table mt-3 table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Email</th>
                  <th>Full Name</th>
                  <th>Country</th>
                  <th>IsAdmin</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.email}</td>
                    <td>{user.fullName}</td>
                    <td>{user.country}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(user._id)}
                        className="btn btn-primary me-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
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

export default Users;