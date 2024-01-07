import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Homepage = () => {

  const [user, setUser]:any = useState(null)

  //Get the data from the local storage as raw stringe
  const userData:any = localStorage.getItem("userManagement");

  //Use this approach to make isadmin variable global
  //const { isAdmin } = user;
  
  //Parse the data from the local storage using this procedure
  //to convert the raw stringe data gotten from the local storage
  //into JSON format
  const tokenData = JSON.parse(userData)
 

  const { token } = tokenData 
 
useEffect(() => {
  const decodedJwt:any = jwtDecode(token)
  setUser(decodedJwt.user)
},[token]);


  

  return (
    <div className="container">
      <h1>Welcome to UserManagement System Books</h1>
       
      <div>
        
        <table className="table mt-3 table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Full Name</th>
              <th>IsAdmin</th>
            </tr>
          </thead>
          <tbody>
            {user && (
           <tr>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.fullName}</td>
            <td>{user.isAdmin ? "Yes" : "No"}</td>
          </tr>
          )}
          </tbody> 
        </table>
         
         {user?.isAdmin && (
        <Link to="/add-user" className="btn btn-primary">
          Add User
        </Link>
         )}
        
      </div>
      
    </div>
  
  );
};

export default Homepage;
