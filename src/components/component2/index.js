import React from 'react';
import './main.css';

export default function Component2({item}) {
  return (
    <div className='box-wrap'>
        <div className="shakil">
            <div className="icon-wrap">  
                <span >{item.icon}</span>
            </div>
            <span className='spn1'/>
            <span className='spn2'/>
            <span className='spn3'/>
            <span className='spn4'/>
            <span className='spn5'/>
        </div>
        <div className="box">
                <div>
                <p style={{
                    color: "#fff",
                    fontSize: "24px",
                    margin: 0,
                    marginTop: "0px",
                    fontFamily: "'Orbitron', sans-serif",
                }}>{item.text}</p>
                <p style={{
                    color: "#fff",
                    fontSize: "30px",
                    margin: 0,
                    marginTop: "5px",
                    fontFamily: "'Orbitron', sans-serif",
                }}>{item.text2}<span style={{fontSize: '20px', color: "#319CE7", marginLeft: "4px", fontFamily: "'Orbitron', sans-serif",}}>{item.text3}</span> </p>
                </div>
                <div style={{marginLeft: "20px"}}>
                <p style={{margin: 0, 
                    fontSize: "20px",
                    color: "#319CE7",
                    textAlign: "end",
                    fontFamily: "'Orbitron', sans-serif",
                    }}>{item.text1}</p>
                <p style={{ 
                    textAlign: "end",
                    color: "#FF1038",
                    margin: 0,
                    fontSize: "25px", 
                    marginTop: "10px",
                    fontFamily: "'Orbitron', sans-serif",
                    }}>{item.text4}%</p>
                </div>
                <span className='spn'/>  
        </div>    
    </div>
  )
}
