const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

exports.signUp = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
    });

    console.log("done");
    const token = jwt.sign({ id: user.id, role: user.role}, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_IN,
    });

    console.log(token);

    res.status(201).json({
      user: user,
      token: token, 
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email, password: password } });
    console.log(user.password);

    if (!user.password == password) {
      res.status(401).json({
        message: "email or password not correct",
    });
    } else {
      const token = jwt.sign({ id: user.id,role: user.role}, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRE_IN,
      });

      res.status(201).json({
        message: "success",
        token: token,
      });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};