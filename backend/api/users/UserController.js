const UserService = require("./UserService");
const bcrypy = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserController = {};
UserController.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await UserService.findByEmail(email);
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypy.hash(password, 10);
    const result = await UserService.create(name, email, hashedPassword, role);

    res.status(201).send({
      msg: " Admin created Successfully",
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "somthing went wrong",
      status: false,
      error: error.message,
    });
  }
};
UserController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    const isValidPassword = await bcrypy.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.send({ msg: "User login successfully", user, token });
  } catch (error) {
    res.status(500).send({
      msg: "somthing went wrong",
      status: false,
      error: error.message,
    });
  }
};
UserController.getAllUser = async (req, res) => {
  try {
    const result = await UserService.getAllUser();
    res.status(200).send({
      msg: "All Users fetched Successfully",
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "somthing went wrong",
      status: false,
      error: error.message,
    });
  }
};

module.exports = UserController;
