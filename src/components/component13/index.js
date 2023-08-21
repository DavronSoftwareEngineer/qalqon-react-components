import React from 'react'
import "./main.css";

function Component13({item}) {
    return (
        <div>
            <div className='wrapper-inset'>
                <span style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "-2px",
                    left: '-3px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "-2px",
                    right: '-3px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: "-2px",
                    right: '-3px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: "-2px",
                    left: '-3px',
                    boxShadow: '0px 0px 5px 1px #fff'
                }}></span>
                <span style={{
                    width: "20%",
                    height: "2px",
                    borderRadius: '50%',
                    display: "block",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "4`px",
                    left: '50%',
                    transform: "translateX(-50%)",
                    boxShadow: '0px 40px 40px 10px #fff'
                }}></span>
                <div className='inset'>
                    <div>
                        <p className='number'>{item.number}</p>
                        <p className='text'>{item.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component13