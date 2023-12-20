import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const productos = [
        { id: 1, categoria: "Calzado", titulo: "Zapatillas", descripcion: "descripción de Zapatillas", valor: 65000 },
        { id: 2, categoria: "Calzado", titulo: "Zapatos", descripcion: "descripción de Zapatos", valor: 45000 },
        { id: 3, categoria: "Vestimenta inferior",  titulo: "Pantalon de vestir", descripcion: "descripción de Pantalon de vestir", valor: 21000 },
        { id: 4, categoria: "Vestimenta inferior",  titulo: "Jean", descripcion: "descripción de Jean", valor: 25000 },
        { id: 5, categoria: "Vestimenta superior",  titulo: "Camisa", descripcion: "descripción de Camisa", valor: 20000 },
        { id: 6, categoria: "Vestimenta superior",  titulo: "Remera", descripcion: "descripción de Remera", valor: 15000 }
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
            <ItemList
                productos={productos}
            />
        </div>
    )
}

export default ItemListContainer;

/* 

*/