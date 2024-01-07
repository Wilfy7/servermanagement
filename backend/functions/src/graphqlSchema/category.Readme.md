import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} from "graphql";
import Category from "../models/categories.model";
GraphQLObjectType: This class represents a type in a GraphQL schema. Here, it defines a CategoryType that represents the structure of a category.

GraphQLString, GraphQLID: These are GraphQL scalar types representing String and ID.

GraphQLList: Represents a list of items. new GraphQLList(CategoryType) indicates that the categories field will return a list of CategoryType.

GraphQLSchema: Represents a GraphQL schema. It's the root container for defining types and queries.

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  }),
});
CategoryType: Defines the structure of a category in GraphQL. It includes fields like id, name, slug, and createdAt.
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find({});
      },
    },

    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Category.findById(args.id);
      },
    },
  },
});
RootQuery: Defines the root queries that can be performed on the GraphQL schema. In this case, it has two queries: categories and category.

categories: Returns a list of all categories.
category: Takes an argument id and returns a single category based on that ID.
export default new GraphQLSchema({
  query: RootQuery,
});
GraphQLSchema: Exports the GraphQL schema, including the defined queries.
Summary:
category.schema.ts defines the GraphQL schema for categories, including the types (CategoryType), queries (RootQuery), and the overall schema (GraphQLSchema).
This schema allows you to query for a list of categories (categories) or a single category by ID (category). The actual data fetching is handled by the resolve functions inside the queries, where you interact with your database (in this case, MongoDB using Mongoose) to retrieve the necessary data.