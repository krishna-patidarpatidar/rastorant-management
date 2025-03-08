import React from "react";
import { useOrder } from "../context/OrderContext";
const MenuList = ( menuItems ) => {
  const { orders, incrementOrder, decrementOrder } = useOrder();
console.log(menuItems)
  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Menu List</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6  w-full  max-w-7xl">
        {menuItems?.data?.result?.map((item, index) => {
          const orderCount = orders[item.name] || 0; 

          return (
            <div
              key={index}
              className="bg-white rounded-xl w-full shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 text-start">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm text-start">
                  {item.description}
                </p>
                <div className="flex flex-col md:flex-row md:justify-between mt-3 md:space-x-4">
                  <p className="text-gray-900 text-left font-bold mt-2">
                    ₹{item.price}
                  </p>

               
                  {orderCount === 0 ? (
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
                      onClick={() => incrementOrder(item.name)}
                    >
                      Order Now
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2 p-1 rounded-lg">
                      <button
                        className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-md text-lg"
                        onClick={() => decrementOrder(item.name)}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold w-6 text-center">
                        {orderCount}
                      </span>
                      <button
                        className="border px-3 py-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 rounded-md text-lg"
                        onClick={() => incrementOrder(item.name)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
