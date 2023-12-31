const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productController");

const router = express.Router();


//Get all Products from inventory
router.route("/products").get(getAllProducts);


//Create a new product
router.route("/product/new").post(createProduct);


module.exports = router;