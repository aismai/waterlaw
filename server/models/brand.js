const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: 1,
    maxlenght: 100
  }
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = { Brand };
