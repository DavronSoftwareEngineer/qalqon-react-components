import React from 'react'
import './main.css'
export default function GlobeComp15({number, title, icon}) {
  return (
    <div className="earth-comp15" >
      <div>
        <p style={{
          color: "yellow",
          fontSize: "1.5rem",
          textAlign: 'center',
          margin:"0px",
          fontFamily: "'MrAlex-Regular', serif",
          letterSpacing: "2px",
          wordWrap: "break-word"
        }}>{number}</p>
        <p style={{
          fontFamily: "'MrAlex-Regular', serif",
          color: "#fff",
          fontSize: "1rem",
          textAlign: "center",
          margin: '0px',
          wordWrap: "break-word",
          letterSpacing: '2px',
        }}>{title}</p>
      </div>
      <div className='wrap-line'>
        <span style={{
          width: "4px",
          height: "4px",
          borderRadius: '50%',
          display: "block",
          backgroundColor: "#fff",
          position: "absolute",
          top: "95px",
          left: '7px',
          boxShadow: '0px 0px 10px 3px #fff'
        }}></span>
      </div>
    </div>
  )
}
