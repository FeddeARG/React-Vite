import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

    const productos = [
        { id: 1, titulo: "producto A", descripcion: "descripción del producto A", valor: 1000 },
        { id: 2, titulo: "producto B", descripcion: "descripción del producto B", valor: 1500 },
        { id: 3, titulo: "producto C", descripcion: "descripción del producto C", valor: 2000 }
    ]

    const estadoArray = new Promise((resolve, reject) => {

        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject("No pudimos encontrar productos")
        }
    })

    estadoArray
        .then((afirmativo) => {
            console.log(afirmativo)
        })
        .catch((negativo) => {
            console.log(negativo)
        })

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList
                productos={productos}
            />
        </div>
    )
}

export default ItemListContainer;