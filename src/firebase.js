import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaf3cNrmwUbqDrpFd88x-pFmXjVePixo4",
  authDomain: "react-app-fc513.firebaseapp.com",
  projectId: "react-app-fc513",
  storageBucket: "react-app-fc513.appspot.com",
  messagingSenderId: "915736208050",
  appId: "1:915736208050:web:0dfbf18950e65929499fab",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
