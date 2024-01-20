import React from 'react';
import { Image, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, categoria, imagen }) => {
  return (
    <div key={id}>
      <Card maxW='sm' p="4" borderWidth="1px" borderRadius="md">
        <CardBody>
          <Stack spacing='4'>
            <Image src={imagen} alt={nombre} borderRadius='md' />
            <Heading size='md' color='green'>
              {nombre}
            </Heading>
            <Text fontSize='lg' color='blue'>
              Categoría: {categoria}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Link to={`/item/${id}`}>
            <Button colorScheme='teal' variant='outline' size='sm'>
              Más detalles
            </Button>
          </Link>
        </CardFooter>
        <Divider mt='4' />
      </Card>
    </div>
  );
}

export default Item;

