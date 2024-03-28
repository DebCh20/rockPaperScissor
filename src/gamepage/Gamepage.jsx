import React from 'react'
import '../homepage/Homepage.css'
function Gamepage() {
  return (
    <div className='outerContainer'
    style={{display:"flex", gap:"20px", alignItems:'center'}}>
        <div className='cards' 
        style={{height:'70vh', width:"20vw", border:"2px solid red",
        display:"flex", flexDirection:"column", gap:"20px" }}>
            <button style={{height:"10%", marginTop:"90px"}}>Rock</button>
            <button style={{height:"10%", marginTop:"10px"}}>paper</button>
            <button style={{height:"10%", marginTop:"10px"}}>scissor</button>
        </div>
        <div className='cards' 
        style={{height:'70vh', width:"20vw", border:"2px solid red"}}></div>
    </div>
  )
}

export default Gamepage