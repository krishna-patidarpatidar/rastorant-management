const Service = require("./Service");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const MenuController = {};
MenuController.create = async (req, res) => {
  try {
    const { name, price, category, description} = req.body;
    const image = req.file
    ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    : null;
    const superAdmin = await Service.findByName(name);
    if (superAdmin) {
      return res.status(400).json({ message: "Name already exists" });
    }
    const result = await Service.create( name, price, category, description,image);
   
    res.status(201).send({
      msg: " Menu created Successfully",
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
MenuController.getAllMenu = async (req, res) => {
  try {
    const result = await Service.findAll();
    res.status(200).send({
      msg: "All Menus",
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
MenuController.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await Service.findByID(id); 

    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    if (menu.image) {
      const imagePath = path.join(__dirname, "../uploads", path.basename(menu.image));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
 
    const menuData= await Service.deleteMenu(id); 

    res.status(200).json({ message: "Menu deleted successfully" ,menuData});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = MenuController;
