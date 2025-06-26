import React from 'react'

function YesBroker() {
  return (
    <div>
      <div className='yesBrokerSection body-container mt-8 bg-[#1B1C1E] rounded-xl py-6'>
        <div className='grid grid-cols-3'>
            <div className='col-span-2 pl-20'>
                <div className='yesbroker bg-[#fff] p-2 w-32'>
                    <h3 className='text-black font-bold'><span className='bg-[#ef0073] p-1.5 text-white'>YES</span> BROKER</h3>
                </div>
                <h3 className='text-white font-medium text-2xl mt-4'>Say yes to Yes Broker , Your trusted partner in Real Estate Investment</h3>
            </div>
            <div className='col-span-1 align-middle text-center'>
            <button class="relative inline-flex items-center mt-8 justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium focus:outline-none focus:ring-pink-200">
      <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-[#fff] dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      Know More
      </span>
      </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default YesBroker
