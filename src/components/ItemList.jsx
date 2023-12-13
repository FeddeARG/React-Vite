import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

  return (
    <div>
      {
        productos.map((p) => {
          return (
            <Item
              key={p.id}
              titulo={p.titulo}
              descripcion={p.descripcion}
              valor={p.valor}
            />
          )
        })
      }
    </div>
  )
}

export default ItemList