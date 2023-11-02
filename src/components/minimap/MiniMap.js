import React from 'react'
import { Link } from 'react-router-dom'
import MiniMapimg from "../../img/map.png"
import "./MiniMapStyle.css"

export default function MiniMap() {

  const top = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <div className='minimap-container'>
        <div className='headline'>
          <p>Network Map</p>
        </div>
        <div className='minimap'>
          <img src={MiniMapimg} className='minimapimg' alt='metro map' />
          <Link to={'/map'} style={{ textDecoration: "none" }}><p className='viewmap' onClick={top}>View Full Map</p></Link>
        </div>
      </div>
    </div>
  )
}
