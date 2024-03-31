import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div className="footerDiv" 
    style={{marginTop:'10px', height: 'auto', display: 'flex', justifyContent: 'flex-end', boxShadow: '0 -5px 10px -5px rgba(0, 0, 0, 0.5)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <a target="_blank" className="fa fa-linkedin-square" href='https://www.linkedin.com/in/debasish-chandra20/'
        style={{textDecoration:'none', color:'beige', fontSize:'30px', margin:'0.5% 2%'}}></a>
        <a target="_blank" className="fa fa-github-square" href='https://github.com/DebCh20'
        style={{textDecoration:'none', color:'beige', fontSize:'30px', margin:'0.5% 1%'}}></a>
    </div>
  )
}

export default Footer