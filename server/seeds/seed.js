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
      //Furniture Assembly
      {
        serviceName: "Build Shelving",
        serviceDesc: "Shelving needs to be assembled in bedroom closet",
        serviceCategory: catData[0]._id,
        servicePrice: 45.67,
        serviceQty: 1,
        serviceProviders: [userData[0]._id, userData[5]._id],
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
        serviceName: "Bed Frame Assembly",
        serviceDesc: "Assemble a new bed frame",
        serviceCategory: catData[0]._id,
        servicePrice: 60.0,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[6]._id],
      },
      {
        serviceName: "Dining Table Assembly",
        serviceDesc: "Assemble a new dining table and chairs",
        serviceCategory: catData[0]._id,
        servicePrice: 70.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id],
      },
      {
        serviceName: "Wardrobe Assembly",
        serviceDesc: "Assemble a new wardrobe for the bedroom",
        serviceCategory: catData[0]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[9]._id],
      },
      //Lighting Installation
      {
        serviceName: "Install Lighting Fixture",
        serviceDesc: "Install a new lighting fixture in the living room",
        serviceCategory: catData[1]._id,
        servicePrice: 60.99,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[6]._id],
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
        serviceName: "Outdoor Lighting Installation",
        serviceDesc: "Install outdoor lighting fixtures in the backyard",
        serviceCategory: catData[1]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[8]._id],
      },
      // /Plumbing Services
      {
        serviceName: "Plumbing Services",
        serviceDesc: "Fix a leaking faucet in the kitchen",
        serviceCategory: catData[3]._id,
        servicePrice: 70.25,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[9]._id],
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
        serviceName: "Clogged Drain Repair",
        serviceDesc: "Fix a clogged drain in the bathroom",
        serviceCategory: catData[3]._id,
        servicePrice: 65.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[15]._id],
      },
      //Carpentry and Woodworking
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
        serviceName: "Deck Construction",
        serviceDesc: "Build a new deck in the backyard",
        serviceCategory: catData[6]._id,
        servicePrice: 2000.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[6]._id],
      },
      {
        serviceName: "Custom Cabinet Building",
        serviceDesc: "Build custom cabinets for the bathroom",
        serviceCategory: catData[6]._id,
        servicePrice: 300.0,
        serviceQty: 1,
        serviceProviders: [userData[7]._id],
      },
      //Bathroom Remodeling
      {
        serviceName: "Shower Tiling",
        serviceDesc: "Grout and tile bathroom shower",
        serviceCategory: catData[8]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[13]._id],
      },
      {
        serviceName: "Bathroom Vanity Installation",
        serviceDesc: "Install a new bathroom vanity",
        serviceCategory: catData[8]._id,
        servicePrice: 250.0,
        serviceQty: 1,
        serviceProviders: [userData[6]._id, userData[9]._id],
      },
      {
        serviceName: "Toilet Replacement",
        serviceDesc: "Replace the toilet in the bathroom",
        serviceCategory: catData[8]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[7]._id],
      },
      {
        serviceName: "Bathroom Lighting Installation",
        serviceDesc: "Install new lighting fixtures in the bathroom",
        serviceCategory: catData[8]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[11]._id, userData[13]._id],
      },
      //Painting
      {
        serviceName: "Interior Painting",
        serviceDesc: "Paint the walls and ceilings of the entire house",
        serviceCategory: catData[2]._id,
        servicePrice: 500.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[3]._id],
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
        serviceName: "Exterior Painting",
        serviceDesc: "Paint the exterior walls of the house",
        serviceCategory: catData[2]._id,
        servicePrice: 800.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[6]._id],
      },
      {
        serviceName: "Cabinet Painting",
        serviceDesc: "Paint kitchen cabinets",
        serviceCategory: catData[2]._id,
        servicePrice: 200.0,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[5]._id],
      },
      {
        serviceName: "Trim Painting",
        serviceDesc: "Paint the trim and baseboards",
        serviceCategory: catData[2]._id,
        servicePrice: 100.0,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[8]._id],
      },
      //Flooring Installation
      {
        serviceName: "Laminate Flooring Installation",
        serviceDesc: "Install laminate flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[5]._id],
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
        serviceName: "Hardwood Flooring Installation",
        serviceDesc: "Install hardwood flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 180.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[6]._id],
      },
      {
        serviceName: "Vinyl Flooring Installation",
        serviceDesc: "Install vinyl flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 100.0,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[7]._id],
      },
      {
        serviceName: "Carpet Installation",
        serviceDesc: "Install carpet flooring in the kitchen",
        serviceCategory: catData[5]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[1]._id, userData[8]._id],
      },
      //Appliance Installation and Repair
      {
        serviceName: "Refrigerator Repair",
        serviceDesc: "Repair a malfunctioning refrigerator",
        serviceCategory: catData[7]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id],
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
        serviceName: "Dishwasher Installation",
        serviceDesc: "Install a new dishwasher in the kitchen",
        serviceCategory: catData[7]._id,
        servicePrice: 90.0,
        serviceQty: 1,
        serviceProviders: [userData[6]._id],
      },
      {
        serviceName: "Paint Room",
        serviceDesc: "Paint the walls of the dining room",
        serviceCategory: catData[2]._id,
        servicePrice: 80.5,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[5]._id],
      },

      //Kitchen Renovation
      {
        serviceName: "Stone Countertop Installation",
        serviceDesc: "Install new stone countertops",
        serviceCategory: catData[9]._id,
        servicePrice: 90.5,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[6]._id],
      },
      {
        serviceName: "Cabinet Refacing",
        serviceDesc:
          "Update the look of your kitchen cabinets with new doors and veneers",
        serviceCategory: catData[9]._id,
        servicePrice: 1500.0,
        serviceQty: 1,
        serviceProviders: [userData[4]._id, userData[10]._id],
      },
      {
        serviceName: "Backsplash Installation",
        serviceDesc:
          "Install a stylish backsplash to protect your kitchen walls",
        serviceCategory: catData[9]._id,
        servicePrice: 75.99,
        serviceQty: 1,
        serviceProviders: [userData[2]._id, userData[11]._id],
      },
      {
        serviceName: "Appliance Repair",
        serviceDesc: "Repair malfunctioning kitchen appliances",
        serviceCategory: catData[9]._id,
        servicePrice: 50.0,
        serviceQty: 1,
        serviceProviders: [userData[5]._id, userData[12]._id],
      },
      {
        serviceName: "Kitchen Island Installation",
        serviceDesc:
          "Add a functional and stylish kitchen island to your space",
        serviceCategory: catData[9]._id,
        servicePrice: 800.0,
        serviceQty: 1,
        serviceProviders: [userData[7]._id, userData[13]._id],
      },
      {
        serviceName: "Sink and Faucet Replacement",
        serviceDesc: "Upgrade your kitchen sink and faucet for a fresh look",
        serviceCategory: catData[9]._id,
        servicePrice: 120.0,
        serviceQty: 1,
        serviceProviders: [userData[9]._id, userData[14]._id],
      },

      //Electrical Services
      {
        serviceName: "Electrical Panel Upgrade",
        serviceDesc: "Upgrade the electrical panel for increased capacity",
        serviceCategory: catData[4]._id,
        servicePrice: 350.0,
        serviceQty: 1,
        serviceProviders: [userData[5]._id, userData[7]._id],
      },
      {
        serviceName: "Electrical Outlet Installation",
        serviceDesc: "Install additional electrical outlets in the kitchen",
        serviceCategory: catData[4]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[5]._id, userData[7]._id],
      },
      {
        serviceName: "Circuit Breaker Replacement",
        serviceDesc: "Replace faulty circuit breakers in the electrical panel",
        serviceCategory: catData[4]._id,
        servicePrice: 150.0,
        serviceQty: 1,
        serviceProviders: [userData[10]._id, userData[13]._id],
      },
      {
        serviceName: "Electrical Wiring Inspection",
        serviceDesc:
          "Perform a thorough inspection of electrical wiring in the house",
        serviceCategory: catData[4]._id,
        servicePrice: 120.0,
        serviceQty: 1,
        serviceProviders: [userData[3]._id, userData[9]._id],
      },
      {
        serviceName: "Appliance Installation",
        serviceDesc:
          "Install new appliances and ensure proper electrical connections",
        serviceCategory: catData[4]._id,
        servicePrice: 100.0,
        serviceQty: 1,
        serviceProviders: [userData[6]._id, userData[11]._id],
      },
      {
        serviceName: "Electrical Troubleshooting",
        serviceDesc: "Identify and fix electrical issues in the house",
        serviceCategory: catData[4]._id,
        servicePrice: 80.0,
        serviceQty: 1,
        serviceProviders: [userData[8]._id, userData[12]._id],
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
