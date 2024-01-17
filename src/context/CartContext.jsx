import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

    const initCart = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addToCart = (item, counter) => {
        const itemAdd = { ...item, counter }
        
        const newCart = [...cart]
        const isInCart = newCart.find((p) => p.id === itemAdd.id)

        if (isInCart) {
            isInCart.counter += counter
        } else {
            newCart.push(itemAdd)
        }
        setCart(newCart)

    }

    const cartCount = () => {
        return cart.reduce((acu, p) => acu + p.counter, 0)
    }

    const fullPrice = () => {
        return cart.reduce((acu, p) => acu + p.precio * p.counter, 0)
    }

    const eraseCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={ { cart, setCart, cartCount, fullPrice, eraseCart, addToCart } }>
            {children}
        </CartContext.Provider>
    )
}