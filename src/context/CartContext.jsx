import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const cartCount = () => {
        return cart.reduce((acu, item) => acu + item.counter, 0)
    }

    const fullPrice = () => {
        return cart.reduce((acu, item) => acu + item.price * item.counter, 0)
    }

const eraseItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
}
    return (
        <CartContext.Provider value={[cart, setCart, cartCount, fullPrice, eraseItem]}>
            {children}
        </CartContext.Provider>
    )
}