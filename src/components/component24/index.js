import React from 'react'
import Comp24StyleWrapper, { DotLampa } from './style';

function Comp24({title, number}) {
  return (
    <Comp24StyleWrapper>
        <div className='wrap'>
          <div>
            <div>
              <DotLampa top='52%' left='8%'/>
              <DotLampa top='65%' left='14%'/>
              <DotLampa top='76%' left='20%'/>
              <DotLampa top='52%' left='90%'/>
              <DotLampa top='65%' left='84%'/>
              <DotLampa top='76%' left='78%'/>
              <div>
                <div>
                  <div>
                    <div>
                      <span/>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='soya'></div>
        <div className='soya1'>
          <div>
            <p className='number'>{number}</p>
            <p className='title'>{title}</p>
          </div>
        </div>
    </Comp24StyleWrapper>
  )
}

export default Comp24;