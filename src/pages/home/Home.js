import React from 'react'
import Info from '../../components/info/Info';
import MiniMap from '../../components/minimap/MiniMap';
import Navbar from '../../components/navbar/Navbar';
import Tsearch from '../../components/travelsearch/Tsearch';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Tsearch />
            <Info />
            <MiniMap />
        </div>
    )
}
