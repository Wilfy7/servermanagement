import React from "react"
import { NavLink } from "react-router-dom"
import { logoutUser, token } from "../../service/userService"

const Navbar = () => {
    const user = token
   
    //Handle logout
    const handleLogout = () => {
        logoutUser();
    }

  return (
    <div>
      <nav className="navbar navbar-expand-l g bg-body-tertiary ps-5 pe-5">
        <div className="container">
          <NavLink to="/" className="navbar-brand text-decoration-none">
            UserManagement
          </NavLink>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
              <li className="nav-item dropdown">
                <NavLink 
                   className="nav-link dropdown-toggle"
                   to="#"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                  >
                   Admin
                 </NavLink>
                 <ul className="dropdown-menu">
                 <li>
                    <NavLink className="dropdown-item" to="/users">
                      Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className = "dropdown-item" to="/books">
                      Books
                    </NavLink>
                  </li>
                </ul>
                </li>
                {
                //If not a user show me register
                !user && (
                  <NavLink to="/registration" className="nav-link">
                    Register
                  </NavLink>
                )
              }

      
              {
                //If not a user show me/display login
              !user && (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}

               {
               //If user show me/display profile
              user && (
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              )}

              {
                //Displaying logout if user
                user && (
                  <span onClick={handleLogout} style={{cursor: "pointer"}}>
                    Logout
                  </span>
                )
              }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
