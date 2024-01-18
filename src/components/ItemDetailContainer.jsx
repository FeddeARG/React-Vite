import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState([]);


  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "Indumentaria", `${id}`)
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        prodFiltrado ({ id: snapshot.id, ...snapshot.data() })
      }
    });
  }, []);

  return (
    <ItemDetail item={item} />
  )

}

export default ItemDetailContainer;