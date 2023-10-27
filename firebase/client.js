import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCaXqGTyO316m8jKFQX6T9BgIQkyq2dek",
  authDomain: "sistema-materiales-6aeff.firebaseapp.com",
  projectId: "sistema-materiales-6aeff",
  storageBucket: "sistema-materiales-6aeff.appspot.com",
  messagingSenderId: "624829203063",
  appId: "1:624829203063:web:8614c665d9fc5d31063c72",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
