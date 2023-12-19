import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

const ItemList = ({ productos }) => {

  return (
    <div>
      <Link to={"/"}>
        <p>AspenGrowShop</p>
      </Link>
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