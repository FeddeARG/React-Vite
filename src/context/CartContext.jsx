import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([]);
      };
    
      const eraseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);
    
        if (itemIndex !== -1) {
          const newCart = [...cart];
          newCart[itemIndex].stock--;
    
          if (newCart[itemIndex].stock === 0) {
            newCart.splice(itemIndex, 1);
          }
          setCart(newCart);
        }
      };
    
      const increaseOne = (itemId) => {
        const itemIndex = cart.findIndex((item) => item.id === itemId);
    
        if (itemIndex !== -1) {
          const newCart = [...cart];
          newCart[itemIndex].stock++;
    
          if (newCart[itemIndex].stock === 0) {
            newCart.splice(itemIndex, 1);
          }
          setCart(newCart);
        }
      };
    
      const fullPrice = () => {
        if (!Array.isArray(cart) || cart.length === 0) {
          return 0;
        } else {
          const totalPrice = cart.reduce((acu, item) => {
            if (
              typeof item.precio === "number" &&
              typeof item.stock === "number" &&
              item.precio >= 0 &&
              item.stock >= 0
            ) {
              return acu + item.precio * item.stock;
            } else {
              console.warn("Invalid item in cart:", item);
              return acu;
            }
          }, 0);
      
          return totalPrice;
        }
      };

    return (
        <CartContext.Provider value={ [ cart, setCart, fullPrice, increaseOne, eraseOne, clearCart ] }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider