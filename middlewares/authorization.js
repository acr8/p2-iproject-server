const { Cart } = require("../models/index.js");

const cartAuthorization = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findByPk(id);
    if (!cart) {
      throw { name: "Forbidden" };
    }
    if (cart.userId !== req.currentUser.id) {
      throw { name: "Forbidden" };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  cartAuthorization,
};
