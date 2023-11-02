import React from 'react'
import './InfoStyle.css'

export default function Info() {
  return (
    <div>
      <div className='info-container'>
        <div className='nlength br-1'>
            <p className='infovalue'>393</p>
            <p className='infokey'>Total Network Length (km)</p>
        </div>
        <div className='nlength br-1'>
            <p className='infovalue'>12</p>
            <p className='infokey'>Total no of Lines</p>
        </div>
        <div className='nlength'>
            <p className='infovalue'>288</p>
            <p className='infokey'>Total no of Stations</p>
        </div>
      </div>
    </div>
  )
}
