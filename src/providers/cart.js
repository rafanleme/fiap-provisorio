import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = (props) => {

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);