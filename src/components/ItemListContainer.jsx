import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from './Loader'

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();

      const itemsCollection = collection(db, "ropa")
      try {
        const snapshot = await getDocs(itemsCollection);
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setItems(docs)
        setLoading(false)
      } catch (error) {
        console.log("Error obteniendo información:", error)
      }
    }
    fetchData()
  }, [])

  const filter = items.filter((item) => item.categoria.toLowerCase() === categoryId);
  if (loading === true) {
    return <Loader />
  } else {
    return (
      <div>
        {categoryId ? <ItemList items={filter} /> : <ItemList items={items} />}
      </div>
    )
  }
};

export default ItemListContainer;