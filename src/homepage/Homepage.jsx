import React from 'react'
import './Homepage.css';
import { Link, Navigate } from "react-router-dom";

function Homepage() {
  return (
    <div className='homepageContainer' style={{width:'100%'}}>
        <h1 ><span className="line1">Rock. Paper.</span><br/>
          <span className="line2">Scissor.</span></h1>
        <h3 style={{textAlign:'center',color:'white', fontFamily:'Verdana', fontWeight:'lighter'}}>The childhood game now got even more interesting !!</h3>
        <br/>
        <Link style={{textDecoration:'none', color:"white", marginLeft:'45%', fontSize:"20px"
        , fontFamily:"Verdana", border:"1px solid teal", padding:'10px', borderRadius:'5px'}} 
        to="/gamepage">Start Game</Link>
       
    </div>
  )
}

export default Homepage