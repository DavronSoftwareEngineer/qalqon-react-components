import React from 'react'
import './main.css'
import GlobeComp15 from './globe-comp15'
function Component15({number, icon, title}) {
  return (
    <div className='comp-wrapper'>
        <GlobeComp15 number={number} icon={icon} title={title}/>
        <div className='rectangle'></div>
    </div>
  )
}

export default Component15