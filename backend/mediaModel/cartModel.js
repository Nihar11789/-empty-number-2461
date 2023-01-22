const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    category_name: {
        type: "string",
        required: true,
      },
      image: {
        type: "string",
        required: true,
      },
      brand: {
        type: "string",
        required: true,
      },
      description: {
        type: "string",
        required: true,
      },
      color: {
        type: "string",
        required: true,
      },
      new_price: {
        type: "number",
        required: true,
      },
      old_price: {
        type: "number",
        required: true,
      },
      discount: {
        type: "number",
        required: true,
      },
      delivery_type: {
        type: "string",
        required: true,
      },
      hidden_stars: {
        type: "number",
        required: true,
      },
      quantity: {
        type: "number",
        required: true,
      },
      size: {
        type: "string",
        required: true,
      },
      item_id:{
        type: "number",
        required: true,
      },
      userid:{
        type: "string",
      }
    });

const cartModel = mongoose.model("carts",cartSchema);
module.exports = cartModel;