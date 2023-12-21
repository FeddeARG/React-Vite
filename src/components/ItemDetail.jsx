import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ( {item} ) => {
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
          <ItemCount />
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default ItemDetail
