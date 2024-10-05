import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
        apiKey: "AIzaSyA5SvDkz6rYV7tEcoO22WoaXVQAghr8suI",
        authDomain: "netflix-clone-baf43.firebaseapp.com",
        projectId: "netflix-clone-baf43",
        storageBucket: "netflix-clone-baf43.appspot.com",
        messagingSenderId: "14294120809",
        appId: "1:14294120809:web:b8cbde07467265ac7725f8"
};
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db =getFirestore(app);

const Signup =async (name,email,password)=>{
  try {
    const res =await createUserWithEmailAndPassword(auth,email,password);
    const user =res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email,
    })
  } catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login=async(email,password)=>{
      try {
        await signInWithEmailAndPassword(auth,email,password);
      } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}

const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signOut,Signup,logout};