import './App.css';
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Player from "./pages/Player/Player.jsx";
import {Routes,Route, useNavigate} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase.js';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("loged in");
        Navigate('/');
      }
      else{
        console.log("loged out");
        Navigate('/Login');
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Player/:id' element={<Player/>}/>
    </Routes>  
    </div>
  );
}

export default App;
