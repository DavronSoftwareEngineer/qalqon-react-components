import React from 'react'
import './main.css'
import { BsAndroid2 } from "react-icons/bs";

function Component16({number, icon, title}) {
  return (
    <div className='wrapper-comp16'>
      <div className='wrapper-circle'>
        <div className='circle-comp16' style={{ '--clr1': '#00B7EB', '--clr2': '#00B7EB' }}>
        </div>
        <div className='circled'>
          <div className='circled1'>
            <span className='rom-element'></span>
          </div>
        </div>
      </div>
      <div className='data'>
        <div  style={{
          display: "flex",
          justifyContent: 'center'
        }}>
        <div className='data-value'>
          <p style={{
            margin: "0px",
            fontSize: "1.5rem",
            wordWrap: 'break-word',
            color: "yellow",
            textAlign: 'center',
            letterSpacing: "2px",
            fontFamily: "'MrAlex-Regular', serif",
          }}>{number}</p>
          <p style={{
            margin: "0px",
            fontSize: "1rem",
            wordWrap: 'break-word',
            color: "#fff",
            textAlign: "center",
            fontFamily: "'MrAlex-Regular', serif",
            letterSpacing: "2px",
          }}>{title}</p>
          <span style={{
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid rgba(2, 71, 254, 0.5)',
            display: "block",
            position: 'absolute',
            left: '50%',
            bottom: '-8px',
            transform: 'translateX(-50%)',
          }}></span>
        </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          {icon}
        </div>
      </div>
      <div className='effect'></div>
    </div>
  )
}

export default Component16