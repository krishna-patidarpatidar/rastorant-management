const Route = require("express").Router();
const superAdminUser = require("../../middelwears/SuperAdminAccess");
const SuperAdminController = require("./Controller");
// Route.post("/create", superAdminUser, SuperAdminController.createAdmin);
// Route.post("/login", SuperAdminController.login);
module.exports = Route;
