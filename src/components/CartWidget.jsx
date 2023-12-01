import React from 'react'
import { useState } from 'react'

const CartWidget = () => {
    const [contador, setContador] = useState(0)
    return (
        <div>
            <i className="bi bi-cart4">{contador}</i>
            <div>
                <button className="btn btn-success" onClick={() => setContador(contador + 1)}>
                    Añadir al carrito
                </button>
                <button className="btn btn-danger" onClick={() => setContador(contador - 1)}>
                    Quitar del carrito
                </button>
            </div>
        </div>
    )
}

export default CartWidget;