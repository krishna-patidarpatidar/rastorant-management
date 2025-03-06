const TableModel = require("./TableModel");

const TableService = {};
TableService.createTable = async (tableNo, type) => {
  try {
    const table = TableModel.create({ tableNo, type });
    return table;
  } catch (err) {
    return err;
  }
};
TableService.findByName = async (tableNo) => {
  try {
    const table = await TableModel.findOne({ tableNo });
    return table;
  } catch (err) {
    return err;
  }
};
TableService.getAllTable = async () => {
  try {
    const tables = await TableModel.find();
    return tables;
  } catch (err) {
    return err;
  }
};
module.exports = TableService;
