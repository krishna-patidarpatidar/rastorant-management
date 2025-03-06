const UserModel = require("./UserModel");

const UserService = {};

UserService.create = async (name, email, hashedPassword, role) => {
  try {
    const result = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
UserService.findByEmail = async (email) => {
  try {
    const result = await UserModel.findOne({ email });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
UserService.getAllUser = async () => {
  try {
    const result = await UserModel.find();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = UserService;
