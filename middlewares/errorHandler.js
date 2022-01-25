const errorHandler = (err, req, res, next) => {
  // console.log(err, "<=============");
  switch (err.name) {
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid Token" });
      break;
    case "TokenExpiredError":
      res.status(401).json({ message: "Token Expired" });
      break;
    case "SequelizeValidationError":
      // const error = err.errors.map((e) => e.message);
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "InvalidEmailOrPassword":
      res.status(400).json({ message: "Invalid Email Or Password" });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: "Email Already Exist" });
      break;
    case "InvalidEmail":
      res.status(401).json({ message: "Invalid Email Or Password" });
      break;
    default:
      res.status(500).json({ message: err });
      break;
  }
};

module.exports = errorHandler;
