const mongoose = require("mongoose");
// const { MONGO_URI } = require("../config.json");

const db = mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.info("MongoDB has connected!")
);

module.exports = db;
