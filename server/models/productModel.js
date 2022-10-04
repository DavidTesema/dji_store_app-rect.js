const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
});

const model = mongoose.model("product", productSchema);

module.exports = model;
