import React from 'react'
import './main.css';
export default function TortBurchakComp({item}) {
  return (
    <div class="container-comp-tort">
        <div id="frames-comp-tort" style={{position: "relative"}}>
            
            <div class="strip-comp-tort">
                <div class="s1" style={{
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    // border: "1px solid red",
                }}>
                        <p style={{ 
                            margin: 0,
                            fontSize: "45px", 
                            color: "rgba(250, 250, 55, 1)",
                            textAlign: "center",
                            fontFamily: "'MrAlex-Regular', serif",
                        }}>{item.number}</p></div>
            </div>
        </div>
    </div>
    )
}
