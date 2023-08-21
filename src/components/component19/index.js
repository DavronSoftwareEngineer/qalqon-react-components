import React from 'react'
import './main.css'
function Component19({number, icon, title}) {
  return (
    <div className='wrapper-card'>
        <div className='card-icon'>
            {icon}
        </div>
        <div className='wrap-value'>
            <p className='card-title'>{title}</p>
            <p className='card-number'><span style={{
                fontFamily: "'MrAlex-Regular', serif"
            }}>{number}</span>k+</p>
        </div>
    </div>
  )
}

export default Component19