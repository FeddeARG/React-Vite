import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ( { item } ) => {

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='green'>
              <img src={item.imagen} alt={item.nombre} />
              <p>Producto: {item.nombre}</p>
            </Heading>
            <Text color='blue'>Categoría: {item.categoria}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${item.id}`} >
            <Button>más detalles</Button>
          </Link>
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default Item;

