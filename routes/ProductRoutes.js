const express = require("express");
const router = express.Router();
const {
  authorizePermissions,
  authenticateUser,
} = require("../middleware/authentication");

const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  uploadProductImage,
} = require("../controller/ProductController");

const {getSingleProductReviews} = require("../controller/ReviewController")

router
  .route("/")
  .post([authenticateUser, authorizePermissions("admin")], createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post([authenticateUser, authorizePermissions("admin")], uploadProductImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions("admin")], updateProduct)
  .delete([authenticateUser, authorizePermissions("admin")], deleteProduct);


  router.route("/:id/reviews").get(getSingleProductReviews);



module.exports = router;
