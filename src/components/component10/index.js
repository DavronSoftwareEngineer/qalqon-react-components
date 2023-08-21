import React from 'react';
import './main.css';
function Component10({item}) {
    return (
        <div>
            <div style={{
                position: 'relative',
            }}>
                <div className='hexagon1'>
                    
                    <span style={{
                        width: "35px",
                        height: "2px",
                        backgroundColor: '#fff',
                        display: "block",
                        position: "absolute",
                        bottom: '5px',
                        left: '72px',
                    }}></span>
                    <span style={{
                        width: "35px",
                        height: "2px",
                        // backgroundColor: '#fff',
                        background: 'linear-gradient(to top, #fff, #09184a84)',
                        display: "block",
                        position: "absolute",
                        top: '90px',
                        left: '0px',
                        transform: "rotateZ(60deg)"
                    }}></span>
                    <span style={{
                        width: "30px",
                        height: "2px",
                        // backgroundColor: '#fff',
                        background: 'linear-gradient(to top, #fff, #09184a84)',
                        display: "block",
                        position: "absolute",
                        top: '60px',
                        left: '0px',
                        transform: "rotateZ(-60deg)"
                    }}></span>
                    <span style={{
                        width: "35px",
                        height: "2px",
                        // backgroundColor: '#fff',
                        background: 'linear-gradient(to top, #fff, #09184a84)',
                        display: "block",
                        position: "absolute",
                        top: '90px',
                        right: '0px',
                        transform: "rotateZ(-60deg)"
                    }}></span>
                    <span style={{
                        width: "30px",
                        height: "2px",
                        // backgroundColor: '#fff',
                        background: 'linear-gradient(to top, #fff, #09184a84)',
                        display: "block",
                        position: "absolute",
                        top: '60px',
                        right: '0px',
                        transform: "rotateZ(60deg)"
                    }}></span>
                    <div className='hexagon2'>
                        <div className='hexagon3'>
                            <div className='hexagon4'>
                                <div className='hexagon5'>
                                    <div className='hexagon6'>
                                        <div className='hexagon7'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    position: "absolute",
                    top: "-28px",
                    left: "43px",
                    width: "92px",
                    height: '92px',
                    // border: "1px solid red",
                }}>
                    <div className='wrap-shakil'>
                        <span className='spn1'/>
                        <span className='spn11'/>
                        <span className='spn6'/>
                        <span className='spn7'/>
                        <span className='spn8'/>
                        <span className='spn9'/>
                        <span className='spn2'/>
                        <span className='spn3'/>
                        <span className='spn4'/>
                        <span className='spn5'/>
                        <div className="shakil">
                            <div className="icon-wrap">  
                                <div style={{
                                    transform: "rotateZ(-90deg)",
                                    fontFamily: "'MrAlex-Regular', sans-serif",
                                    fontSize: "30px",
                                }}>{item.icon}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div style={{
                    width: '100%',
                    height: "70%",
                    position: "absolute",
                    top: "75px",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    background: 'rgb(17,93,151)',
                    background: 'linear-gradient(180deg, rgba(17,93,151,0.2) 0%, rgba(18,51,102,0.2) 50%, rgba(10,30,83,1) 100%)',
                }}>
                    <div style={{
                    width: '50%',
                    height: "70%",
                    marginTop: "26px",
                    background: 'rgb(17,93,151)',
                    background: 'linear-gradient(180deg, rgba(17,93,151,0.3) 0%, rgba(18,51,102,0.3) 50%, rgba(10,30,83,0.3) 100%)',
                }}></div>
                <div style={{width: "100%", 
                    position: "absolute",
                    top: '40px',
                }}>
                    <p style={{margin: 0, 
                        fontFamily: "'MrAlex-Regular', sans-serif", 
                        color: '#fff', textAlign: "center",
                        letterSpacing: '3px',
                        }}>{item.title}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Component10;