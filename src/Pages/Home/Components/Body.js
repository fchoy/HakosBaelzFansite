import React from 'react'
import baefullbody from '../Images/hakosbaelzfullbody.webp'

//todo: fade image in and out to new images every few seconds
const Body = () => {
  return (
    <div className="md:w-full w-screen h-auto flex lg:flex-row flex-col md:pb-0 pb-5">
      <div className='h-auto xl:w-6/12 lg:w-6/12 w-auto my-auto'>
        <img src={baefullbody} alt='baefullbody' className=" 2xl:w-5/12 lg:w-6/12 lg:mt-10 md:w-6/12 sm:w-8/12 w-10/12 mx-auto 2xl:ml-auto 2xl:mr-52"/>
      </div>
      
      <div className='xl:w-5/12 flex flex-col w-auto justify-center md:mt-0 mt-3'> 

        <div className='flex flex-col w-full text-center'>
          <h1 className="sm:text-4xl text-3xl font-medium text-white home-body-h1-text" style={{fontFamily: 'boldenvan, sans-serif'}}>Hakos Baelz</h1>
          <div className="md:mt-5 mt-3">
            <p className='text-white xl:text-2xl text-xl font-medium mb-3'>WAZZUP! 🎲ƎNOZ N∩Ⅎ ƎH⊥ O⊥ ƎWOϽ˥ƎM🎲</p>
            <p className='text-white xl:text-2xl text-xl font-medium'>I'm just a lil rat idol who wants to make you smile!</p>
          </div>
        </div>

        <div className='w-5/12 flex flex-row justify-evenly md:mt-5 mt-3 md:mb-0 pb-5 mx-auto'>
          <a href="https://twitter.com/hakosbaelz/" target="_blank" rel="noreferrer"><i class="bi bi-twitter text-5xl text-twitter-blue"/></a>
          <a href="https://www.youtube.com/@HakosBaelz" target="_blank" rel="noreferrer"><i class="bi bi-youtube text-5xl text-yellow-300"/></a>
        </div>

        <div className="text-center flex flex-row justify-center align-middle">
            <p className='text-gray-200 md:pr-3 pr-2 font-medium text-lg'>Character Designer : Mika Pikazo</p>
            <a href="https://twitter.com/MikaPikazo/" target="_blank" rel="noreferrer"><i class="bi bi-twitter text-twitter-blue text-lg"/></a>
        </div>

      </div>
    </div>
  )
}

export default Body