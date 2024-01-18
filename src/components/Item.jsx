import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ( { id, categoria, imagen, nombre, precio, stock } ) => {

  return (
    <div key={id}>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='green'>
              <img src={imagen} alt={nombre} />
              <p>Producto: {nombre}</p>
            </Heading>
            <Text color='blue'>Categoría: {categoria}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${id}`} >
            <Button>más detalles</Button>
          </Link>
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default React.memo(Item);

