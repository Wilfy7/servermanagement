import { Router } from "express";
import { graphqlHTTP } from "express-graphql"
import categorySchema from "../graphqlSchema/category.schema";



const categoryRouter = Router();


categoryRouter.use(
    "/category",
graphqlHTTP({
    schema: categorySchema
}) );

export default categoryRouter;