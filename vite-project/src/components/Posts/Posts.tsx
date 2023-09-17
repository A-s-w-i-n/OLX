// import React from 'react';
import {collection ,getDocs} from 'firebase/firestore';
import Heart from '../../assets/Heart';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/firebaseContext';
import './Post.css';
import {useEffect,useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Posts(): JSX.Element {
  const {db} =useContext<null|any>(FirebaseContext)
  const {setPost}  =useContext<null|any>(PostContext)
  const [products,setProducts]=useState<any>()
  const navigate=useNavigate()


  useEffect(()=>{
    getDocs(collection(db,'products')).then((data)=>{
      const allPost=data.docs.map((product)=>{
       
        return{
          ...product.data(),id:product.id
          
        } 
      })
      setProducts(allPost)
    })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              {/* <Heart></Heart> */}
            </div>
            <div className="image">
              {/* <img src="\public\Image\R15V3.jpg" alt="" /> */}
            </div>
            {/* <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div> */}
            {/* <div className="date">
              <span>Tue May 04 2021</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {
           
           products?.map((item:any)=>{
            return(
              <div className="card" onClick={()=>{setPost(item); navigate('/viewpost')}}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={item.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{item.price} </p>
              <span className="kilometer">{item.category}</span>
              <p className="name"> {item.name} </p>
            </div>
            <div className="date">
              <span>{item.date}</span>
            </div>
          </div>
            )
            
           })
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
