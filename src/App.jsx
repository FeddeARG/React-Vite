
import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartWidget from './components/CartWidget.jsx';
import ItemList from './components/ItemList.jsx';



const App = () => {    /* Pascalcase*/

  const greeting = "   Bienvenidos a mi eCommerce";
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<main />} />
        <Route path='/cart' element={<CartWidget />} />
        <Route path='/itemlist' element={<ItemList />} />
      </Routes>
      <ItemListContainer
        greeting={greeting}
      />
    </BrowserRouter>
  )
}

export default App;