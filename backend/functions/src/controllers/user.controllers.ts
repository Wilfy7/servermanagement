import { Request, Response } from "express";
import User from "../model/user.model";
import {comparePassword, hashedPassword} from "../services/securePassword"
import { genToken } from "../services/genToken";


export const registerUser = async (req: Request, res: Response) => {
    try {
        //Get the data from the request body
        const userData = req.body;

        const {fullName, email, password} = userData
        if(!fullName || !email || !password)
        return res.status(400).json({
        message: "Please provide the neccessary info in the fields"
    });
       //Check if user already exist 
       const existingUser = await User.findOne({email: userData.email})
       if(existingUser) 
       return res.status(200).json({
       message: "User already exist"
   });
  
   const passwordhashed = hashedPassword (password) 
   //Create a new user
   const newUser = new User({
    ...userData,
    password: passwordhashed
   });

   const savedUser = await newUser.save();

   return res.status(200).json({
    message: "User registered",
    savedUser
   })

    } catch (error) {
        return res.status(500).json({
        message: "Intenal server error",
        error: error
      })
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        //Get info from the request body
        const {email, password} = req.body
        
        //Check if data is provided
        if(!email || !password)
        return res.status(400).json({
        message: "Please provide the neccessary requirements in the field"
    });

    //Check if user exist
    const existingUser = await User.findOne({email});
    if(!existingUser)
    return res.status(400).json({
    message: "User does not exist"
});

//check password matches
const isMatch = comparePassword(password, existingUser.password)
if(!isMatch)
return res.status(400).json({
    message: "Invalid credentials"
});

//Find User without password
const user = await User.findOne({email}).select({
    passsword: 0,
});

const token = genToken({user}, "3d");

return res.status(200).json({
    message: "User logged in successfully",
    token
});

    } catch (error) {
      return res.status(500).json({
        message: "Internal sever error"
      })
    }
};
 
//Admin controller system

//Get all users controllers
export const getAllUsers = async (req:Request, res:Response) => {

    try {
        //Get All Users from the database
        const users = await User.find({}).select({
            password: 0,
            __v: 0
        });

        return res.status(200).json({
            message: "All Users",
            users
        });    
        
    } catch (error) {
        return res.status(500).json({
        message: "Internal server error" 
        });
        
    }
};

//Get a single user 
export const getUser = async (req: Request, res: Response) => {
    try {
         //Get the Id from the params
         const { id } = req.params;

      //Get a User from the database
      const existingUser = await User.findById(id).select({
        password: 0,
        __v: 0
      });
      if(!existingUser)
      return res.status(400).json({
      message: "User does not exist"
    });

      return res.status(200).json({
        message: "User Data",
        user: existingUser
      })
        
    } catch (error) {
      return res.status(500).json({
        message: "Internal srever error"
      })  
        
    }
};

//Update User
export const updateUser = async (req: Request, res:Response) => {
    try {
       //Get the Id from the params
       const { id } = req.params

       const existingUser = await User.findByIdAndUpdate(id, req.body, {
        new: true
       });

       if(!existingUser)
       return res.status(400).json({
       message: "User does not exist"
    });

       return res.status(200).json({
        message: "User updated",
        user: existingUser
       })
        
    } catch (error) {
      return res.status(500).json({
        message: "Internal sever error"
      })  
    }
};

//Delete User
export const deleteUser = async (req: Request, res:Response) => {
    try {
        //Get the Id from the params
        const { id } = req.params

        //Check if user exist
        const existingUser = await User.findByIdAndDelete(id);

        if(!existingUser)
        return res.status(400).json({
        message: "User does not exist"
    });
      return res.status(200).json({
        message: "User deleted"
      })

    } catch (error) {
      return res.status(500).json({
        message: "Internal sever error"
      })  
    }
};



