import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { login,Signup } from '../../Firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"
const Login = () => {

  const [signstate,setsignstate] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setloading] = useState(false);
  const user_auth=async(event)=>{
      event.preventDefault();
      setloading(true);
      if(signstate==="Sign In"){
      await login(email,password);
      }
      else{
      await Signup(name,email,password);
      }
      setloading(false);
  }

  return (
   loading?<div className='loading-spinner'>
      <img src={netflix_spinner} alt="" />
   </div>:
    <div className='login'>
       <img src={logo} alt="" className='logo'/>
       <div className="Login-form">
          <h1>{signstate}</h1>
          <form action="">
             <div className="inp">
                {signstate==="Sign Up"?
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name' className='text'/>:<></>}
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' className='email'/>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='password'/>
                <button onClick={user_auth} type='submit'>{signstate}</button>
             </div>
             <div className="form-help">
                <div className="remember">
                  <input type="checkbox" />
                  <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help?</p>
             </div>
          </form>
          <div className="form-switch">
            {signstate==="Sign In"?<p>New To Netflix? <span onClick={()=>{setsignstate("Sign Up")}}>Sign Up Now</span></p>:<p>Aleardy Have Account? <span onClick={()=>{setsignstate("Sign In")}}>Sign In Now</span></p>}
          </div>
       </div>
    </div>
  )
}

export default Login
