
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemList from './components/ItemList.jsx';
import Cart from './components/Cart.jsx';



import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import ItemDetail from './components/ItemDetail.jsx';

const App = () => {    /* Pascalcase*/

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/itemlist' element={<ItemList />} />
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/detail' element={<ItemDetail />}></Route>
      </Routes>
    </BrowserRouter>
    
  )
  
}

export default App;