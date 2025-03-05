const Route = require("express").Router();
const MenuController = require("./Controller");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });
Route.post("/create", upload.single('logo'),  MenuController.create);
Route.get("/getAllMenu", MenuController.getAllMenu);
Route.delete("/delete/:id", MenuController.delete);
module.exports = Route;
