import { React, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Card, Image, Stack, Heading, Text, CardFooter, Divider, Box, Button } from '@chakra-ui/react'



const Cart = () => {

  const { cart, fullPrice, eraseCart } = useContext(CartContext)

  const clearCart = () => {
    eraseCart()
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