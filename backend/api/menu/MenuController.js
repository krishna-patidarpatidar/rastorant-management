const fs = require("fs");
const Service = require("./MenuService");
const uploadImage = require("../utils/Cloudinary");
const { v2: cloudinary } = require("cloudinary");

const MenuController = {};

MenuController.create = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    let imageUrl = null;

    if (req.file) {
      const filePath = req.file.path;

      imageUrl = await uploadImage(filePath);

      fs.unlinkSync(filePath);
    }

    const existingMenu = await Service.findByName(name);
    if (existingMenu) {
      return res.status(400).json({ message: "Name already exists" });
    }

    const result = await Service.create(
      name,
      price,
      category,
      description,
      imageUrl
    );

    res.status(201).send({
      msg: "Menu created successfully",
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Something went wrong",
      status: false,
      error: error.message,
    });
  }
};
MenuController.updateMenu = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const { id } = req.params;
    let imageUrl = null;

    if (req.file) {
      const filePath = req.file.path;

      imageUrl = await uploadImage(filePath);

      fs.unlinkSync(filePath);
    }

    const existingMenu = await Service.findByName(name);
    if (existingMenu) {
      return res.status(400).json({ message: "Name already exists" });
    }

    const result = await Service.updateMenu(
      id,
      name,
      price,
      category,
      description,
      imageUrl
    );

    res.status(201).send({
      msg: "Menu updated successfully",
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Something went wrong",
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
      msg: "Something went wrong",
      status: false,
      error: error.message,
    });
  }
};
MenuController.getMenuById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Service.findByID(id);
    res.status(200).send({
      msg: " Menu geted successfully",
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      msg: "Something went wrong",
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
      const publicId = menu.image.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }

    await Service.deleteMenu(id);

    res.status(200).json({ message: "Menu deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

module.exports = MenuController;
