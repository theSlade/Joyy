const mongoose = require("mongoose");

let Schema = new mongoose.Schema({
  muteroleId: String,
});

module.exports = mongoose.model("muteroles", Schema);
