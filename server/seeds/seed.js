const db = require("../config/connection");
const { Category, User, Service, Order } = require("../models");
const categorySeeds = require("./categorySeeds.json");
const userSeeds = require("./userSeeds.json");

const seedDatabase = async () => {
  try {
    // Delete existing data from the Category, User, and Service collections
    await Promise.all([
      Category.deleteMany(),
      User.deleteMany(),
      Service.deleteMany(),
      Order.deleteMany(),
    ]);

    // Seed the database with the category data
    const [catData, userData] = await Promise.all([
      Category.insertMany(categorySeeds),
      User.create(userSeeds),
    ]);
    // console.log(catData, userData);

    // Insert services
    const products = await Service.insertMany([
      {
        serviceName: "Build Shelving",
        serviceDesc: "Shelving needs to be assembled in bedroom closet",
        serviceCategory: catData[0]._id,
        servicePrice: 45.67,
        serviceQty: 2,
        serviceProviders: userData[0]._id,
      },
      {
        serviceName: "Install Lighting Fixture",
        serviceDesc: "Install a new lighting fixture in the living room",
        serviceCategory: catData[1]._id,
        servicePrice: 60.99,
        serviceQty: 1,
        serviceProviders: userData[1]._id,
      },
      {
        serviceName: "Paint Room",
        serviceDesc: "Paint the walls of the dining room",
        serviceCategory: catData[2]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: userData[2]._id,
      },
      {
        serviceName: "Furniture Assembly",
        serviceDesc: "Assemble new furniture for the living room",
        serviceCategory: catData[0]._id,
        servicePrice: 50.0,
        serviceQty: 1,
        serviceProviders: userData[3]._id,
      },
      {
        serviceName: "Plumbing Services",
        serviceDesc: "Fix a leaking faucet in the kitchen",
        serviceCategory: catData[3]._id,
        servicePrice: 70.25,
        serviceQty: 1,
        serviceProviders: userData[4]._id,
      },
      {
        serviceName: "Hardwood and Laminate Plank Flooring Installation",
        serviceDesc: "Install new hardwood flooring in the living room",
        serviceCategory: catData[5]._id,
        servicePrice: 120.99,
        serviceQty: 1,
        serviceProviders: userData[3]._id,
      },
      {
        serviceName: "Custom Furniture Building",
        serviceDesc: "Build a custom bookshelf for the study room",
        serviceCategory: catData[6]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: userData[2]._id,
      },
      {
        serviceName: "New Appliance Installation",
        serviceDesc: "Install new kitchen appliances",
        serviceCategory: catData[7]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: userData[4]._id,
      },
      {
        serviceName: "Shower Tiling",
        serviceDesc: "Grout and tile bathroom shower",
        serviceCategory: catData[8]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: userData[4]._id,
      },
      {
        serviceName: "Stone Countertop Installation",
        serviceDesc: "Install new stone countertops",
        serviceCategory: catData[9]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: userData[4]._id,
      },
    ]);

    const orders = await Order.create([
      {
        services: products[0]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 99.99,
      },
      {
        services: products[1]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 299.99,
      },
      {
        services: products[2]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 9.99,
      },
      {
        services: products[3]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 29.99,
      },
    ]);

    console.log("Database seeded successfully!");
    // Close the database connection
    db.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    db.close();
  }
};

// Connect to the MongoDB database
db.once("open", async () => {
  try {
    // Seed the database
    await seedDatabase();
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
});
