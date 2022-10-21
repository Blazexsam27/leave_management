require("dotenv").config({
  path: "E:\\leave-management\\.env",
});
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const createUser = (user_data, securedPassword) => {
  return User.create({
    username: user_data.body.username,
    email: user_data.body.email,
    password: securedPassword,
    leaves: [],
  });
};

const emailExist = (email) => {
  if (User.findOne({ email: email })) return User.findOne({ email: email });
  return false;
};

const generateAuthToken = (userId) => {
  return jwt.sign(
    {
      user: { id: userId },
    },
    process.env.JWT_SECRET
  );
};

module.exports = { createUser, emailExist, generateAuthToken };
