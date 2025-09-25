import { createContext, useContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // store multiple orders

  // Add a new order
  const addOrder = (newOrder) => {
    setOrders((prev) => [...prev, newOrder]);
  };

  // Clear all orders (optional, useful for admin  dashboard later on )
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
