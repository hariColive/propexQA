import React from 'react'
import Bid from '/images/Home/BidAmount.png'
import RealtimeMatching from '/images/Home/Real timeMatching.png'
import iConnect from '/images/Home/i-Connect.png'
import PropertyReservation from '/images/Home/PropertyReservation.png'

function PropertyExchange() {
  return (
    <div className='pt-10'>
      <div className='body-container'>
        <h1 className='font-semibold text-[2.5rem] text-black text-center'>India’s First Property exchange</h1>
        <div className='grid grid-cols-4 gap-8 mt-8'>
            <div className='bg-[#f40f9e33] items-center justify-center rounded-sm border-l-8 border-[#f40f9e33]'>
            <div class=" absolute bg-[#f8b6f1] h-2.5 curved  rounded-xl "></div>
                <div className='icon flex flex-col items-center gap-8 py-8'>
                     <img src={Bid} alt="project" className='text-center max-w-[120px]' />
                     <h4 className='font-semibold text-lg text-center'>Bid Your Desire <br />Amount</h4>
                </div>
            </div>
            <div className='bg-[#fe367e33] items-center justify-center rounded-sm border-l-8 border-[#f40f9e33]'>
                <div className='icon flex flex-col items-center gap-8 py-8'>
                     <img src={RealtimeMatching} alt="project" className='text-center max-w-[120px]' />
                     <h4 className='font-semibold text-lg text-center'>Real time Matching & <br />Discovery</h4>
                </div>
            </div>
            <div className='bg-[#f597eb33] items-center justify-center rounded-sm border-l-8 border-[#f40f9e33]'>
            <div class="absolute bg-[#fd7df033] h-2.5 curved  left-0 rounded-xl "></div>
                <div className='icon flex flex-col items-center gap-8 py-8'>
                     <img src={iConnect} alt="project" className='text-center max-w-[120px]' />
                     <h4 className='font-semibold text-lg text-center'>i-Connect/i-Meet/i- <br />Visit  to meet virtually </h4>
                </div>
            </div>
            <div className='bg-[#f4a6ab33] items-center justify-center rounded-sm border-l-8 border-[#f40f9e33]'>
            <div class="absolute bg-[#f47c8333] h-2.5 curved  left-0 rounded-xl "></div>
                <div className='icon flex flex-col items-center gap-8 py-8'>
                     <img src={PropertyReservation} alt="project" className='text-center max-w-[120px]' />
                     <h4 className='font-semibold text-lg text-center'>Property Reservation/ <br />Check-in</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyExchange
