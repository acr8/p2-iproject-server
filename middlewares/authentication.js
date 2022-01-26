const { User } = require("../models/index.js");
const { verifyToken } = require("../helpers/jwt.js");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    const user = await User.findByPk(payload.id);

    req.currentUser = {
      id: user.id,
      email: user.email,
      username: user.username
    };

    if (!user) {
      throw { name: "InvalidAccess" };
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;