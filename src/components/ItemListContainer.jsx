import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {pedirInfo} from '../functions/pedirData'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([])

    const category = useParams().category

    useEffect(() => {
        pedirInfo()
            .then((data) => {
                setProductos(data)   
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer;
