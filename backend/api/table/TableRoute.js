const TableController = require('./TableController')

const Route = require('express').Router()

Route.post("/createTable",TableController.createTable)
Route.get("/getAllTable",TableController.getAllTable)

module.exports = Route;