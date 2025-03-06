const { default: mongoose } = require("mongoose");

const TabelSchema = new mongoose.Schema(
  {
    tableNo: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["vip", "normal"],
      required: true,
    },
  },
  { timestamps: true }
);
const Table = mongoose.model("Table", TabelSchema);
module.exports = Table;
