import React from 'react'
import LivestreamCarousel from './Components/LivestreamCarousel'
import Header from '../Home/Components/Header'

const Streams = () => {
  return (
    <div className="md:h-screen h-auto bg-red-600">
        <Header/>
        <LivestreamCarousel/>
    </div>
  )
}

export default Streams