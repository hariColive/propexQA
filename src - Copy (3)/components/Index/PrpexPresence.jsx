import React from 'react'
import Bengaluru from '/images/Home/Bengaluru.png'
import Hyderabad from '/images/Home/Hyderabad.png'
import Goa from '/images/Home/Goa.png'
import Projects from '/images/Home/Projects.png'
import Plots from '/images/Home/Plots.png'
import Experience from '/images/Home/Experience.png'
import Amenities from '/images/Home/Amenities.png'

const PrpexPresence = () => {
  return (
    <div>
      <div className=' pb-14'>
            <div className='body-container'>
            <div className='title text-center py-8'>
              <h2 className='text-3xl font-bold'>PropEx Presence</h2>
            </div>
            <div className="grid grid-cols-3 gap-10">
      <div class="max-w-sm bg-white border  border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
               <img src={Bengaluru} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
          <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Bangalore</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">India’s Silicon Valley</p>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='float-end flex gap-1 items-center'>
                    <img src={Projects} alt="project" className='text-center h-[15px] w-[15px]' />
                        <p>3+ Projects</p>
                    </div>
                    <div className='float-left flex gap-1 items-center'>
                    <img src={Plots} alt="project" className='text-center h-[15px] w-[15px]' />
                    <p>17+ Projects</p>
                    </div>
              </div>
          </div>
          <div className='title text-center mb-4'>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-[#EF1284] from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-[#EF1284] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      Know More
      </span>
      </button>
            </div>
      </div>
      
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
               <img src={Hyderabad} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
          <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Hyderabad</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">The City of Nizams</p>
              <div className='grid grid-cols-2 gap-6'>
                    <div className='float-end flex gap-1 items-center'>
                    <img src={Experience} alt="project" className='text-center h-[15px] w-[15px]' />
                        <p>15+ Experience</p>
                    </div>
                    <div className='float-left flex gap-1 items-center'>
                    <img src={Amenities} alt="project" className='text-center h-[15px] w-[15px]' />
                    <p>100+ Amenities</p>
                    </div>
              </div>
          </div>
          <div className='title text-center mb-4'>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-[#EF1284] from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-[#EF1284] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      Know More
      </span>
      </button>
            </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
               <img src={Goa} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
          <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Goa</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">India's Most Lavish Club</p>
              <div className='grid '>
                    <div className='text-center flex gap-1 items-center mx-auto'>
                    <img src={Projects} alt="project" className='text-center h-[15px] w-[15px]' />
                        <p>15+ Experience</p>
                    </div>
              </div>
          </div>
          <div className='title text-center mb-4'>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-[#EF1284] from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
      <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-[#EF1284] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      Know More
      </span>
      </button>
            </div>
      </div>
              </div>
              </div>
          </div>
    </div>
  )
}

export default PrpexPresence
