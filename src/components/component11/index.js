import React from 'react'
import './main.css';
import { GiCctvCamera } from "react-icons/gi";

function Component11({item}) {
    return (
        <div style={{
            minWidth: '20%',
            height: "50px",
            // height: "60px",
            // border: "1px solid red",
            display: "flex",
            alignItems: "center",

        }}>
            <div style={{
                // border: "1px solid blue",
                width: "45px",
                height: "100%"
            }}>
                <div className='rom1'>
                    <span style={{
                        width: "15px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(45deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "6px",
                        right: "9px",
                    }}></span>
                    <span style={{
                        width: "17px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(-45deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "6px",
                        left: "7px",
                    }}></span>
                    <span style={{
                        width: "14px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(-45deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        bottom: "6px",
                        right: "10px",
                    }}></span>
                    <span style={{
                        width: "16px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(45deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        bottom: "5px",
                        left: "9px",
                    }}></span>
                    <span style={{
                        width: "11px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(50deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "29px",
                        left: "-2px",
                    }}></span>
                    <span style={{
                        width: "13px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(-50deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "21px",
                        left: "-5px",
                    }}></span>
                    <span style={{
                        width: "11px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(-50deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "28px",
                        right: "-2px",
                    }}></span>
                    <span style={{
                        width: "13px",
                        height: '2px',
                        backgroundColor: "#0247FE",
                        display: "block",
                        transform: "rotateZ(50deg)",
                        borderRadius: "5px",
                        position: "absolute",
                        top: "21px",
                        right: "-4px",
                    }}></span>
                    <div className='rom2' style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        color: "#fff",
                    }}>{item.icon}</div>
                </div>
            </div>
            <div style={{
                padding: "0px 5px",
                // width: "100%",
                height: "100%",
                borderTop: "1px solid #0247FE",
                borderBottom: "1px solid #0247FE",
                position: "relative",
                marginLeft: "5px",
                display: 'flex',
                alignItems: "center",
            }}>
                <span style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "-2px",
                    left: '-2px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "-2px",
                    right: '-2px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: "-2px",
                    right: '-2px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "3px",
                    height: "3px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: "-2px",
                    left: '-2px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <div>
                    <p style={{
                        margin: 0, color: "#fff",
                        fontFamily: "'MrAlex-Regular', sans-serif",
                        letterSpacing: "2px",
                    }}>{item.number}</p>
                    <p style={{
                        margin: 0, color: "#fff",
                        fontFamily: "'MrAlex-Regular', sans-serif",
                        letterSpacing: "2px",
                        fontSize: "11px",
                    }}>{item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Component11;