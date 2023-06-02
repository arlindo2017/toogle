const { User, Category, Order, Service } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    // Query user thats logged in using context.username
    me: async (parent, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("services");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // Query Categories - Works tested 6/2
    // categories: async () => {
    //   const categories = await Category.find();
    //   return categories;
    // },

    // Query Services
    services: async () => {
      const services = await Service.find().populate("serviceCategory").populate("serviceProviders");
      return services;
      // const params = {};

      // if (category) {
      //   params.category = category;
      // }

      // if (name) {
      //   params.name = {
      //     $regex: name,
      //   };
      // }
      // return Service.find(params).populate("category");
    },
    getAllCategoriesWithServices: async () => {
      try {
        // Retrieve all categories
        const categories = await Category.find();
        // Fetch services for each category
        const categoriesWithServices = await Promise.all(
          categories.map(async (category) => {
            const services = await Service.find({
              serviceCategory: category._id,
            });
            return { ...category.toObject(), services };
          })
        );
        return categoriesWithServices;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch categories with services");
      }
    },
    service: async (parent, { serviceId }) => {
      return Service.findOne({ _id: serviceId });
    },
    orders: async () =>
      Order.find().populate("services").populate("provider").populate("user"),
  },

  Mutation: {
    // addUser functionaly tested in graphql
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // login, works, returns token
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // Working when added with IDs
    addService: async (parent, args) => {
      const newService = await Service.create(args);
      return newService;
    },
    // Add Category - Tested works 5.31
    addCategory: async (parent, { categoryName }) => {
      const newCategory = await Category.create({
        categoryName,
      });
      return newCategory;
    },

    addOrder: async (
      parent,
      { user, services, provider, serviceQty, orderPrice },
      context
    ) => {
      // console.log(context);
      if (context.user) {
        const order = new Order({
          user,
          services,
          provider,
          serviceQty,
          orderPrice,
        });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
