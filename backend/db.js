const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://blazexsam:7Wv1PdgLf3ODetiD@leavemanagementcluster.udygpqu.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, {}, (err) => {
    if (err) console.log(err);
    else console.log("Databse Connection Successful");
  });
};
module.exports = connectToMongo;
