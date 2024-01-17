import { createContext, useState, useEffect } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const initCart = JSON.parse(localStorage.getItem("cart")) || []
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

    const eraseCart = () => {
        setCart([])
    }
    
    const fullPrice = () => {
        return cart.reduce((acu, p) => acu + p.precio * p.counter, 0)
    }
    
    const cartCount = () => {
        return cart.reduce((acu, p) => acu + p.counter, 0)
    }

    const Loader = () => {
    cart.length > 0 ? Loader='False' : Loader='True'
    }
    
    return (
        <CartContext.Provider value={ { cart, setCart, cartCount, fullPrice, eraseCart, addToCart, Loader } }>
            {children}
        </CartContext.Provider>
    )
}