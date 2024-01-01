const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");

const router = express.Router();


//Get all Products from inventory
router.route("/products").get(getAllProducts);

//Create a new product
router.route("/product/new").post(createProduct);

//Update a product
router.route("/product/:refNumber").put(updateProduct);

//Delete a product
router.route("/product/:refNumber").delete(deleteProduct);

//GET PRODUCT DETAILS
router.route("/product/:refNumber").get(getProductDetails);

module.exports = router;