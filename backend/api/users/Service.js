const SuperAdmin = require("./model");

const SuperAdminService = {};

SuperAdminService.create = async (name, email, hashedPassword, role) => {
  try {
    const result = await SuperAdmin.create({
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
SuperAdminService.findByEmail = async (email) => {
  try {
    const result = await SuperAdmin.findOne({ email });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = SuperAdminService;
