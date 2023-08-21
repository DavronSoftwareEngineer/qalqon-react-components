import React from 'react'
import './main.css'
function Component14({title, number, icon}) {
  return (
    <div className='wrap-rhombus'>
        <div className='rhombus'>
            <span className='rom-element'></span>
            <span className='rom-element1'></span>
        </div>
        
        <div className='rhombus1'>

        </div>
        <div className='rhombus2'>

        </div>
        <div className='rhombus3'>

        </div>
        <div className='rhombus4'>

        </div>
        <div style={{width: "100%",
            position: "absolute",
            top: '-15%',
            left: "0%",
        }}>
            <p style={{
                margin: "0",
                fontSize: "1.5rem",
                color: "#fff",
                textAlign: "center",
                fontFamily: "sans-serif",
                wordWrap: "break-word",
            }}>{icon}</p>
            <p style={{
                margin: "0",
                fontSize: "1rem",
                color: "#fff",
                textAlign: "center",
                fontFamily: "sans-serif",
                wordWrap: "break-word",
            }}>{title}</p>
        </div>
    </div>
  )
}

export default Component14