import React from 'react'
import { Image, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ( { id, nombre, categoria, imagen } ) => {

  return (
    <div key={id}>
      <Card maxW='sm' p="4" borderWidth="1px" borderRadius="md">
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md' color='green'></Heading>
            <Image src={imagen} alt={nombre} width="100%" height="auto" />
              <p>Producto: {nombre}</p>
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

export default Item;

