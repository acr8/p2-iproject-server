const { User } = require("../models/index.js");
const { OAuth2Client } = require("google-auth-library");
const { compareHash } = require("../helpers/bcrypt.js");
const { createToken } = require("../helpers/jwt.js");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const response = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({id: response.id, email: response.email});
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await User.findOne({where: {email}})

      if (!email) { throw { name: "EmailIsEmpty" };}
      if (!password) { throw { name: "PasswordIsEmpty" };}

      if (!userData || !compareHash(password, userData.password)) {
        throw { name: "InvalidEmailOrPassword" };
      }

      const payload = {
        id: userData.id,
        email: userData.email,
        username: userData.username
      }

      const token = createToken(payload)

      res.status(200).json({
        id: payload.id,
        username: payload.username,
        access_token: token, 
        email: payload.email
      })

      res.status(200).json({})
    } catch(err) {
      next(err)
    }
  } 

  static async googleSignIn(req, res, next) {
    try {
      const { token } = req.body;

      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      let [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          username: payload.name,
          email: payload.email,
          password: "password",
        },
      });
      const userPayload = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      const userToken = createToken(userPayload);

      res.status(200).json({
          access_token: userToken,
          id: userPayload.id,
          email: userPayload.email,
          username: userPayload.username,
        });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;