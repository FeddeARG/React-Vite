
import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import { ChakraProvider } from '@chakra-ui/react'



const App = () => {    /* Pascalcase*/

  const greeting = "   Bienvenidos a mi eCommerce";
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <ItemListContainer
        greeting={greeting}
      />
    </div>
  )
}

export default App;