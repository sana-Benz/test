import React from 'react'
import { useEffect,useState } from 'react'

function App() {
  const [backEndData, setBackEndData] = useState({ users: [] });


  useEffect(()=>{
    fetch("/api").then(
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
