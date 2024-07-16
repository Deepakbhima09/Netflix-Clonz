import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfl2W_pLjqENpeRC2IzW6Uy4wKYHqY4HY",
  authDomain: "react-netflix-clone-7762e.firebaseapp.com",
  projectId: "react-netflix-clone-7762e",
  storageBucket: "react-netflix-clone-7762e.appspot.com",
  messagingSenderId: "303956609274",
  appId: "1:303956609274:web:7b6b4ad6d287d1c7aea143",
  measurementId: "G-FMC67KFPK8"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
