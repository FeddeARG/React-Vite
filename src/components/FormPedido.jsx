import { useState } from 'react'
import { Button, Text, Input } from '@chakra-ui/react'
import { addDoc, getFirestore, collection } from 'firebase/firestore'


const FormPedido = () => {

const [ nombre, setNombre ] = useState ("")
const [ email, setEmail ] = useState ("") 
const [ orderId, setOrderId ] = useState ("") 

const db = getFirestore()

const askCart = (e) => {
  e.preventDefault()
  
  addDoc(ordersCollection, order).then(({id}) => 
  setOrderId(id))
}

const order = {
  nombre,
  email
}
const ordersCollection = collection(db, "orden")
  return (
    <div>
    
    <form action="" onSubmit={askCart}>
    <input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)}/>
    <input type="email" placeholder='eMail'onChange={(e) => setEmail(e.target.value)}/>
    <button type='submit'>Enviar</button>
    </form>
    <p>{orderId}</p>
    </div>
  )
}

export default FormPedido

