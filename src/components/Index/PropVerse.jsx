import React from 'react'
import PropVerseImg from '/images/Home/PropVerse.png'

const PropVerse = () => {
  return (
     <div className='propverseWrap'>
        <div className='grid grid-cols-2 p-8 body-container bg-[#000000D1] relative mb-60 shadow-lg'>
            <div className='py-10 pl-8'>
            <h3 className='font-semibold text-3xl text-white'>PropVerse</h3>
          <h4 className='font-semibold text-lg my-2 text-white'>Reinventing Real Estate through Virtual Experiences</h4>
          <p className='font-medium text-base my-2 text-white'>The ultimate destination for finding your perfect home or investment opportunity</p>
          <button type="button" class="focus:outline-none text-white bg-[#EF1284] hover:bg-[#EF1284] focus:ring-4 mt-4 focus:bg-[#EF1284] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Know More</button>
            </div>
        <div>
            <img src={PropVerseImg} alt="ptopGPT" className='absolute -top-8 right-0 max-h-[350px]' />
        </div>
        </div>
        </div>
  )
}

export default PropVerse
