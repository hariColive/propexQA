import React from 'react'
import nps from '/images/Home/NPS.png'
import bps from '/images/Home/BPS.png'
import Benefits from '/images/Home/Sellerbenefits.jpg'
const PropEstimate = () => {
  return (
    <div className='propestimatewrap'>
        <div className='body-container'>
        <div className='title py-8'>
        <h2 className='md:text-3xl font-bold text-center'>PropEstimate</h2>
        <div className="grid grid-cols-2 gap-10">
          <div class="w-full p-6 bg-[#F8B6F180] relative border mt-6 border-[#F8B6F180] rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className='border-top absolute top-0 bg-[#f8b6f1] h-2.5 curved w-full -left-0 rounded-xl '></div>
            <h4 className='text-xl font-semibold py-4'>Net Property Score (NPS)</h4>
            <ul className='pl-[20px]'>
                <li className='list-disc py-1.5'>An estimate of an asset’s market value</li>
                <li className='list-disc py-1.5'>Calculated based on user-submitted data & property-based parameters</li>
                <li className='list-disc py-1.5'>Helps you make an informed decision to buy/sell property</li>
            </ul>
            <button type="button" className="text-[#ef0073] my-4 bg-[#fff] hover:bg-[#fff]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                Find Project by NPS
            </button>
            <div className='npsbadge absolute right-0 bottom-0 py-3 px-6 rounded-tl-2xl bg-[#F8B6F180]'>
                <img src={nps} alt="npsbadge" className='' />
            </div>
         </div>
         <div class="w-full p-6 bg-[#F791BF80] relative border mt-6 border-[#F8B6F180] rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className='border-top absolute top-0 bg-[#f791bf] h-2.5 curved w-full -left-0 rounded-xl '></div>
            <h4 className='text-xl font-semibold py-4'>Buyer Profile Score (BPS)</h4>
            <ul className='pl-[20px]'>
                <li className='list-disc py-1.5'>An AI-generated score indicative of the buyer’s intent</li>
                <li className='list-disc py-1.5'>Calculated based on buyer requirements, budgetary expectations, etc.</li>
                <li className='list-disc py-1.5'>Avail exciting discounts as a High-intent Prospect Buyer</li>
            </ul>
            <button type="button" className="text-[#ef0073] my-4 bg-[#fff] hover:bg-[#fff]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2">
                Check Your BPS Score
            </button>
            <div className='npsbadge absolute right-0 bottom-0 py-3 px-6 rounded-tl-3xl bg-[#F6A9CC]'>
                <img src={bps} alt="bpsbadge" className='' />
            </div>
         </div>
        </div>
<div class="grid grid-cols-2 md:grid-cols-2 gap-0 mt-6  shadow-[0_2px_8px_rgba(1,1,1,0.1)]">
    <div>
        <img className="h-auto max-w-full" src={Benefits} alt="" />
    </div>
    <div className='p-6'>
        <h2 className='text-3xl font-semibold pl-[10px]'>Seller Benefits</h2>
        <ul className='pl-[30px]'>
                <li className='list-disc py-1.5'>Don’t pay for contracts pay for connects</li>
                <li className='list-disc py-1.5'>iConnect/iMeet/iVisit- get instantly connected with buyers</li>
                <li className='list-disc py-1.5'>Place your offer & let PropEx do its intelligent match making to connect you with prospective buyers</li>
                <li className='list-disc py-1.5'>Net Property Score Benchmark rating system</li>
                <li className='list-disc py-1.5'>10X faster deal closure</li>
                <li className='list-disc py-1.5'>Reduce cost of closure with zero brokerage package</li>
            </ul>
    </div>
</div>
      </div>
        </div>
    </div>
  )
}

export default PropEstimate
