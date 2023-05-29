const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  orderDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Order = model("Order", orderSchema);
module.exports = Order;
