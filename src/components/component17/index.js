import React from 'react'
import './main.css'
import { BsAndroid2 } from "react-icons/bs";

function Component17({title, icon}) {
  return (
    <div className='btn-wrap'>
        <button type='button' className='btn'>
            <span className='btn-icon'>
                {icon}
            </span>
            <p className='btn-title'>{title}</p>
        </button>
    </div>
  )
}

export default Component17;