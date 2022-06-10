
const express = require("express");
const cors = require("cors"); //cors provides Express middleware to enable CORS
const bodyParser = require("body-parser");
// const db = require("./config/migration");

const app = express();

const dotenv = require('dotenv').config();
var corsOptions = {
  origin: "http://localhost:8080"
};




//* the will let us get data the data form post
app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to ORPHOME" });
  });







//* Require Routes
const orpholinatRouter = require('./routes/orpholinatRoute')
const orpholinRouter = require('./routes/orpholinRoute')


// * Register Our Routes
app.use("/api", orpholinatRouter)
app.use("/api",orpholinRouter)





  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })