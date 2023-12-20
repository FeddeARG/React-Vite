import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({ titulo, categoria}) => {
  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              Título: {titulo}
            </Heading>
            <Text>Categoría: {categoria}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
        <Link to={"/detail"} >
        <Button>más detalles</Button>
        </Link>
        </CardFooter>
        <Divider />
      </Card>
    </div>
  )
}

export default Item

