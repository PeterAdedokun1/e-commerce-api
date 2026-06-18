const express = require("express");
const router = express.Router();
const {
  createReview,
  updateReview,
  getAllReviews,
  getSingleReview,
  deleteReview,
} = require("../controller/ReviewController");
const {
  authorizePermissions,
  authenticateUser,
} = require("../middleware/authentication");

router.route("/").post(authenticateUser, createReview).get(getAllReviews);

router
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);


  module.exports = router