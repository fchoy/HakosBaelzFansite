import React from 'react'
import Header from '../Home/Components/Header'
import ContactBody from './Components/ContactBody'

const Contact = () => {
  return (
    <div className="lg:h-screen h-full bg-red-600">
        <Header/>
        <ContactBody/>
    </div>
  )
}

export default Contact