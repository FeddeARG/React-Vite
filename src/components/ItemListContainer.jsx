import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirInfo } from '../utils/pedirData'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { category } = useParams()

    useEffect(() => {
        pedirInfo()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((prod) => prod.categoria === category))
                } else {
                    setProductos(res)
                }
            })
    }, [category])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;



