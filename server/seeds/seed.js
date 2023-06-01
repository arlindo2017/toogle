const db = require('../config/connection');
const { Category, User, Service} = require('../models');
const categorySeeds = require('./categorySeeds.json');
const userSeeds = require('./userSeeds.json')
const serviceSeeds = require('./serviceSeeds.json')

const seedDatabase = async () => {
  try {
    // Delete existing data from the Category collection
    await Category.deleteMany();
    await User.deleteMany()
    await Service.deleteMany()

    // Seed the database with the category data
    await Category.insertMany(categorySeeds);
    await User.insertMany(userSeeds)
    await Service.insertMany(serviceSeeds)

    console.log('Database seeded successfully!');
    // Close the database connection
    db.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    db.close();
  }
};

// Connect to the MongoDB database
db.once('open', async () => {
  try {
    // Seed the database
    await seedDatabase();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
});

