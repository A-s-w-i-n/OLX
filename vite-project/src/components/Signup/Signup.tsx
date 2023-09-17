import React from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {useState,FormEvent,useContext} from 'react'
import { FirebaseContext } from '../../store/firebaseContext'; 
import { useNavigate } from 'react-router-dom';
import {addDoc,collection} from 'firebase/firestore'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth/cordova';


const Signup: React.FC = () => {
  const navigate=useNavigate()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {db,auth} =useContext(FirebaseContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((UserCredential) => {
      const user = UserCredential.user;
    
      updateProfile(user, {
        displayName: username,
      }).then(() => {
        console.log("success");
        console.log(user);
        
        addDoc(collection(db, "users"), {
          id: user.uid,
          username: username,
          email: email,
          password: password,
          phone: phone,
        })
          .then((docRef) => {
            console.log("user added to firestore", docRef.id);
            navigate('/login');
          })
          .catch((err) => {
            console.log("adding user error", err);
          });
      });
    });
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>navigate('/login')}>Login</a>
      </div>
    </div>
  );
};

export default Signup;
