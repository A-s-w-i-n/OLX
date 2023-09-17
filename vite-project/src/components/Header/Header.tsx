// import React from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {useContext} from 'react'
import { AuthContext, FirebaseContext } from '../../store/firebaseContext';
import { auth } from '../../FireBase/config';
import { useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const {user}= useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext) 
  const navigate=useNavigate()

  const handleSignout=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    try{
      auth.signOut().then(()=>{
        navigate('/login')
        
      })
    }
      catch(err){
        console.log(err);
        
      } 
    }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={()=>user? "":navigate('/login')}>{user ?  `Welcome ${user.displayName}` :"login"}</span>
          <hr />
        </div>
        <span className='logout' onClick={handleSignout}>{user?"Logout":null}</span>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>user ?navigate('/create'):''} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
