const axios = require("axios");
const { Op } = require("sequelize");
const { Cart } = require("../models/index");

class Controller {
  static async getProduct(req, res, next) {
    try {
      let filter = {
        // limit: 10,
      };

      if (req.query.sort) {
        filter.where.sort = req.query.sort;
      }

      if (req.query.limit) {
        filter.where.limit = req.query.limit;
      }

      const response = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
        params: filter,
      });

      res.status(200).json(response.data);
    } catch (err) {
      next(err);
    }
  }

  static async getProductById(req, res, next) {
    try {
      const id = req.params.productId;
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      if (!response) {
        throw { name: "DataNotFound" };
      } else {
        res.status(200).json(response.data);
      }
    } catch (err) {
      next(err);
    }
  }

  static async getProductCategories(req, res, next) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/categories`
      );
      res.status(200).json(response.data);
    } catch (err) {
      next(err);
    }
  }

  static async getProductsByCategory(req, res, next) {
    try {
      const categoryName = req.params.categoryName;
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      res.status(200).json(response.data);
    } catch (err) {
      next(err);
    }
  }

  static async getCart(req, res, next) {
    try {
      const result = await Cart.findAll({
        where: {
          userId: req.currentUser.id,
        },
        attributes: {
          exclude: ["updatedAt"],
        },
        order: [["createdAt", "DESC"]],
      });

      if (!result) {
        throw { name: "DataNotFound" };
      } else {
        res.status(200).json(result);
      }
    } catch (err) {
      next(err);
    }
  }

  static async postCart(req, res, next) {
    try {
      let filter = {
        api_key: process.env.api_key,
        offset: 0,
        limit: 6,
      };

      const responseEtsy = await axios({
        method: "get",
        url: "https://openapi.etsy.com/v2/listings/active",
        params: filter,
      });

      const response = await axios.get(`https://fakestoreapi.com/products`);

      // console.log(response.data.results[0].listing_id);
      const productId = +req.params.productId;

      const productEtsy = responseEtsy.data.results.filter((product) => {
        if (productId === +product.listing_id) {
          return product;
        }
      });
      const product = response.data.filter((product) => {
        if (productId === +product.id) {
          return product;
        }
      });
      // console.log(responseEtsy.data.results);
      await Cart.create({
        userId: req.currentUser.id,
        productId: productId,
        productName: product[0].title || productEtsy[0].title,
        price: product[0].price || productEtsy[0].price,
      });
      // console.log(product[0]);
      res
        .status(201)
        .json({ message: `Item has been added to your shopping cart` });

      // if (product.length === 0) {
      //   throw { name: "DataNotFound" };
      // } else {
      //   await Cart.create({
      //     userId: req.currentUser.id,
      //     productId: productId,
      //     productName: product[0].title,
      //     price: product[0].price
      //   });
      //   // console.log(product[0]);
      //   res.status(201).json({ message: `Item has been added to your shopping cart` });
      // }
    } catch (err) {
      next(err);
    }
  }

  static async deleteCart(req, res, next) {
    try {
      const { id } = req.params;
      const findCart = await Cart.findOne({
        where: { id },
      });

      if (!findCart) {
        throw { name: "DataNotFound" };
      } else {
        await Cart.destroy({
          where: { id },
        });
        res.status(200).json({
          message: `You have deleted an item from your shopping cart`,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getEtsyProduct(req, res, next) {
    try {
      let filter = {
        api_key: process.env.api_key,
        offset: 0,
        limit: 6,
      };

      const response = await axios({
        method: "get",
        url: "https://openapi.etsy.com/v2/listings/active?includes=Images",
        params: filter,
      });

      res.status(200).json(response.data);
    } catch (err) {
      next(err);
    }
  }

  static async postTransaction(req, res, next) {
    try {
      let randomNumber = Math.floor(Math.random() * 1000000);
      const {name, price} = req.body
      const midtransClient = require("midtrans-client");
      // Create Snap API instance
      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.serverKey,
        clientKey: process.env.clientKey,
      });

      let parameter = {
        "transaction_details": {
          "order_id": randomNumber,
          "gross_amount": price,
          "productName": name
        },
        "credit_card": {
          "secure": true,
        },
      };

      const response = await snap.createTransaction(parameter)
      console.log(response);
        // let transactionToken = transaction.token;
        // console.log("transactionToken:", transactionToken);

        res.status(200).json(response.redirect_url);
      
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller;
