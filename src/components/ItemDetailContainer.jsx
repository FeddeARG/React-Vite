import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    
      const db = getFirestore();
      const itemsCollection = collection(db, "ropa");
      getDocs(itemsCollection).then((querysnapshot) => {
        const items = querysnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setItem(items)
      })
    },[])

  return <ItemDetail items={item} />
};

export default ItemDetailContainer;
