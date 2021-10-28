import { useState, useEffect } from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
export const useContent = (target) => {
    const [content, setContent] = useState([])
    const db = getFirestore();
    useEffect(()=>{
        const q = query(collection(db, "series"));
        getDocs(q).then((querySnapshot) => {
            const allContent = []
            querySnapshot.forEach((doc) => (
                allContent.push({
        // doc.data() is never undefined for query doc snapshots
            ...doc.data(),
            docID: doc.id,
            })))
            setContent(allContent)
        });
        
    
    },[])
    return {[target] : content}
}