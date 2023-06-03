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
    const services = await Service.insertMany([
      {
        serviceName: "Build Shelving",
        serviceDesc: "Shelving needs to be assembled in bedroom closet",
        serviceCategory: catData[0]._id,
        servicePrice: 45.67,
        serviceQty: 1,
        serviceProviders: [userData[0]._id, userData[5]._id],
      },
      {
        serviceName: "Install Lighting Fixture",
        serviceDesc: "Install a new lighting fixture in the living room",
        serviceCategory: catData[1]._id,
        servicePrice: 60.99,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[6]._id],
      },
      {
        serviceName: "Paint Room",
        serviceDesc: "Paint the walls of the dining room",
        serviceCategory: catData[2]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[7]._id],
      },
      {
        serviceName: "Furniture Assembly",
        serviceDesc: "Assemble new furniture for the living room",
        serviceCategory: catData[0]._id,
        servicePrice: 50.0,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[8]._id],
      },
      {
        serviceName: "Plumbing Services",
        serviceDesc: "Fix a leaking faucet in the kitchen",
        serviceCategory: catData[3]._id,
        servicePrice: 70.25,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[9]._id],
      },
      {
        serviceName: "Hardwood and Laminate Plank Flooring Installation",
        serviceDesc: "Install new hardwood flooring in the living room",
        serviceCategory: catData[5]._id,
        servicePrice: 120.99,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[10]._id],
      },
      {
        serviceName: "Custom Furniture Building",
        serviceDesc: "Build a custom bookshelf for the study room",
        serviceCategory: catData[6]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[11]._id],
      },
      {
        serviceName: "New Appliance Installation",
        serviceDesc: "Install new kitchen appliances",
        serviceCategory: catData[7]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[12]._id],
      },
      {
        serviceName: "Shower Tiling",
        serviceDesc: "Grout and tile bathroom shower",
        serviceCategory: catData[8]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[13]._id],
      },
      {
        serviceName: "Stone Countertop Installation",
        serviceDesc: "Install new stone countertops",
        serviceCategory: catData[9]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[14]._id],
      },
      {
        serviceName: "Clogged Drain Repair",
        serviceDesc: "Fix a clogged drain in the bathroom",
        serviceCategory: catData[3]._id,
        servicePrice: 65.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[15]._id],
      },
      {
        serviceName: "Ceiling Fan Installation",
        serviceDesc: "Install a ceiling fan in the bedroom",
        serviceCategory: catData[1]._id,
        servicePrice: 50.99,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[16]._id],
      },
      {
        serviceName: "Interior Painting",
        serviceDesc: "Paint the walls and ceilings of the entire house",
        serviceCategory: catData[2]._id,
        servicePrice: 500.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[3]._id],
      },
      {
        serviceName: "Laminate Flooring Installation",
        serviceDesc: "Install laminate flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[5]._id],
      },
      {
        serviceName: "Deck Construction",
        serviceDesc: "Build a new deck in the backyard",
        serviceCategory: catData[6]._id,
        servicePrice: 2000.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[6]._id],
      },
      {
        serviceName: "Refrigerator Repair",
        serviceDesc: "Repair a malfunctioning refrigerator",
        serviceCategory: catData[7]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id],
      },
      {
        serviceName: "Wallpaper Installation",
        serviceDesc: "Install wallpaper in the living room",
        serviceCategory: catData[2]._id,
        servicePrice: 75.0,
        serviceQty: 1,
        serviceProviders: [userData[7]._id],
      },
      {
        serviceName: "Leaky Faucet Repair",
        serviceDesc: "Fix a leaky faucet in the bathroom",
        serviceCategory: catData[3]._id,
        servicePrice: 55.0,
        serviceQty: 1,
        serviceProviders: [userData[5]._id],
      },
      {
        serviceName: "Outdoor Lighting Installation",
        serviceDesc: "Install outdoor lighting fixtures in the backyard",
        serviceCategory: catData[1]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[8]._id],
      },
      {
        serviceName: "Tile Flooring Installation",
        serviceDesc: "Install tile flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 120.0,
        serviceQty: 1,
        serviceProviders: [userData[9]._id],
      },
      {
        serviceName: "Custom Cabinet Building",
        serviceDesc: "Build custom cabinets for the bathroom",
        serviceCategory: catData[6]._id,
        servicePrice: 300.0,
        serviceQty: 1,
        serviceProviders: [userData[7]._id],
      },
      {
        serviceName: "Dishwasher Installation",
        serviceDesc: "Install a new dishwasher in the kitchen",
        serviceCategory: catData[7]._id,
        servicePrice: 90.0,
        serviceQty: 1,
        serviceProviders: [userData[6]._id],
      },
      {
        serviceName: "Build Shelving",
        serviceDesc: "Shelving needs to be assembled in bedroom closet",
        serviceCategory: catData[0]._id,
        servicePrice: 45.67,
        serviceQty: 1,
        serviceProviders: [userData[0]._id, userData[1]._id],
      },
      {
        serviceName: "Install Lighting Fixture",
        serviceDesc: "Install a new lighting fixture in the living room",
        serviceCategory: catData[1]._id,
        servicePrice: 60.99,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[3]._id],
      },
      {
        serviceName: "Paint Room",
        serviceDesc: "Paint the walls of the dining room",
        serviceCategory: catData[2]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[5]._id],
      },
      {
        serviceName: "Furniture Assembly",
        serviceDesc: "Assemble new furniture for the living room",
        serviceCategory: catData[0]._id,
        servicePrice: 50.0,
        serviceQty: 1,
        serviceProviders: [userData[6]._id, userData[7]._id],
      },
      {
        serviceName: "Plumbing Services",
        serviceDesc: "Fix a leaking faucet in the kitchen",
        serviceCategory: catData[3]._id,
        servicePrice: 70.25,
        serviceQty: 1,
        serviceProviders: [userData[8]._id, userData[9]._id],
      },
      {
        serviceName: "Hardwood and Laminate Plank Flooring Installation",
        serviceDesc: "Install new hardwood flooring in the living room",
        serviceCategory: catData[5]._id,
        servicePrice: 120.99,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[3]._id],
      },
      {
        serviceName: "Custom Furniture Building",
        serviceDesc: "Build a custom bookshelf for the study room",
        serviceCategory: catData[6]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[4]._id],
      },
      {
        serviceName: "New Appliance Installation",
        serviceDesc: "Install new kitchen appliances",
        serviceCategory: catData[7]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[5]._id, userData[7]._id],
      },
      {
        serviceName: "Shower Tiling",
        serviceDesc: "Grout and tile bathroom shower",
        serviceCategory: catData[8]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[9]._id, userData[0]._id],
      },
      {
        serviceName: "Stone Countertop Installation",
        serviceDesc: "Install new stone countertops",
        serviceCategory: catData[9]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[6]._id],
      },
    ]);

    const orders = await Order.create([
      {
        services: services[0]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 99.99,
      },
      {
        services: services[1]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 299.99,
      },
      {
        services: services[2]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 9.99,
      },
      {
        services: services[3]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 29.99,
      },
      {
        services: services[4]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 140.5,
      },
      {
        services: services[5]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 120.99,
      },
      {
        services: services[6]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 150.0,
      },
      {
        services: services[7]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 90.5,
      },
      {
        services: services[8]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 90.5,
      },
      {
        services: services[9]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[1]._id,
        orderPrice: 90.5,
      },
      {
        services: services[10]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[2]._id,
        orderPrice: 100.0,
      },
      {
        services: services[11]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[2]._id,
        orderPrice: 80.0,
      },
      {
        services: services[12]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[3]._id,
        orderPrice: 75.5,
      },
      {
        services: services[13]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[3]._id,
        orderPrice: 120.0,
      },
      {
        services: services[14]._id,
        user: userData[0]._id,
        serviceQty: 1,
        provider: userData[4]._id,
        orderPrice: 95.99,
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
