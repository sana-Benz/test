import React from 'react'
import { useEffect,useState } from 'react'
import { base_url } from './baseUrl';

function App() {
  const [backEndData, setBackEndData] = useState({ users: [] });


  useEffect(()=>{
    fetch(`${base_url}/users`).then(
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
