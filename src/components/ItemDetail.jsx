import ItemCount from './ItemCount'
import { Container, Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ items }) => {
  
  
  const { id } = useParams()

  const [objeto, setObjeto] = useState([])

  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, "ropa", `${id}`)

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setObjeto(snapshot.data())
      } else {
        console.log("Error: No se encuentra el producto")
      }
    })
  }, [])

  const itemFilter = items.filter((item) => item.id == id)

  return (
    <Container>
      {itemFilter.map((item) => (
        <div key={item.id}>
          <Card maxW='sm' p="4" borderWidth="1px" borderRadius="md">
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Heading size='md' color='green'>
                  <Image src={item.imagen} alt={item.nombre} width="100%" height="auto" />
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
              <ItemCount item={item} />
            </CardFooter>
            <Divider />
          </Card>
        </div>
      ))}
    </Container>
  )
}

export default ItemDetail;
