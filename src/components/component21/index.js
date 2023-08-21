import React from 'react'
import './main.css'
function Component21({title, number}) {
    return (
        // <div className='wrapper'>
        <div className='line-shape'>
            <div className='wrap-shape'>
                <div className='inset-shape'>
                    <div className='line-shape-title'>
                        <span>
                            <p className='shape-number'>{number}</p>
                            <p className='shape-title '>{title}</p>
                        </span>
                    </div>
                    <span className='element'></span>
                </div>
            </div>
            <div className='element-shape1'></div>
            <div className='element-shape2'></div>
        </div>
        // </div>
    )
}

export default Component21