import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {FirebaseContext} from './store/firebaseContext'
import Context from './store/firebaseContext'
import  {db,auth,storage}  from './FireBase/config'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <FirebaseContext.Provider value={{ db,auth,storage}}>
      <Context>
        {/* <Context> */}
           <App />
        {/* </Context> */}
       
      </Context>
      </FirebaseContext.Provider>
    </React.StrictMode>
  );