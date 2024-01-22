import { useContext, useState } from 'react'
import { Button, Text, Input, VStack } from '@chakra-ui/react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'


const FormPedido = () => {

const [ name, setName ] = useState ("")
const [ email, setEmail ] = useState ("") 
const [ orderId, setOrderId ] = useState ("") 


const db = getFirestore()
const ordersCollection = collection(db, "orden")

const askCart = (e) => {
  e.preventDefault()
  
  addDoc(ordersCollection, order).then(({id}) => 
  setOrderId(id))
}

const [ cart, setCart ] = useContext(CartContext)

const order = {
  usuario: { name, email },
  items: cart
}

return (
  <VStack spacing={4} align="center">
    <form onSubmit={askCart} style={{ width: '300px' }}>
      <Input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        mb={2}
        w="100%"
      />
      <Input
        type="email"
        placeholder="eMail"
        onChange={(e) => setEmail(e.target.value)}
        mb={2}
        w="100%"
      />
      <Button type="submit" colorScheme="green" w="100%">
        Enviar
      </Button>
    </form>
    {orderId && (
      <Text mt={4} fontWeight="bold">
        Orden ID: {orderId}
      </Text>
    )}
  </VStack>
);
};

export default FormPedido;

