import React from 'react'
import { useState } from 'react'
import { Button } from '@chakra-ui/react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const mostrarMensaje = () => {
        alert(`${contador} productos agregados al carrito de compras`)
    }
    const resta = () => {
        if (contador > 0) {
            setContador(contador - 1)
        } else {
            alert("No hay productos para quitar")
        }
    }
    const suma = () => {
        if (contador < 10) {
            setContador(contador + 1)
        } else {
            alert("No puede agregar más de 10 unidades")
        }
    }
    return (
        <div>
            <Button colorScheme='red' size='sm' onClick= {resta}>
                -
            </Button>
            <Button colorScheme='blue' size='md' onClick={mostrarMensaje}>
                Agregar al Carrito {contador}
            </Button>
            <Button colorScheme='green' size='sm' onClick={suma}>
                +
            </Button>
        </div>
    )
}

export default ItemCount