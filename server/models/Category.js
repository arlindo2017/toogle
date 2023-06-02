const { Schema, model } = require("mongoose");
const { Service } = require("../models");

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  //services: [Service],
});

const Category = model("Category", categorySchema);
module.exports = Category;
