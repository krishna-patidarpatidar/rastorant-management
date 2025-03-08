import React, { createContext, useContext, useState } from "react";


const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState({}); 

  const incrementOrder = (name) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [name]: (prevOrders[name] || 0) + 1,
    }));
  };


  const decrementOrder = (name) => {
    setOrders((prevOrders) => ({
      ...prevOrders,
      [name]: Math.max((prevOrders[name] || 0) - 1, 0),
    }));
  };

  return (
    <OrderContext.Provider value={{ orders, incrementOrder, decrementOrder }}>
      {children}
    </OrderContext.Provider>
  );
};


export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
