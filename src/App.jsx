
import React from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {    /* Pascalcase*/

  const greeting = "Bienvenidos a mi eCommerce";
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