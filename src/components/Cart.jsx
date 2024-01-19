import { React, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Card, Stack, Heading, Text, CardFooter, Divider, Box, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom'



const Cart = () => {

  const { cart, setCart } = useContext(CartContext)

  const clearCart = () => {
    setCart([])
  }


  return (
    <div>
      <br/>
      <Heading size='md' color='green'>
        <p>SHOPPING CART</p>
      </Heading>
      <br/>
      <br/>
      {
        cart.map((p) => (
          <div key={p.id}>
            <Divider orientation='horizontal' />
            <Card>
            <Box backgroundColor='#f1ecfd'>
              <Stack>
                <Heading color='#778751' size='md'>Nombre del producto: {p.nombre}</Heading>
                <Heading color='#778751' size='md'>Precio unitario : ${p.precio}.-</Heading>
                <Heading color='#778751' size='md'>Cantidad : {p.counter}.-</Heading>
                <Heading color='#778751' size='md'>Precio total : ${p.precio * p.counter}.-</Heading>
              </Stack>
              <CardFooter>
                <BtnsCart />
              </CardFooter>
            </Box>
            </Card>
            <Divider orientation='horizontal' />
            <br />
            <br />
          </div> 
        ))
      }
      <Text>PRECIO TOTAL: ${fullPrice()}</Text>
      <Button onClick={clearCart}>Vaciar Carrito</Button>
    </div>
  )
}

export default Cart;