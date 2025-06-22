import { initializeApp } from "firebase/app";
import { 
        createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth/cordova";
import { 
        addDoc, 
        collection, 
        getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAdBSz9dQUOo19D0LUHAUE3Wik6lKEsq7M",
  authDomain: "netflix-clone-b0b98.firebaseapp.com",
  projectId: "netflix-clone-b0b98",
  storageBucket: "netflix-clone-b0b98.firebasestorage.app",
  messagingSenderId: "935584712090",
  appId: "1:935584712090:web:1f4117f364570dad22a623"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password) => {
    try {
      const res =  await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    } catch (error) {
        console.log(error)  
        toast.error(error.code.split('/')[1].split('_').join(" "));
    }
}

const login = async(email, password) => {
    try {
         await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('_').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout}