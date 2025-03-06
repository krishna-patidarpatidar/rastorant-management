const route = require("express").Router();
const OrderController = require("./OrderController");
route.post("/createOrder", OrderController.createOrder);
route.get("/getAllOrders", OrderController.getOrders);
route.get("/getAllOrders/:tableId", OrderController.getByTableId);

module.exports = route;
