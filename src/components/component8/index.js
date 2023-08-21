import React from 'react'

function Component8({ comp8 }) {
    const arr = []
    for (let i = 0; i < 30; i++) {
        arr.push({ id: arr.length, nam: 1, });
    }
    console.log(arr);
    console.log(arr);
    let max = comp8[0].number;
    for (const item of comp8) {

        if (max < item.number) {
            max = item.number;
        }
    }

    const newcomp8 = [];
    comp8.map((item) => {
        let foyiz = (100 / max) * (item.number);
        newcomp8.push({ id: newcomp8.length + 1, new_number: foyiz, number: item.number });
        console.log(foyiz);
    })


    console.log(max);
    console.log(newcomp8);
    return (
        <div style={{
            padding: "30px",
            minWidth: "300px",
            background: 'linear-gradient(to top right, #0A2E6D, #061D3D)',
            boxShadow: "0px 0px 5px 2px rgba(49, 140, 231, 0.1) inset",   
            position: "relative",
        }}>
            <span style={{
                width: "35px",
                height: '3px',
                backgroundColor: '#1F75FE',
                position: 'absolute',
                top: "0px",
                right: '0px',
            }}></span>
            <span style={{
                width: "35px",
                height: '3px',
                backgroundColor: '#1F75FE',
                position: 'absolute',
                top: "16px",
                right: '-16px',
                transform: "rotateZ(-90deg)"
            }}></span>
            <span style={{
                width: "35px",
                height: '3px',
                backgroundColor: '#1F75FE',
                position: 'absolute',
                bottom: "0px",
                left: '0px',
            }}></span>
            <span style={{
                width: "35px",
                height: '3px',
                backgroundColor: '#1F75FE',
                position: 'absolute',
                bottom: "16px",
                left: '-16px',
                transform: "rotateZ(-90deg)"
            }}></span>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                borderBottom: '3px solid #1F75FE',
                position: "relative",
            }}>
            {newcomp8.map((item, index) => {
                return (
                    <div key={item.id + index} style={{
                        width: "60px",
                        height: "250px",
                        background: 'linear-gradient(to top,  #002A62, #042D5E)',
                        boxShadow: "0px 0px 3px 2px #042D5E inset",
                        position: "relative",
                        marginRight: (index !== newcomp8.length-1) ? "20px" : "0px",
                    }}>
                        <div style={{
                            width: "100%",
                            height: "83%",
                            position: "absolute",
                            bottom: `0px`,
                            display: "flex",
                            alignItems: "end",
                        }}>
                            <div style={{
                                width: "100%",
                                height: `${item.new_number}%`,
                                overflow: "hidden",
                            }}>
                                {arr.map((item, index) => (
                                    <span key={item.id + index} style={{
                                        display: "block",
                                        width: "100%",
                                        height: "4px",
                                        backgroundColor: '#1F85FE',
                                        marginBottom: "3px",
                                    }}></span>
                                ))}

                            </div>
                        </div>
                        <div style={{
                            width: "100%",
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            padding: '5px 0px 5px 0px'
                        }}>
                            <p style={{
                                margin: "0px",
                                color: "#1F75FE",
                                fontFamily: "'MrAlex-Regular', serif",
                                textAlign: "center",
                                fontSize: "25px",
                            }}>{item.number}</p>
                        </div>
                    </div>
                )
            })}
            <div style={{
                width: "100%",
                height: "100%",
                position: 'absolute',
                top: '0px',
                left: '0px',
                boxShadow: '0px -20px 30px 5px rgba(3, 47, 94, 0.7) inset',
            }}></div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: '10px',
            }}>
                {comp8.map((item, index) => (
                    <p key={item.id} style={{
                        width: "60px",
                        textAlign: "center",
                        margin: 0,
                        color: '#fff',
                        fontFamily: "'Orbitron', sans-serif",

                    }}>{item.year}</p>
                ))}
            </div>
        </div>
    )
}

export default Component8