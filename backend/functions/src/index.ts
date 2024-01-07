import express, {Request, Response} from "express";
import * as functions from "firebase-functions";
import chalk from "chalk";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.routes";
import configApp from "./config/user.config";
import connectDB from "./config/config.connectDB";
import categoryRouter from "./graphqlRoute/categorygraphql.route";
import bookRouter from "./routes/book.route";

//Setting up express
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(cors());

//Port of the Server
const port = configApp.dev.port



//Routes
app.use("/api/v1", userRouter) //User routes 


//Routes for books
app.use("/api/v1", bookRouter); 


//Graphql routes
app.use("/api/v1/graphql", categoryRouter );
app.use("/api/vi/graphql", categoryRouter)

//Listening to the app
app.listen(port, () => {
    console.log(chalk.yellowBright( `Server running on port: http//localhost:${port}`))
});
connectDB();


//Handle unknown routes (404 Not Found)
app.use((req: Request, res: Response) => {
    try {
        res.status(404).json({
            message: "Route not found"
        });
    } catch (error) {
      console.log(error)  
    }
});


//Start the server for local development and remove the code when deploying to firebase
export const api = functions.https.onRequest(app)