const axios = require("axios");
const { Op } = require("sequelize");
const { Cart } = require("../models/index");

class Controller {
  static async getProduct(req, res, next) {
    try {
      let filter = {
        offset: 4,
        limit: 9,
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
      const response = await axios.get(`https://fakestoreapi.com/products`);

      const productId = +req.params.productId;

      const product = response.data.map((product) => {
        if (productId === +product.id) {
          return product;
        }
      });
      if (product.length === 0) {
        throw { name: "DataNotFound" };
      } else {
        await Cart.create({
          userId: req.currentUser.id,
          productId: productId,
        });
        res
          .status(201)
          .json({ message: `Item has been added to your shopping cart` });
      }
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
          message: `You have successfully checkout from your shopping cart`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
