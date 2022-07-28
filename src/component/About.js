import React,{useState} from 'react'

export default function About() {

    const  [myStyle, setmyStyle] = useState({
      color:'black',
      backgroundColor:'white',
    })
    const  [name, setname] = useState("Enable dark mode")
    const toggleclick=()=>{
      console.log('sdfjsdl;')
      if(myStyle.color==='black'){
        setmyStyle({
          color:'white',
          backgroundColor:'black'
        })
        setname("Enable light mode")
      }
      else{
        setmyStyle({
          color:'black',
          backgroundColor:'white'
        })
        setname("Enable dark mode")
      }
    }

  return (
    <div className='container'  style={myStyle}>
        <div>
        <h1 >About us</h1>
        </div>
       <button className='my-5' onClick={toggleclick} >{name}</button>
    </div>
  )
}
