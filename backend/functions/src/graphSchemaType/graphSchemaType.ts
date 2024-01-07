import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";



export const CategorySchemaType = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        slug: {type: GraphQLString}
    }),
});