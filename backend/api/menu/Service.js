const MenuModel = require("./Model");

const MenuService = {};

MenuService.create = async (name, price, category, description,image) => {
  try {
    const result = await MenuModel.create({
      name, price, category, description,image
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
MenuService.findByName = async (name) => {
  try {
    const result = await MenuModel.findOne({ name });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
MenuService.findByID = async (id) => {
  try {
    const result = await MenuModel.findOne({ _id:id });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

MenuService.findAll = async () => {
  try {
    const result = await MenuModel.find();
    return result;
  }
  catch (error) {
    throw new Error(error);
  }
}
MenuService.deleteMenu = async (id) => {
  try {
    const result = await MenuModel.findByIdAndDelete({_id:id},{new:true});
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = MenuService;
