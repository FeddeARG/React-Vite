import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from './Loader'

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Indumentaria")

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setItems(docs)
      setLoading(false)
    })
  }, [])
  const filter = items.filter((item) => item.categoria === categoriaId);
  if (loading === true) {
    return <Loader />
  } else {
    return (
      <div>
        {categoriaId ? <ItemList items={filter} /> : <ItemList items={items} />}
      </div>
    )
  }
};

export default ItemListContainer;