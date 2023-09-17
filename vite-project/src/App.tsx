import React, { useEffect,useContext } from 'react';
import './App.css';
import Home from './Pages/home';
import {BrowserRouter as Router,Routes,Route} from    'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import  Create from './Pages/Create'
import   ViewPost from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/firebaseContext'
import { auth } from './FireBase/config';
import Post from './store/PostContext'


function App(): JSX.Element {
  const {setUser} =useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)

    })
       
        
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route  path='/' element={ <Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/viewpost' element={<ViewPost/>}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
