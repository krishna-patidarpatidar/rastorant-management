const AdminService = require("./adminUser/Service");
const bcrypy = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const AdminController = {};
AdminController.createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const superAdmin = await AdminService.findByEmail(email);
    if (superAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypy.hash(password, 10);
    const result = await AdminService.create(name, email, hashedPassword, role);
   
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
AdminController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const superAdmin = await AdminService.findByEmail(email);
    if (!superAdmin) {
      return res.status(400).json({ message: "Email not found" });
    }
    const isValidPassword = await bcrypy.compare(password, superAdmin.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: superAdmin }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.send({ msg: " admin login successfully", superAdmin, token });
  } catch (error) {
    res.status(500).send({
      msg: "somthing went wrong",
      status: false,
      error: error.message,
    });
  }
};

module.exports = AdminController;
