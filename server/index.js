const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;
const databaseConfigurations = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, databaseConfigurations)
  .then(() =>
    app.listen(port, () => console.log("Server is running on port " + port))
  )
  .catch((err) => console.log(err));
