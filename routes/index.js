const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController")
const authentication = require('../middlewares/authentication.js')
const { cartAuthorization } = require('../middlewares/authorization')

Router.post("/register", userController.register);
Router.post("/login", userController.login);
Router.post("/googleSignIn", userController.googleSignIn);

Router.get("/products", productController.getProduct)
Router.get("/productsEtsy", productController.getEtsyProduct)

Router.post('/transaction', productController.postTransaction)

Router.get("/products/categories", productController.getProductCategories)
Router.get("/cart", authentication, productController.getCart)
Router.get("/productsEtsy/:listingId", productController.getEtsyProductById)
Router.get("/products/:productId", productController.getProductById)
Router.post("/cart/:productId", authentication, productController.postCart)

Router.delete("/cart/:id", authentication, cartAuthorization, productController.deleteCart)
// Router.get("/products/category/:categoryName", productController.getProductsByCategory)


module.exports = Router;