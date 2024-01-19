import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Loader from './Loader'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "Indumentaria", `${id}`);
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setItem(doc)
        setLoading(false)
      }
    });
  }, []);

  if (loading === true) {
    return <Loader />
  } else {
    return (
      <div>
        {item && <ItemDetail item={item} />}
      </div>
    )
  }
};

export default ItemDetailContainer;
