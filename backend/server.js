const express = require("express");
const cors = require("cors"); //cors provides Express middleware to enable CORS
const bodyParser = require("body-parser");
// const db = require("./config/migration");

const app = express();

const dotenv = require('dotenv').config();
var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(express.static('public')); 
app.use('/uploads', express.static('uploads'));

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







//* Require Routes
const orpholinatRouter = require('./routes/orpholinatRoute')
const orpholinRouter = require('./routes/orpholinRoute')
// const userRouter = require('./routes/userRouter')
// const authRouter = require('./routes/authRouter')


// * Register Our Routes
app.use("/api/orpholinat", orpholinatRouter)
app.use("/api",orpholinRouter)

// app.use('/api', authRouter)
// app.use('/api', userRouter)





  // set port, listen for requests
  const PORT = process.env.PORT || 5500;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  })