const Review = require("../models/Review");

module.exports = {
  createReview: async (req, res) => {
    try {
      //const reviewUser = await User.findById(req.user.id);
      await Review.create({
        review: req.body.review,
        likes: 0,
        post: req.params.id,
        createdBy: req.user.userName,
        createdById: req.user.id
      });
      console.log("Review has been added!");
      //res.redirect("/profile");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteReviews: async (req, res) => {
    try {
      await Review.deleteOne({_id: req.params.reviewId})
      res.redirect("/post/"+req.params.postId);
    } catch(err) {
      console.log(err)
    }
  } 
};
