import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

const Home = () => {
  return (
    <div className="lg:h-screen h-full bg-red-600">
        <Header/>
        <Body/>
    </div>
  )
}

export default Home