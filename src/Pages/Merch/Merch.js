import React from 'react'
import Header from '../Home/Components/Header'
import MerchSlider from './Components/MerchSlider'

const Merch = () => {
  return (
    <div className="h-full w-auto bg-red-600 md:pb-10 pb-5">
        <Header/>
        <MerchSlider/>
    </div>
  )
}

export default Merch