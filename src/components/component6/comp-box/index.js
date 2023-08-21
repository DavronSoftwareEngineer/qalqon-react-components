import React from 'react';
import Slendir1Comp from './sledir1-comp';
import TortBurchakComp from './to\'rtburchak-comp';
export default function CompBox({ item }) {
    return (
        <div style={{
            position: 'relative',
            width: "100px",
            height: '100px',
            position: "absolute",
            left: item.left,
            top: item.top,
            // border: '1px solid red',
            // transformStyle: 'preserve-3d',
            // transform: 'rotate(0deg)'
        }}>
            <div style={{
                width: '100px',
                height: "100px",
                borderRadius: '50%',
                border: '3px solid rgba(15, 192, 251, 0.3)',
                boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.2) inset',
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                position: "relative",

            }}>

                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                    <div style={{
                        width: '85px',
                        height: '85px',
                        borderRadius: '50%',
                        transform: "rotateX(5deg)",
                        boxShadow: "0px 5px 10px 2px rgba(0, 0, 0, 0.7)",
                        position: "relative",
                    }}>

                        <div style={{
                            position: "absolute",
                            top: "0px",
                            left: '0px',
                            backgroundColor: "rgba(1, 43, 117, 0.6)",
                            boxShadow: '0px 0px 5px 0px rgba(0, 185, 251, 0.8) inset',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            transform: "rotateX(15deg)",
                            zIndex: 1,
                        }}>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                position: "absolute",
                top: '-100px',
                left: '0px',
                minWidth: '105px',
                padding: "5px 0",
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <p style={{
                    margin: '4px 0 4px 0',
                    fontSize: "28px",
                    color: "#fff", 
                    textAlign: "center",
                    fontFamily: "'MrAlex-Regular', serif",
                }}>{item.title}</p>
            </div>
            <Slendir1Comp item={item} />
            <TortBurchakComp item={item} />
        </div>
    )
}
