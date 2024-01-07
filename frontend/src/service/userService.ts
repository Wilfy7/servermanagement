import axios from "axios";


const APIURL = "http://localhost:5001/api/v1";

const userData: any = localStorage.getItem("userManagement");

//Convert to json
const tokenData = JSON.parse(userData);

//Get the token from the data
export const { token } = tokenData || "";

export const registerUser = async(user: any) => {
    try {
        const res = await axios.post(`${APIURL}/users/register`, user)
        return res.data;
    } catch (error) {
      console.log(error)    
    }
    
};

export const loginUser = async (user: any) => {
    try {
        localStorage.removeItem("userManagement")
        const res = await axios.post(`${APIURL}/users/login`, user)

        //Save data to local storage
        const data = res.data
        console.log(res.data)
        localStorage.setItem("userManagement", JSON.stringify(data));
        window.location.href = "/"; //This redirect to home page
        return res.data;
    } catch (error) {
      console.log(error)  
    }
};

//Get all users axios service
export const getUsers = async () => {
    try {
        const res = await axios.get(`${APIURL}/users/all`,{
            headers: {
                Authorization: token
            },
        });
        return res.data.users
    } catch (error) {
       console.log(error)  
    }
}; 

//Get a user axios service
export const getUser = async (id: string) => {
    try {
        const res = await axios.get(`${APIURL}/users/${id}`, {
            headers: {
                Authorization: token
            },
        });
        return res.data.user
    } catch (error) {
      console.log(error)  
    }
};

//update user axios service
export const updateUser = async (id: string, editData: any) => {
    try {
        const res = await axios.put(`${APIURL}/users/${id}`,
         editData,
          {
            headers: {
                Authorization: token
            },
        });
        return res.data;
    } catch (error) {
      console.log(error)  
    }
};

//Logout user service
export const logoutUser = async () => {
    try {
        localStorage.removeItem("userManagement");
        window.location.href = "/login"; 
    } catch (error) {
      console.log(error)  
    }
};

//Delete user service
export const deleteUser = async (id: string) => {
    try {
        const res = await axios.delete(`${APIURL}/users/${id}`, {
            headers: {
                Authorization: token
            },
        });
        return res.data.message;
    } catch (error) {
      console.log(error)  
    }
};