import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx'
import Cart from './components/Cart.jsx';
import React from 'react'


const App = () => {

  return (
    <BrowserRouter>
      <NavBar />  
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoria" element={<ItemListContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
