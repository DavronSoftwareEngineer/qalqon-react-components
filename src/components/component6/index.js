import React from 'react';
import './main.css';
import Slendir from './slendir';
import Slendir1 from './slendir1';
import Slendir2 from './slendir2';
import Slendir3 from './slendir3';
import Globe from './globe';
import CompBox from './comp-box';

export default function Component6() {
    return (
        <>
        <div style={{
            position: 'relative',
            minWidth: "400px",
            height: '330px',
            // border: "1px solid red",
        }}>
            <div style={{
                width: '400px',
                height: "400px",
                borderRadius: '50%',
                border: '3px solid rgba(15, 192, 251, 0.3)',
                boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.2) inset',
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                transform: 'rotateX(70deg)',
                position: "relative"
            }}>
                <div className='cruckle' style={{
                    width: '400px',
                    height: "400px",
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0px',
                    top: "0px",
                }}>
                    <span className='spn' />
                </div>
                <div className='cruckle1' style={{
                    width: '400px',
                    height: "400px",
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0px',
                    top: "0px",
                }}>
                    <span className='spn' />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                    <div style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        transform: "rotateX(30deg)",
                        boxShadow: "0px 20px 50px 20px rgba(0, 0, 0, 0.7)",
                        position: "relative",
                    }}>

                        <div style={{
                            position: "absolute",
                            top: "0px",
                            left: '0px',
                            backgroundColor: "rgba(1, 43, 117, 0.8)",
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
                width: '400px',
                height: "400px",
                borderRadius: '50%',
                border: '3px solid rgba(15, 192, 251, 0.3)',
                boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.2) inset',
                transform: 'rotateX(70deg)',
                position: "absolute",
                top: "-12px",
                left: "0px",
            }}>
            </div>
            <div style={{
                width: '400px',
                height: "400px",
                borderRadius: '50%',
                border: '3px solid rgba(15, 192, 251, 0.3)',
                boxShadow: '0px 8px 10px 3px rgba(255, 255, 255, 0.1)',
                // backgroundColor: "rgba(255, 255, 255, 0.04)",
                transform: 'rotateX(70deg)',
                position: "absolute",
                top: "-20px",
                left: "0px",
            }}></div>
            <div style={{
                width: '400px',
                height: "400px",
                borderRadius: '50%',
                border: '3px solid rgba(15, 192, 251, 0.2)',
                boxShadow: '0px 0px 5px 0px rgba(255, 255, 255, 0.1) inset',
                // backgroundColor: "rgba(255, 255, 255, 0.04)",
                transform: 'rotateX(70deg)',
                position: "absolute",
                top: "-33px",
                left: "0px",
            }}>
                <div className='cruckle2' style={{
                    width: '400px',
                    height: "400px",
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0px',
                    top: "0px",
                }}>
                    <span className='spn' />
                </div>
                <div className='cruckle3' style={{
                    width: '400px',
                    height: "400px",
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0px',
                    top: "0px",
                }}>
                    <span className='spn' />
                </div>
                <div className='child-comp' style={{
                    // border: "1px solid red",
                    position: "relative",
                    position: "absolute",
                    left: '0px',
                    top: "0px",
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                }}>
                    {[
                        {
                            id: 1,
                            title: 'Lorem1',
                            number: '2345',
                            top: "-20px",
                            left: "30px"
                        },
                        {
                            id: 2,
                            title: 'Lorme2',
                            number: '2345',
                            top: "0px",
                            left: "280px"
                        },
                        {
                            id: 3,
                            title: 'Lorem3',
                            number: '23%',
                            top: "200px",
                            left: "-60px"
                        },
                        {
                            id: 4,
                            title: 'Lorem4',
                            number: '34%',
                            top: "420px",
                            left: "50px"
                        },
                        {
                            id: 5,
                            title: 'Lorem5',
                            number: '34%',
                            top: "250px",
                            left: "350px"
                        },
                        {
                            id: 6,
                            title: 'Lorem6',
                            number: '34%',
                            top: "430px",
                            left: "220px"
                        }
                    ].map((item) => (
                        <CompBox key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <Slendir />
            <Slendir1 />
            <Slendir2 />
            <Slendir3 />
            <Globe />

        </div>
        </>
    )
}
