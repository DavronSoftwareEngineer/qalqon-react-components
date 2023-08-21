import React from 'react'
import "./main.css";
function Component12({item}) {
    return (
        <div style={{
            position: 'relative',
            minWidth: '23%',
            height: "60px",
        }}>
            <div className='trapezoid2' style={{
                width: "85%",
                height: "80px",
                padding: "4px 2px 4px 2px",
                boxSizing: "border-box",
                position: "absolute",
                top: "-40px",
                left: "10px",
                backgroundColor: "#0070FF",
                transform: "rotateX(97deg)"
            }}>
                <div className='trapezoid3' style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#002A90",
                }}></div>
            </div>
            
            <div className='trapezoid' style={{
                width: "100%",
                height: "100px",
                boxShadow: "0px -4px 4px 1px #0070FF inset",
                transform: "rotateX(80deg)",
                position: "relative",
            }}>
                <div className='trapezoid1' style={{
                    width: "100%",
                    height: "100px",
                    position: "relative",
                    position: "absolute",
                    top: "-0px"
                }}>
                    <div className='trapezoid2' style={{
                        width: "92%",
                        height: "90px",
                        padding: "6px 3px 6px 3px",
                        boxSizing: "border-box",
                        backgroundColor: "#0070FF",
                        transform: "rotateX(65deg)",
                        position: "absolute",
                        top: "-5px",
                        left: "5px",

                    }}>
                        <div className='trapezoid3' style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#002A90",
                        }}>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                position: 'absolute',
                top: "5px",
                left: '0px',
                width: "100%",
                boxSizing: "border-box",
                padding: '3px 14px 3px 14px',
            }}>
                <p style={{
                    margin: "0",
                    color: "#fff",
                    textAlign: "center",
                    wordWrap: "break-word",
                    fontFamily: "'MrAlex-Regular', sans-serif", 
                    fontSize: "1.2rem",
                }}>{item.icon}</p>
                <p style={{
                    margin: "0",
                    color: "#fff",
                    textAlign: "center",
                    wordWrap: "break-word",
                    fontFamily: "sans-serif"
                }}>
                    {item.title}
                </p>
            </div>
        </div>
    )
}

export default Component12;