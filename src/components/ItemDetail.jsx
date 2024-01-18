import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";


const ItemDetail = ({ item }) => {
  const { id } = useParams();


  const itemFilter = item.filter((item) => item.id == id);

  return (
    <>
      {itemFilter.map((item) => (
        <div key={item.id}>
          <Card maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md' color='green'>
                  <Image src={item.imagen} alt={item.nombre} />
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
                id={item.id}
                categoria={item.categoria}
                imagen={item.imagen}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
              />
            </CardFooter>
            <Divider />
          </Card>
        </div>
      ))}
    </>
  )
}

export default ItemDetail;
