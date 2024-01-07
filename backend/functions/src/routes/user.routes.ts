import { isLoggedIn } from "../middleware/user.middleware";
import { 
    deleteUser,
    getAllUsers, 
    getUser, 
    loginUser, 
    registerUser, 
    updateUser} from "../controllers/user.controllers";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);

//Admin related routes
userRouter.get("/users/all",  isLoggedIn, getAllUsers); //Get all users route

userRouter.get("/users/:id", isLoggedIn, getUser) //Get a single user route

userRouter.put("/users/:id", isLoggedIn, updateUser); //Update user route

userRouter.delete("/users/:id", isLoggedIn, deleteUser)


export default userRouter; 


