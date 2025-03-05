const Router = require('express').Router();
const MenuRoute = require('./menu/Route');
Router.use('/menu',MenuRoute);
module.exports = Router;
