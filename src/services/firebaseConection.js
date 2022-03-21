import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBYWxGCAeTnEQvP1FzLAcxAhhO00pDVOWo",
    authDomain: "kpis-app-511b3.firebaseapp.com",
    projectId: "kpis-app-511b3",
    storageBucket: "kpis-app-511b3.appspot.com",
    messagingSenderId: "813750779596",
    appId: "1:813750779596:web:6bb53b29327ad9d178cc69",
    measurementId: "G-21RY7YXY3S"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)