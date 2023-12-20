import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'

const ItemList = ({ productos }) => {

  return (
    <div>
      {
        productos.map((p) => {
          return (
            <Item
              key={p.id}
              categoria={p.categoria}
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