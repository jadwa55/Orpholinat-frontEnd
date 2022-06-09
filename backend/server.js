
const express = require("express");
const cors = require("cors"); //cors provides Express middleware to enable CORS

const app = express();
const dotenv = require('dotenv').config();
var corsOptions = {
  origin: "http://localhost:8080"
};


//* the will let us get data the data form post
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ORPHOME" });
  });











  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })