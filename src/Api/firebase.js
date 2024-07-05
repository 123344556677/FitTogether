import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB30cRzXacCwsmZs_fnb_-gJzadmH4JrPs",
  authDomain: "fittogether-5bb9a.firebaseapp.com",
  projectId: "fittogether-5bb9a",
  storageBucket: "fittogether-5bb9a.appspot.com",
  messagingSenderId: "324390437930",
  appId: "1:324390437930:web:490559f209ff3d44f8ef53",
  measurementId: "G-JGV99HN597"
};


const app = initializeApp(firebaseConfig);


const storage = getStorage(app);

export default storage;