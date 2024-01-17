import React, { useContext, useState } from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'


const ItemDetail = ({ item }) => {

  const { cart, addToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(1)

  const min = () => counter > 1 && setCounter(counter - 1)

  const sum = () => counter < item.stock && setCounter(counter + 1)

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='green'>
              <img src={item.imagen} alt={item.nombre} />
              <br />
              <br />
              <p>Producto: {item.nombre}</p>
            </Heading>
            <Text color='blue'>Categoría: {item.categoria}</Text>
            <Text color='blue'>Descripción: {item.descripcion}</Text>
            <Text color='blue'>Precio: ${item.precio}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ItemCount
            counter={counter}
            addToCart={()=> {addToCart(item, counter)} }
            sum={sum}
            min={min}
            stock={item.stock}
          />
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default ItemDetail;
