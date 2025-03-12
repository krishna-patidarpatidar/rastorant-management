const Router = require('express').Router();
const MenuRoute = require('./menu/MenuRoute');
const OrderRoute= require('./order/OrderRoute');
const TableRoute = require('./table/TableRoute')
const UserRoute = require('./users/UserRoute')
Router.use('/user',UserRoute)
Router.use('/menu',MenuRoute);
Router.use('/order',OrderRoute);
Router.use('/table',TableRoute);
module.exports = Router;
