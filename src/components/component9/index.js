import React from 'react'
import Slendir from './slendir';
import './main.css';

function Component9() {
    return (
        <div style={{
            position: "relative",
        }}>
            <div >
                <Slendir />
            </div>
            <div style={{
                width: '150px',
                height: "150px",
                borderRadius: '50%',
                padding: '20px',
                boxSizing: "border-box",
                backgroundColor: 'transparent',
                boxShadow: '0px 0px 20px 5px rgba(0, 75, 178, 0.7) inset',
                transform: "rotateX(65deg)"
            }}>
                <div style={{
                    width: '100%',
                    height: "100%",
                    borderRadius: '50%',
                    padding: '20px',
                    boxSizing: "border-box",
                    backgroundColor: 'transparent',
                    boxShadow: '0px 0px 10px 20px rgba(6, 212, 224, 0.8) inset'
                }}>
                    <div style={{
                        width: '100%',
                        height: "100%",
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                    }}></div>
                </div>
            </div>
            <div style={{
                width: '200px',
                height: "200px",
                borderRadius: '50%',
                padding: '20px',
                boxSizing: "border-box",
                backgroundColor: 'transparent',
                boxShadow: '0px 0px 20px 5px rgba(0, 75, 178, 0.6 ) inset',
                transform: "rotateX(65deg)",
                position: 'absolute',
                top: "-50px",
                left: "-25px"
            }}>
                <div style={{
                    width: '100%',
                    height: "100%",
                    borderRadius: '50%',
                    padding: '20px',
                    boxSizing: "border-box",
                    backgroundColor: 'transparent',
                    boxShadow: '0px 0px 10px 20px rgba(6, 212, 224, 0.8) inset'
                }}>
                    <div style={{
                        width: '100%',
                        height: "100%",
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        position: "relative",
                    }}>
                        <div style={{
                            width: "100px",
                            height: "100px",
                            boxShadow: '0px 0px 20px 50px rgba(0, 75, 178, 0.8) inset',
                            borderRadius: "50%",
                            transform: "rotateX(20deg)",
                            position: "absolute",
                            top: "5px",
                            left: "10px",
                            position: "relative",
                        }}>
                            <div style={{
                                minWidth: "100px",
                                padding: "7px 0px 5px 0px",
                                position: 'absolute',
                                top: "-65px",
                                left: "-1px",
                                boxShadow: '0px 0px 20px 50px rgba(0, 75, 178, 0.4) inset',
                            }}>
                                <p style={{
                                    margin: "0px",
                                    color: "#fff",
                                    fontSize: "32px",
                                    textAlign: "center",
                                    fontFamily: "'MrAlex-Regular', serif",
                                }}>Lorem</p>
                                <p style={{
                                    margin: "0px",
                                    color: "#fff",
                                    fontSize: "45px",
                                    textAlign: "center",
                                    fontFamily: "'MrAlex-Regular', serif",
                                    marginTop: "15px",
                                }}>5643</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Component9