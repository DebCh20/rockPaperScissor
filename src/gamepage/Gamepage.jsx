import React, { useState, useEffect } from 'react'
import '../homepage/Homepage.css';
import { Link } from 'react-router-dom';


function Gamepage() {

  let [playerTwoChoice, setPlayerTwoChoice] = useState('');
  let choices = ["Rock", "Paper", "Scissor"];
  let [playerTwoShowChoice, setPlayerTwoShowChoice] = useState();
  let [playerOneShowChoice, setPlayerOneShowChoice] = useState();
  const [buttonsHidden, setButtonsHidden] = useState(false);

  function gameFunct(e){
    console.log(e.target.value); 
    setPlayerOneShowChoice(e.target.value);   
    setButtonsHidden(true);
    playerTwoChoiceGenerator();
  }

  function resetGame() {
    setPlayerOneShowChoice();   
    setButtonsHidden(false);
  }
  
  function playerTwoChoiceGenerator(){
    let index = Math.floor(Math.random()*10);
    setPlayerTwoChoice(index%3);   
  }

  useEffect(() => {
    setPlayerTwoShowChoice(choices[playerTwoChoice]);
  }, [playerTwoChoice])

  return (
    <>
    <Link to='/' style={{color:'white', textDecoration:'none', margin:'10px'}}>Home</Link>
    <div className='outerContainer'
    style={{display:"flex", gap:"20px", alignItems:'center', justifyContent:'center'}}>
        
        <div className='cards' 
        style={{height:'70vh', width:"20vw", border:"2px solid red", padding:'2rem', borderRadius:'10px',
        display:"flex", flexDirection:"column", gap:"20px" }}>
          
          {!buttonsHidden && (
        <>
          <button onClick={(e)=>gameFunct(e)} value="Rock" className='playerOneBtn' id='rockBtn' style={{height:"10%", marginTop:"90px" , textAlign:'center', cursor:'pointer'}}>Rock</button>
          <button onClick={(e)=>gameFunct(e)} value="Paper" className='playerOneBtn' id='paperBtn' style={{height:"10%", marginTop:"10px" , textAlign:'center', cursor:'pointer'}}>Paper</button>
          <button onClick={(e)=>gameFunct(e)} value="Scissor" className='playerOneBtn' id='scissorBtn' style={{height:"10%", marginTop:"10px" , textAlign:'center', cursor:'pointer'}}>Scissor</button>
        </>
      )}

            <div className='palyerOneDiv' style={{ height:"90%", width:"90%", textAlign:'center'}}> 
                <span style={{color:'white', textAlign:'center', fontSize:'30px', marginTop:'50%'}}>{playerOneShowChoice}</span>
            </div>
        </div>
        {buttonsHidden && (
        <div className='cards' 
        style={{height:'70vh', width:"20vw", border:"2px solid red", padding:'2rem', borderRadius:'10px',}}>
          <div className='palyerTwoDiv' style={{ height:"90%", width:"90%", textAlign:'center'}}> 
          {buttonsHidden && (
          <span style={{color:'white', textAlign:'center', fontSize:'30px', marginTop:'50%'}}>{playerTwoShowChoice}</span>
          )}
          </div>
        </div> 
        )}       
    </div>
    {buttonsHidden && (
          <button style={{marginLeft:'43%', marginTop:'2%'}}
          onClick={()=>resetGame()}>Play Again</button>
        )}
    </>
 )
}

export default Gamepage