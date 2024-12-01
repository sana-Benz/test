import React from 'react'
import { useEffect,useState } from 'react'
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [backEndData, setBackEndData] = useState({ users: [] });


  useEffect(()=>{
    fetch("`${API_URL}`/users").then(
      response => response.json()
    ).then(
      data => {
        setBackEndData(data)
      }
    )
  },[])
  return (
    <div>
      {(typeof backEndData === 'undefined') ? (
        <p>Loading ...</p>
      ):[
        backEndData.users.map((user,i)=>(
          <p key={i}>{user}</p>
        ))
      ]}
    </div>
  )
}

export default App
