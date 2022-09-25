const mongoose = require("mongoose");
//LWL Added comments functionality then changed comments functionality to review functionality
const ReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  //MW user who created comment
  createdBy: {
    type: String,
    ref: "User"
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
