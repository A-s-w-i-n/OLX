import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/firebaseContext'
import {ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import {addDoc,collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'





const Create: React.FC = () => {
  const {db,storage} =useContext(FirebaseContext)
  const date = new Date().toLocaleString()
  const {user} =useContext(AuthContext)
  const [name,setName]=useState<string>('')
  const [category,setCategory]=useState<string>('')
  const [price,setPrice]=useState<number>()
  const [image,setImage]=useState<any>()
  const navigate = useNavigate()
  const handleSubmit = ()=>{

    const storageRef=ref(storage,'image/'+image.name)
    uploadBytes(storageRef,image).then((reff)=>{
      getDownloadURL(reff.ref).then((url)=>{
        console.log("aaa");

        addDoc(collection(db,'products'),{
          name,
          category:category,
          price,
          url,
          userId:user.uid,
          createdAt:date,
        }).then(()=>{
          navigate('/')
          console.log(("success"));
          

        })
        
      })
    })

  }
  return (
    <Fragment>
      <Header />
      {/* <card> */}
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name="Name"
            
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
             type="number"
              id="fname"
              value={price}
              onChange={(e)=>setPrice(parseInt(e.target.value))}
               name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : "" } />
          
            <br />
            <input onChange={(e)=>setImage(e.target.files?.[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      {/* </card> */}
    </Fragment>
  );
};

export default Create;
