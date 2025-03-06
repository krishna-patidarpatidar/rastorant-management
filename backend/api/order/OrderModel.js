const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderProducts: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Menu",
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1, 
          },
        },
      ],
   orderStatus: {
    type: String,
    enum: ["pending", "shipped", "delivered"],
    default: "pending",
    required: true,
    },
    tableId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
