import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {getCat} from '../utils/getData'
import ItemList from './ItemList'


const ItemListContainer = () => {

    const [ productos, setProductos ] = useState([])
    const { catId } = useParams()
   
    useEffect(() => {
        getCat()
            .then((res) => {
                if (catId){
                    setProductos(res.filter((prod) => prod.categoria === catId))
                 }else {
                    setProductos(res)
                 }   
            })
    }, [catId])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer;
