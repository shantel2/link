const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
