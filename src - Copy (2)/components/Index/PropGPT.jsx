import React from 'react'
import propGPT from '/images/Home/ptopGPT.png'

const PropGPT = () => {
  return (
    <div className='propGPTWrap'>
    <div className='py-8 body-container bg-[#FFF5FB] px-6 relative mb-60'>
      <h4 className='font-semibold text-xl'>Our Real Estate Virtual Assistant PropGPT</h4>
      <p className='font-normal text-base my-2'>An interactive, responsive, and smart chat tool designed to answer all<br/> your queries factually and free of any personal bias</p>
      <button type="button" class="focus:outline-none text-white bg-[#EF1284] hover:bg-[#EF1284] focus:ring-4 mt-4 focus:bg-[#EF1284] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Chat Now</button>
    <div>
        <img src={propGPT} alt="ptopGPT" className='absolute -mt-8 -top-8 right-0 max-h-[350px]' />
    </div>
    </div>
    </div>
  )
}

export default PropGPT
