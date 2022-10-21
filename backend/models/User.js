const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  reason: { type: String, default: "NA" },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  leaves: { type: [leaveSchema], default: [] },
});

module.exports = mongoose.model("User", userSchema);
