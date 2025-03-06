const OrderModel = require("./OrderModel");

const OrderService = {};
OrderService.createOrder = async (orderProducts, orderStatus, tableId) => {
  try {
    const order = await OrderModel.create({
      orderProducts,
      orderStatus,
      tableId,
    });
    return order;
  } catch (error) {
    return error;
  }
};
OrderService.getOrders = async () => {
  try {
    const orders = await OrderModel.find().populate("orderProducts.productId");
    return orders;
  } catch (error) {
    return error;
  }
};
OrderService.getOrdersBytableId = async (tableId) => {
  try {
    const orders = await OrderModel.findOne({tableId}).populate("orderProducts.productId");
    return orders;
  } catch (error) {
    return error;
  }
};
module.exports = OrderService;
