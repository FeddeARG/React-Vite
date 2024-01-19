import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {


  return (
    <>
        {items.length > 0 && items.map((item) => {
          return (
            <div key={item.id}>
            <Item
              
              categoria={item.categoria}
              descripcion={item.descripcion}
              imagen={item.imagen}
              nombre={item.nombre}
              stock={item.stock}
              precio={item.precio}
              item={item}
            />
            </div>
          )
        })
        }
    </>
  )
}

export default React.memo(ItemList)