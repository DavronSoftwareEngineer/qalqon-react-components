import React from 'react'
import './main.css';
export default function Component7({ comp7 }) {
    return (
        <div className='wrap-per'>
            <div style={{
                marginBottom: '50px',

            }}>
                <span style={{
                    color: "#fff",
                    display: 'inline-block',
                    fontSize: "22px",
                    minWidth: '100px',
                    textTransform: 'none',
                    fontFamily: "'Orbitron', sans-serif",
                }}> <p style={{ margin: 0, marginRight: '50px' }}>Lorem ipsum</p>
                    <div
                        style={{
                            width: '100%',
                            height: '2px',
                            backgroundColor: 'rgba(2, 71, 254, 0.8)',
                            position: "relative",
                        }}
                    >
                        <span className='line-title'></span>
                    </div>
                </span>
            </div>
            <div style={{
                width: "400px",
                display: "flex",
                justifyContent: "space-between",
            }}>
                {comp7.map((item, index) => (
                    <div key={item.id + index} style={{
                        position: 'relative',
                        width: "100px",
                        height: "100px",
                    }}>
                        <div style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 5px 2px #24283D",
                            transform: 'rotateZ(45deg)',
                            overflow: "hidden",
                            backgroundColor: "#000",
                        }}>
                            <div style={{
                                width: `${item.number * 1.7}px`,
                                transition: "1s width",
                                height: "300px",
                                position: 'absolute',
                                top: '-50px',
                                left: `0px`,
                                position: "relative",
                                transform: "rotateZ(-45deg)",
                            }}>
                                <div className='abs-box' style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: 'linear-gradient(to right, #1AD7A3, blue )',
                                }}>
                                </div>
                            </div>

                        </div>

                        <div style={{
                            width: "84px",
                            height: "84px",
                            borderRadius: "8px",
                            backgroundColor: "#24283D",
                            position: "relative",
                            position: 'absolute',
                            top: '8px',
                            left: "8px",
                            transform: 'rotateZ(45deg)',
                        }}>
                            <div style={{
                                // border: "1px solid red",
                                transform: "rotateZ(-45deg)",
                                position: "absolute",
                                top: "22px",
                                left: "8px",
                                width: "70px",
                                height: "40px",
                            }}>
                                <p style={{
                                    margin: 0,
                                    color: "#fff",
                                    fontSize: "30px",
                                    textAlign: "center",
                                    fontFamily: "'MrAlex-Regular', serif",
                                }}>{item.number} <span style={{ fontSize: "18px" }}>%</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
