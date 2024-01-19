import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Container, Card, Stack, Heading, CardFooter, Divider, Box, Button } from '@chakra-ui/react'




const Cart = () => {

  const [cart, setCart] = useContext(CartContext)

  const clearCart = () => {
    setCart([])
  }


  return (
    <div>
      <br />
      <Heading size='md' color='green'>
        <p>SHOPPING CART</p>
      </Heading>
      <br />
      <br />
      {cart.map((item) => {
          return (
            <Container key={item.id}>
              <Divider orientation='horizontal' />
              <Card>
                <Box backgroundColor='#f1ecfd'>
                  <Stack>
                    <Heading color='#778751' size='md'>Nombre del producto: {item.nombre}</Heading>
                    <Heading color='#778751' size='md'>Precio unitario : ${item.precio}.-</Heading>
                    <Heading color='#778751' size='md'>Cantidad : {item.stock}.-</Heading>
                  </Stack>
                  <CardFooter>
                    <Button onClick={() => eraseItem(item.id)}>Eliminar</Button>
                  </CardFooter>
                </Box>
              </Card>
              <Divider orientation='horizontal' />
              <br />
              <br />
            </Container>
          )
      })}

      <Button onClick={clearCart}>Vaciar Carrito</Button>
    </div>
  )
}

export default Cart;