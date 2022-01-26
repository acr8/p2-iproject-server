const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid Token" });
      break;
    case "TokenExpiredError":
      res.status(401).json({ message: "Token Expired" });
      break;
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "InvalidEmailOrPassword":
      res.status(400).json({ message: "Invalid Email Or Password" });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: "Email Already Exist" });
      break;
    case "EmailIsEmpty":
      res.status(400).json({ message: "Email is required" });
      break;
    case "PasswordIsEmpty":
      res.status(400).json({ message: "Password is required" });
      break;
    case "InvalidAccess":
      res.status(401).json({ message: "Invalid Access" });
      break;
    case "Forbidden":
      res.status(403).json({ message: "Unauthorized" });
      break;
    case "DataNotfound":
      res.status(404).json({ message: "Data not found" });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: err });
      break;
  }
};

module.exports = errorHandler;
