import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrl34CycYO2Irn8E3HTRPvViE2GR6U_v4",
  authDomain: "synclayer-847be.firebaseapp.com",
  projectId: "synclayer-847be",
  storageBucket: "synclayer-847be.firebasestorage.app",
  messagingSenderId: "784555160902",
  appId: "1:784555160902:web:a13ae504e3c0842a9a2147",
  measurementId: "G-26RWXXKK6L",
};

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };
