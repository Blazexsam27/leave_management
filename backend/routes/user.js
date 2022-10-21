const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User");
const bycrypt = require("bcrypt");

const { emailExist, createUser, generateAuthToken } = require("../services");

router.post(
  "/signup",
  [
    body("username", "Name must be atleast 3 characters long").isLength({
      min: 3,
    }),
    body("email", "Invalid email").isEmail(),
    body("password", "Password must be alteast 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send(errors);
    }
    if (await emailExist(req.body.email))
      return res
        .status(400)
        .send({ message: "User with this email already exist" });
    try {
      const salt = await bycrypt.genSalt();
      const securedPassword = await bycrypt.hash(req.body.password, salt);
      let user = await createUser(req, securedPassword);
      const authToken = generateAuthToken(user._id);
      return res.send({ authToken });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
);

router.post(
  "/signin",
  [body("email", "Invalid email").isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors);
    if (!emailExist)
      return res
        .status(400)
        .send({ message: "Account with this email does not exist" });
    try {
      let user = await User.findOne({
        email: req.body.email,
      });
      const comparePassword = await bycrypt.compare(
        req.body.password,
        user.password
      );
      if (!comparePassword)
        return res
          .status(404)
          .send({ message: "Please login using correct credentials" });
      const authToken = generateAuthToken(user._id);
      return res.send({ authToken });
    } catch (e) {
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
