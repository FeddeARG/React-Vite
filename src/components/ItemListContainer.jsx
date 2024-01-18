import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); 
  const { categoria } = useParams()

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "Indumentaria")

    getDocs(itemsCollection).then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(items)
    })
  },[])
  const catFilter = items.filter((item) => item.categoria === categoria);

  console.log(catFilter)
  return (
    <div>
      {categoria ? <ItemList items={catFilter} /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;