import React from 'react'
import logo from '../Images/hblogonobg.png'

/*todo : animate nav links to do border top left to right, 
    then border right top to bottom, 
    border bottom right to left, 
    border left bottom to top 
    all while borders before it disappear linearly in direction animated*/

const Header = () => {
  return (
    <div className="flex md:h-auto h-screen md:flex-row flex-col items-center max-w-screen" >
        <div className="md:w-4/12 w-12/12 flex md:justify-end">
            <a href='https://hololive.hololivepro.com/en/talents/hakos-baelz/' rel='noreferrer' target='_blank'><img className="h-48" src={logo} alt='icon'/></a>
        </div>
        <nav className="xl:w-6/12 lg:w-7/12 md:w-8/12 sm:w-auto md:h-auto h-4/6 flex md:flex-row flex-col justify-evenly text-white text-2xl text-center">
            <a href='/' className="hover:opacity-90">Home</a>
            <a href='/streams' className="hover:opacity-90">Streams</a>
            <a href='/music' className="hover:opacity-90">Music</a>
            <a href='/merch' className="hover:opacity-90">Merch</a>
            <a href='/contact' className="hover:opacity-90">Contact</a>
        </nav>
    </div>
  )
}

export default Header