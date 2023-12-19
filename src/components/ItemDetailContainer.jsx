import React from 'react'
import ItemListContainer from './ItemListContainer'

const ItemDetailContainer = ({ productos }) => {

    const itemDetail = new Promise((resolve, reject) => {

        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            titulo={p.titulo}
                            descripcion={p.descripcion}
                            valor={p.valor}
                        />
                    )
                }))
            }, 2000)
        } else {
            reject("No pudimos encontrar productos")
        }
    })


    itemDetail
        .then((afirmativo) => {
            console.log(afirmativo)     
        })
        .catch((negativo) => {
            console.log(negativo)
        })

    return (
        <
        itemDetail
        />
    )
}

export default ItemDetailContainer;