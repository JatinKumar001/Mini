import React from 'react'
import Tlogo from "../../img/journey_38255.png"
import ShortestPath from "../../img/shortest_path.png"
import './TsearchStyle.css'

export default function Tsearch() {
    return (
        <div style={{marginBottom:"300px"}}>
            <div className='tsearch-container'>
                <div className='theadline'>
                    <img src={Tlogo} alt='logo' />
                    <p>Plan Your Journey</p>
                </div>
                <div className='tinput'>
                    <p>From</p>
                    <input type='text' id='flocation' name='flocation' className='mb-1' />
                    <p>To</p>
                    <input type='text' id='tlocation' name='tlocation' />
                </div>
                <div>
                    <p className='afilter'>Advanced Filter</p>
                    <div className='tfilter'>
                        <img src={ShortestPath} alt='icon' />
                        <p className='shortestpath'>Shortest Route</p>
                    </div>
                </div>
                <div className='btn'>
                    <p className='reset'>Reset</p>
                    <button className='showroute'>Show Route</button>
                </div>
            </div>
        </div>
    )
}
