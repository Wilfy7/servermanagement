import { 
        GraphQLID, 
        GraphQLList, 
        GraphQLObjectType, 
        GraphQLSchema, 
        GraphQLString 
    } from "graphql";
import { CategorySchemaType } from "../graphSchemaType/graphSchemaType";
import Category from "../model/category.model";
import slugify from "slugify";


//Define the root query first
const RootQuery = new GraphQLObjectType({
    name: "CategoryType",
    fields: {
        //Controller function to get all categories
        categories: {
            type: new GraphQLList(CategorySchemaType),
            resolve: async () => {
                const categories = await Category.find({});
                return categories;
            },
        },

        //Controller function to get a single category
        category: {
            type: CategorySchemaType,
            args: {id: {type: GraphQLID} },
            resolve: async (parent, args) => {
                const category = await Category.findById(args.id);
                return category;
            },
        },
    },
});

//Mutation for adding a category
const RootMutation = new GraphQLObjectType({
    name: "CategoryMutation",
    fields: {
        //Create a new category
        addCategory: {
            type: CategorySchemaType,
            args: {
                name: {type: GraphQLString},
                slug: {type: GraphQLString}
            },

            //Resolver function to create a new category
            resolve: async (parent, args) => {
                 const category = await Category.create({
                    name: args.name,
                    slug: slugify(args.name)
                 });

                 return category
            },
        },
    


  // update a category  by id
  updatedCategory: {
    type: CategorySchemaType,
    args: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      slug: { type: GraphQLString },
    },

    // resolver function to update a category
    resolve: async (parent, args) => {
      try {
        const updateCategory = await Category.findByIdAndUpdate(
          args.id,
          {
            name: args.name,
            slug: slugify(args.name),
          },
          { new: true }
        );

        if (!updateCategory) {
          throw new Error(`Category not found`);
        }

        return updateCategory;
      } catch (error) {
        throw new Error(`Error updating category`);
      }
    },
  },

  // delete a category by id
  deleteCategory: {
    type: CategorySchemaType,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
      try {
        const deleteCategory = await Category.findByIdAndDelete(args.id);

        if (!deleteCategory) {
          throw new Error(`Category not found`);
        }

        return deleteCategory;
      } catch (error) {
        throw new Error(`Error deleting category`);
      }
    },
  },
},
});


export default new GraphQLSchema({
    query: RootQuery, 
    mutation: RootMutation
});