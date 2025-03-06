const OrderService = require("./OrderService");

const OrderController = {};

OrderController.createOrder = async (req, res) => {
console.log("first")
  const { orderProducts, orderStatus, tableId } = req.body;
  if (!orderProducts || !tableId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const order = await OrderService.createOrder(
      orderProducts,
      orderStatus,
      tableId
    );
    res.send({ status: true, message: "Order created successfully", order });
  } catch (error) {
    res.send({
      status: false,
      message: "Order not created",
      error: error.message,
    });
  }
};

OrderController.getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrders();
    if (!orders || orders.length === 0) {
        return res.status(404).send({
          status: false,
          message: "No orders found",
        });
      }
  
      const ordersWithTotalPrice = orders.map((order) => {
        const orderTotal = order.orderProducts.reduce((total, ord) => {
          return total + (ord.quantity * (ord.productId?.price || 0));
        }, 0);
  
        return {
          ...order.toObject(),
          totalPrice: orderTotal, 
        };
      });
  
      const overallTotalPrice = ordersWithTotalPrice.reduce((sum, order) => sum + order.totalPrice, 0);
  
      res.send({
        status: true,
        message: "Orders retrieved successfully",
        orders: ordersWithTotalPrice,
        overallTotalPrice, 
      });
  } catch (error) {
    res.send({
      status: false,
      message: "Orders not retrieved",
      error: error.message,
    });
  }
};
OrderController.getByTableId = async (req, res) => {
    const { tableId } = req.params;
  try {
    const orders = await OrderService.getOrdersBytableId(tableId);
    let totalPrice = orders.orderProducts.reduce((total, ord) => {
        return total + (ord.quantity * (ord.productId?.price || 0));
    }, 0);
    res.send({
      status: true,
      message: "Orders retrieved successfully",
      orders,
      totalPrice
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Orders not retrieved",
      error: error.message,
    });
  }
};

module.exports = OrderController;
