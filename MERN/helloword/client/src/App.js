/* eslint-disable no-undef */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  // eslint-disable-next-line no-unused-vars
  const[ backenddata , setbackenddata]=useState([])


  const[username,setusername]=useState('')

  function senddata(){

    var user={

      username : username
    }
    axios.post('/api/validateusername',user)
    .then(res=>{

      console.log(res);

      setbackenddata(res.data)

    }).catch(err=>{
      console.log(err);    

    })

    
  }
  return (
    <div className="App">

      <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}}/>

      <br/>


      <button onClick={senddata}> SEND DATA TO NODE JS</button>


       <h1>Backend Response <br/>{backenddata}</h1>

      
      
    </div>
  );
}

export default App;
