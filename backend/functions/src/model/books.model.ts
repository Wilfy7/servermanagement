import mongoose from "mongoose";



interface IBook extends mongoose.Document{
    title: string;
    author: string;
    price: number;
    description: string;
    image: string;
    category: string;
    countInStock: number;
    rating: number;
    numReviews: number; 

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of the book"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Please enter the name of the author"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Please enter the price of the book"],

    },
    description: {
        type: String,
        required: [true, "Please enter the description of the book"],
        trim: true
    },
    image: {
        type: String,
        required: [true, "Please provide the image of the book"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Please enter the Category of the book"],
        trim: true
    },
    countInStock: {
        type: Number,
        required: [true, "Please enter the count in stock of the book"],
        trim: true
    },
    rating: {
        type: Number,
        trim: true
    },
    numReviews: {
        type: String,
        trim: true
    },
});

const Book = mongoose.model<IBook>("Book", bookSchema)

export default Book;