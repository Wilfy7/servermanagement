import { jwtDecode } from 'jwt-decode';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { updateUser } from '../../service/userService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./profile.css";


const UserProfile = () => {  
  const [user, setUser]: any = useState({
   
    username: "",
    fullName: "",
    email: "",
    position: "",
    age: "",
    bio: ""
});

const userData:any = localStorage.getItem("userManagement")

const tokenData = JSON.parse(userData);

const id = user._id;

const { token } = tokenData; 

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   setUser({
    ...user,
    [e.target.name]: e.target.value
});
};



const handleUpdate = async () => {
   await updateUser(id, user)
  

   toast.success("User profile updated")
}

useEffect(() => {
    const decodedJwt:any = jwtDecode(token) 
    setUser(decodedJwt.user)
},[token])
  
    
  return (
    <div className="profile__container">
    <div className="profile__content">
        <div className="profile__circle">
            <div className="image">
                <img src="./ppc.jpg"
                alt=""/>
            </div>
        </div>
        <ToastContainer />
      <div className="mb-3 d-flex"
            style={{
            marginLeft : "4.3rem",
            marginTop: "1rem"
           }}
            > 
         <label className="me-2">Username: </label>
         <input 
         type="text"
         id="username"
         name="username"
         value={user.username}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "115px"
          }}
         />
      </div> 

      <div className="mb-3 d-flex"
         style={{
                marginLeft : "4.3rem",
            }} 
          > 
         <label className="me-2">FullName: </label>
         <input 
         type="text"
         id="fullName"
         name="fullName"
         value={user.fullName}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "125px"
          }}
         />
      </div>   

      <div className="mb-3 d-flex" 
          style={{
            marginLeft : "4.3rem"
          }}
           > 
         <label className="me-2">Email: </label>
         <input 
         type="text"
         id="email"
         name="email"
         value={user.email}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "150px"
          }}
         />
      </div>  

      <div className="mb-3 d-flex"
         style={{
            marginLeft : "4.3rem"
          }}
          > 
         <label className="me-2">Position: </label>
         <input 
         type="text"
         id="position"
         name="position"
         value={user.position}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "125px"
          }}
         />
      </div>  

      <div className="mb-3 d-flex"
          style={{
            marginLeft : "4.3rem"
          }}
          > 
         <label className="me-2">Age: </label>
         <input 
         type="number"
         id="age"
         name="age"
         value={user.age}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "150px"
          }}
         />
      </div>    

      <div className="mb-4 d-flex"
           style={{
            marginLeft : "4.3rem"
           }}
           > 
         <label className="me-2">Bio: </label>
         <input 
         type="text"
         id="bio"
         name="bio"
         value={user.bio}
         onChange={handleChange}
         style={{
            border: "none",
            backgroundColor: "transparent",
            width: "150px",
            height: "auto"
          }}
         />
      </div>    
     <button 
         onClick={handleUpdate}
         className="btn btn-primary"
         style={{
            marginLeft : "5rem"
          }}
         >
        Update Profile
     </button>
    </div>
    
    </div>
  )
}

export default UserProfile;