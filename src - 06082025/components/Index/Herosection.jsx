import React from 'react'
import './index.css';
import HeroImage from '/images/Home/herobanner.png'

const Herosection = () => {
  return (
    <div className='Herowrap'>
      <div class="grid text-center mt-35">
        <h2 className='text-4xl font-semibold text-[#EF1284]'>PropSearch</h2>
        <p className='text-2xl mt-4'>Find Your Dream Home with PropEx</p>
      </div>
      <div className='searchwrap mt-10 sm:w-2xl mx-auto bg-[#cccccc70] p-4 rounded'>
    <div className='formwrap pb-4'>
    <div className='searchmenu items-center'>
        <ul className='flex gap-4 justify-center mb-4'>
            <li className='text-lg text-black'>Buy To Let</li>
            <li className='text-lg text-black'>RentX</li>
            <li className='text-lg text-black'>Colive</li>
        </ul>
    </div>
    <form class="flex items-center mx-auto">   
    <div class="relative w-full"> 
        <input type="text" id="voice-search" class="bg-white  text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none border-0 dark:placeholder-gray-400 dark:text-white " placeholder="Search by Property, Location" required />
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-[#EF1284] rounded-lg border border-[#EF1284] hover:bg-[#EF1284] focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    </form>
    </div>
    </div>
      <div className='heroimage'>
        <img src={HeroImage} alt="HeroBanner" />
      </div>
    </div>
  )
}

export default Herosection
