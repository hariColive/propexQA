import React from 'react'
import iConnect from '/images/Home/iConnect.png'
import imeet from '/images/Home/imeet.png'
import iVisit from '/images/Home/i-Visit.png'

function IProcess() {
  return (
    <div className='iprocesswrap section3iProcess pb-14'>
      <div className='body-container'>
      <div className='title text-center py-8'>
        <h2 className='text-3xl font-bold'>Path Breaking 3i Process</h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
         <img src={iConnect} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">i-Connect</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">Instantly connect with matched <br /> sellers &amp; PropExperts</p>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
         <img src={imeet} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">i-Meet</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">Interactive virtual meets accelerating <br /> the turnaround time</p>
    </div>
</div>
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
         <img src={iVisit} h-96 alt="iConnect" className='text-center mt-4 h-[100px] w-[100-px] mx-auto' />
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">i-Visit</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center text-base">Internet driven site visits through <br /> video enabling faster decisions</p>
    </div>
</div>
        </div>
        </div>
        <div className='title text-center mt-8'>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-[#EF1284] from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#EF1284] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Connect Now
</span>
</button>
      </div>
    </div>
  )
}

export default IProcess
