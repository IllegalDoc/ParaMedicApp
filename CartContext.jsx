// CartContext.jsx
import { createContext, useContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{ id, name, price, quantity, ... }]
  const [cartVisible, setCartVisible] = useState(false);

  // Add product with quantity (increments if already present)
  const addToCart = (product, qty = 1) => {
    if (!product || qty <= 0) return;

    setCart((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);

      if (index > -1) {
        // update existing item quantity
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (Number(p.quantity) || 0) + Number(qty) }
            : p
        );
      }

      // add new item with quantity
      return [...prev, { ...product, quantity: Number(qty) }];
    });

    setCartVisible(true); // open drawer when adding
  };

  // Remove qty (default 1). Removes the item entirely if quantity <= 0
  const removeFromCart = (id, qty = 1) => {
    if (!id) return;

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (Number(item.quantity) || 0) - Number(qty) }
            : item
        )
        .filter((item) => Number(item.quantity) > 0)
    );
  };

  // Remove the entire item regardless of quantity
  const removeItem = (id) => {
    if (!id) return;
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
        0
      ),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeItem,
        clearCart,
        totalPrice,
        cartVisible,
        setCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
