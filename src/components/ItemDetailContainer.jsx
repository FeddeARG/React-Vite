import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {pedirDataId} from '../functions/pedirData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  
    const [item, setItem] = useState(null)
    const id = useParams().id
    
    useEffect(() => {
        pedirDataId(Number(id))
            .then((res) => {
                setItem(res)
            })
    },[id])
    
    return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer