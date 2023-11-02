import React from 'react'
import DelhiMetroMap from '../../img/metro_map.jpg'
import './MapStyle.css'
import Navbar from '../../components/navbar/Navbar'

export default function Map() {
    return (
        <div>
            <Navbar />
            <div className='map-container'>
                <div className='mapheading'>
                    <p>Delhi Metro Detailed Network Map</p>
                </div>
                <div className='detailedmap'>
                    <img src={DelhiMetroMap} alt='delhimetromap' />
                </div>
            </div>
        </div>
    )
}
