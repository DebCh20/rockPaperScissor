import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepageContainer' style={{width:'100%'}}>
        <h1 style={{color:'white', fontFamily:'Verdana', fontSize:'120px', textAlign:'center'}}>Rock. Paper. Scissor.</h1>
        <h3 style={{textAlign:'center',color:'white', fontFamily:'Verdana', fontWeight:'lighter'}}>The childhood game now got even more interesting !!</h3>
        <br/>
        <button style={{position:"absolute", left:"45%", cursor:"pointer", marginBottom:"20px"}}
        onClick={()=>{
            
        }}
        className='playBtn'>Play now</button>
       
    </div>
  )
}

export default Homepage