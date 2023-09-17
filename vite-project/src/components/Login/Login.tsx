// import React from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FormEvent, useState,useContext} from 'react'
import {FirebaseContext} from '../../store/firebaseContext'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';




function Login(): JSX.Element {
  const navigate=useNavigate()
  const  {db,auth} =useContext(FirebaseContext)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleLogin=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).
    then((userData)=>{
      console.log(userData.user.uid);
      navigate('/')
    }).
    catch((err)=>{
      if("auth/invalid-email"===err.code){
        console.log("err");
        
      }
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
