import mongoose from "mongoose"



interface IUser extends mongoose.Document{
    fullName: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isVerified: boolean;
    country: string;
    city: string;
    postalCode: string;
    streetAddress: string;
    username: string;
    position: string;
    age: number;
    bio: string;

}

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: [true, "Please enter full name"],
      min: 2,
      trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: 0
    },
    isVerified: {
        type: Boolean,
        default: 0
    },
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    postalCode: {
        type: String,
        trim: true
    },
    streetAddress: {
        type: String,
        trim: true
    },
    username :{
        type: String,
        trim: true
    },
    position: {
        type: String,
        trim: true
    },
    age: {
        type: Number,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    }

})

const User = mongoose.model<IUser>("User", userSchema);

export default User;