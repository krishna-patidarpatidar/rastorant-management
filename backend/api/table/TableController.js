const TableService = require("./TableService");

const TableController = {};

TableController.createTable = async (req, res) => {
  const { tableNo, type } = req.body;
  const table = await TableService.findByName(tableNo);
  if (table) {
    return res.status(400).json({ message: "Table already exists" });
  }
  try {
    const table = await TableService.createTable(tableNo, type);
    res.send({ status: true, msg: "Table created successfully", table });
  } catch (err) {
    res.send({ status: false, msg: "Error creating table", err });
  }
};
TableController.getAllTable= async (req ,res)=>{
    try {
        const table = await TableService.getAllTable()
        res.send({status:true, msg:"Table geted successfully",table})
    } catch (err) {
    res.send({ status: false, msg: "Error creating table", err });
        
    }
}

module.exports = TableController;
