import React from 'react'
import { BsGeoFill } from "react-icons/bs";
import './main.css';

export default function ({arr1}) {
  return (
    <div style={{
    }}>
        <div style={{
            marginTop: '10px', 
            marginBottom: '20px',
        }}>
            <span style={{color: "#fff",  
                display: 'inline-block', 
                fontSize: "22px", 
                minWidth: '100px',
                textTransform: 'none',
                fontFamily: "'Orbitron', sans-serif",
                }}>Lorem ipsum
            <div  
            style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'rgba(2, 71, 254, 0.8)',
                position: "relative",
            }}
            >
                <span className='line'></span>
            </div>
            </span>
        </div>
        <div>
        {arr1.map((item, index) => (
        
        <div style={{
        width: '450px',
        height: "50px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "4px",
        borderBottomRightRadius: "4px", 
        backgroundColor: 'rgba(0, 0, 139, 0.5)',
        boxShadow: '0px 0px 5px 0px #0247FE inset',
        position: 'relative',
        marginBottom: "20px",
    }}>
        <div style={{
            display: 'flex',
            // alignItems: 'center',
        }}>
            <BsGeoFill style={{color: 'rgba(0, 103, 219, 1)', 
                fontSize: "25px", marginTop: '15px', 
                marginLeft: "12px"}}/>
            <div style={{width: '100%'}}>
            <p style={{
                textAlign: "center",
                margin: 0,
                fontSize: '20px',
                color: "#fff",
                marginTop: "15px",
                fontFamily: "'Orbitron', sans-serif",
            }}>{item.text}</p>
            </div>
        </div>
        <div style={{
            borderBottom: '50px solid rgba(0, 103, 219, 0.25)',
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            height: 0,
            width: '408px',
            position: "absolute",
            bottom: "-12px",
            transform: 'rotateX(65deg)',
        }}></div>
        </div>
        ))}
        </div>
    </div>
  )
}
