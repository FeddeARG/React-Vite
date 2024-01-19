import { React, useContext, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { CartContext} from '../context/CartContext'


const ItemCount = ( item ) => {

    const {cart, setCart} = useContext(CartContext);
    const [counter, setCounter] = useState(1);
  
    const sum = () => {
      setCounter(counter + 1);
    };
  
    const min = () => {
      setCounter(counter - 1);
    };
  
    const addToCart = () => {
      const itemAdd = {...item.item, counter}
      const newCart = [...cart]
      const isInCart = newCart.find((item) => item.id === id);
       
      if (isInCart) {
        isInCart.counter = isInCart.counter + counter
        setCart(newCart)
      }else {
        setCart ( [...cart, itemAdd] )
      }
    };

    return (
        <div>
            {counter > 0 ? <Button colorScheme='red' size='sm' onClick={min}>Quitar</Button> : <Button disabled>Quitar</Button>}
            <Button colorScheme='blue' size='md' onClick={addToCart}>
                Agregar al Carrito {counter}
            </Button>
            {counter < stock ? <Button colorScheme='green' size='sm' onClick={sum}>Agregar</Button> : <Button disabled>Agregar</Button>}
        </div>

    )
}

export default ItemCount;