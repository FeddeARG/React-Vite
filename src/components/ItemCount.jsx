import { useContext, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const ItemCount = ( { id, nombre, precio, stock } ) => {
    const [ cart, setCart ] = useContext(CartContext);
    const [counter, setCounter] = useState(1);

    const sum = () => {
        setCounter(counter + 1);
    };

    const min = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            alert("No hay más productos para quitar del carrito.")
        }
    };

    const addToCart = () => {
        setCart(( cartAtm) => {
        const isInCart = cartAtm.find((item) => item.id === id);
        if (isInCart) {
            return cartAtm.map((item) => {
                if (item.id === id) {
                    return {...item, stock: item.stock + counter}
                } else {
                    return item
                }
            })
        } else {
            return [...cartAtm, { id, stock: counter, precio, nombre}]
        }
    })
}

    return (
        <div>
            <Button colorScheme='red' size='sm' onClick={min} mx="2">
                Quitar
            </Button>
            <Button colorScheme='blue' size='md' onClick={addToCart} mx="2">
                Agregar al Carrito {counter}
            </Button>
            <Button colorScheme='green' size='sm' onClick={sum} mx="2">
                Agregar
            </Button>
        </div>
    );
};

export default ItemCount;
