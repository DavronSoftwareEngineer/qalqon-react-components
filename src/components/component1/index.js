import React from 'react'

export default function Component1({item}) {
  return (
    <div>
        <div style={{marginLeft: '10px', marginRight: '10px'}}>
        <p style={{margin: 0, color: "#fff", fontSize: "16px", fontFamily: "'Orbitron', sans-serif",}}>{item.title}</p>
        <p style={{margin: 0, color: "#fff", fontSize: "22px", fontFamily: "'Orbitron', sans-serif",}}>{item.number}
        <span style={{marginLeft: "4px", 
            fontSize: "14px",
            color: '#2196f3',
            fontFamily: "'Orbitron', sans-serif",
            }}>{item.measure}</span></p>
        </div>
        <div style={{width: "100%",
            height: "1px",
            marginTop: "3px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: "rgba(0, 103, 219, 0.25",
            boxShadow: '0px 1px 4px 1px black',
            position: "relative",
            display: "flex",
            justifyContent: 'center',
        }}>
            <div style={{
            borderBottom: '50px solid rgba(255, 255, 255, 0.23)',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            height: 0,
            width: '100%',
            transform: 'rotateX(68deg)',
            position: "absolute",
            left: "-20px",
            top: "-33px",
            // border: "1px solid red",
        }}></div>
            <span style={{
                width: '22px',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                boxShadow: '5px -5px 15px 2px #fff',
                position: 'absolute',
                top: '-2px',
                left: '-18px',
            }}></span>
            <span style={{
                width: '22px',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                boxShadow: '-5px -5px 15px 2px #fff',
                position: 'absolute',
                top: '-2px',
                right: '-18px',
            }}></span>
        </div>
    </div>
  )
}
