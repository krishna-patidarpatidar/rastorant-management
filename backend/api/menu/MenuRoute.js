const Route = require("express").Router();
const MenuController = require("./MenuController");
const upload = require("../middelwears/multer");

Route.post("/create", upload.single("logo"), MenuController.create);
Route.get("/getAllMenu", MenuController.getAllMenu);
Route.delete("/delete/:id", MenuController.delete);
Route.put("/updateMenu/:id", upload.single("logo"), MenuController.updateMenu);
Route.get('/getMenuById/:id',MenuController.getMenuById)
module.exports = Route;
