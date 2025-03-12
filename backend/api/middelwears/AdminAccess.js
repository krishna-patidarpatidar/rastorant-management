const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .send({ status: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.user.role === "Admin") {
      req._id = decoded.user._id;
      req.user = decoded.user;

      next();
    }
    res.status(401).send({
      status: false,
      msg: "User is not Admin",
    });
  } catch (error) {
    return res
      .status(401)
      .send({ status: false, message: "Unauthorized access" });
  }
};

module.exports = UserAuth;
