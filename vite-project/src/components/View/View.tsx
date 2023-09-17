
import {useContext,useState,useEffect} from 'react'
import {collection,getDocs,query,where,} from 'firebase/firestore'
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails ,setUserDetails]=useState<any>()
  const {post} =useContext({...PostContext})
  const {db} =useContext(FirebaseContext)
   console.log(userDetails);
   
  
  
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (post && post.userId) {
        const userQuery = query(
          collection(db, 'user'),
          where('id', '==', post.userId)
        );

       
          const querySnapshot = await getDocs(userQuery);
          querySnapshot.forEach((doc) => {
            setUserDetails(doc.data());
            console.log(doc.data,"DOC DATA");
            
          });
       
      }
    };

    fetchUserDetails();
  }, [post.userId]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span>{post.name}</span>
          <p>{post.category}</p>
          <span>{post.date}</span>
        </div>
        {/* {  <div  className="contactDetails">
         
          <p></p>
          <p></p>
          
        </div>} */}
      </div>
    </div>
  );
}
export default View;