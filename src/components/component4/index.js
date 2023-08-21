import React from 'react'
import './main.css'
export default function Component4({ item }) {
    return (
        <div style={{
            width: "100%",
        }}>
            <div style={{
                width: "100%",
                height: "1px",
                marginTop: "3px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                backgroundColor: "rgba(0, 103, 219, 0.25)",
                boxShadow: '0px 1px 4px 1px black',
                position: "relative",
                display: "flex",
                justifyContent: 'center',
            }}>
                
                <div style={{
                    borderBottom: '50px solid rgba(12, 240, 12, 0.3)',
                    borderLeft: '20px solid transparent',
                    borderRight: '20px solid transparent',
                    height: 0,
                    width: '100%',
                    transform: 'rotateX(68deg)',
                    position: "absolute",
                    left: "-20px",
                    top: "-33px",
                }}>
                </div>
                <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        top: "-50px"
                    }}>
                    <div>
                    <p style={{ margin: 0, color: "#fff", fontSize: "16px", fontFamily: "'Orbitron', sans-serif", }}>{item.title}</p>
                    <p style={{ margin: 0, color: "#fff", fontSize: "22px", fontFamily: "'Orbitron', sans-serif", }}>{item.number}
                        <span style={{
                            marginLeft: "4px",
                            fontSize: "14px",
                            color: '#2196f3',
                            fontFamily: "'Orbitron', sans-serif",
                        }}>{item.measure}</span></p>
                    </div>
                    </div>
                <span style={{
                    width: '22px',
                    height: '4px',
                    backgroundColor: 'rgba(12, 240, 12, 0.9)',
                    borderRadius: '5px',
                    boxShadow: '5px -5px 15px 2px rgba(12, 240, 12)',
                    position: 'absolute',
                    top: '-2px',
                    left: '-18px',
                }}></span>
                <span style={{
                    width: '22px',
                    height: '4px',
                    backgroundColor: 'rgba(12, 240, 12, 0.9)',
                    borderRadius: '5px',
                    boxShadow: '-5px -5px 15px 2px rgba(12, 240, 12)',
                    position: 'absolute',
                    top: '-2px',
                    right: '-18px',
                }}></span>
            </div>
        </div>
    )
}
