const Route = require("express").Router();
const UserController = require("./UserController");
Route.post('/createUser',UserController.createUser)
Route.post('/loginUser',UserController.login)
Route.post('/getAllUser',UserController.getAllUser)
module.exports = Route;
