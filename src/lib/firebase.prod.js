const { initializeApp } = require("firebase/app")
const { getFirestore, collection, addDoc } = require("firebase/firestore")
const {getAuth} = require("firebase/auth")

const config = {
  apiKey: "AIzaSyCxslvmOFZWSPoqSaRsvJHyuflQUgwtsD0",
  authDomain: "netflix-ff74d.firebaseapp.com",
  projectId: "netflix-ff74d",
  storageBucket: "netflix-ff74d.appspot.com",
  messagingSenderId: "1076452249235",
  appId: "1:1076452249235:web:35e769dc4a7ad350ae0766"
}

const firebase = initializeApp(config);
const db = getFirestore();

//Uncomment this if want to write document into database
// series.forEach(( async (el) => {
// try {
//   const docRef = await addDoc(collection(db, "films"), {
//     ...el
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }}))
export {firebase}




