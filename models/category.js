const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    type:{type:String},
});

module.exports = mongoose.model("Category",CategorySchema);