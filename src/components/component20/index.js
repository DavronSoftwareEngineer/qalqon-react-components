import React from 'react'
import './style.css'
export default function Component20({ number, title, icon }) {
    return (
        <div className='surrounding-line'>
            <div className='card'>
                <p className='card-number'>{number}</p>
                <span className='dot1' />
                <span className='dot2' />
            </div>
            <p className='card-title'>{title}</p>
        </div>
    )
}
