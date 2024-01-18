import React from 'react'
import Item from './Item'

const ItemList = ( {items} ) => {

  return (
    <div>
      {items.length > 0 && items.map((item) => {
        return (
          <Item  
          key={item.id}
          categoria={item.categoria} 
          descripcion={item.descripcion}
          imagen={item.imagen}
          nombre={item.nombre}
          stock={item.stock}
          precio={item.precio}
          />
        )
      })
      }
    </div>
  )
}

export default ItemList;