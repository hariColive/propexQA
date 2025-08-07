import React from 'react';
import Discovery from '../../assets/images/property/discovery.png'
import Trends from '../../assets/images/property/trends.png'
import Deals from '../../assets/images/property/deals.png'

const BookPropexHomes = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className='text-3xl text-center font-bold mb-4'>WHY BOOK PROPEX HOMES?</h2>
      <div className="grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
          <div className="grid grid-cols-3">
            <div className='col-span-2'>
            <h3 className="text-pink-600 text-xl font-bold mb-2">Smart Discovery</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>NLP smart search across maximum choice</li>
              <li>Standardized property fact sheets & reels</li>
              <li>24x7 PropExpert access</li>
            </ul>
            </div>
            <div className='col-span-1 relative'>
            <img src={Discovery} alt="Smart Discovery" className="w-30 h-30 mt-4 md:mt-0 md:ml-4 absolute bottom-0 right-0" />
            </div>
            </div>
          </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
          <div className="grid grid-cols-3">
            <div className='col-span-2'>
            <h3 className="text-pink-600 text-xl font-bold mb-2">Smart Trends</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Transparent data trends</li>
              <li>PropEximate Reliable property price estimates</li>
              <li>Net Property Score (NPS)</li>
            </ul>
            </div>
            <div className='col-span-1 relative'>
            <img src={Trends} alt="Smart Trends" className="w-30 h-30 mt-4 md:mt-0 md:ml-4 absolute bottom-0 right-0" />
            </div>
          </div>
          </div>
         
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
          <div className="grid grid-cols-3">
          <div className='col-span-2'>
            <h3 className="text-pink-600 text-xl font-bold mb-2">Smart Deals</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>10% Assured Rentals rent yielding assets</li>
              <li>100% cashback on reservation</li>
              <li>Zero brokerage</li>
            </ul>
            </div>
            <div className='col-span-1 relative'>
            <img src={Deals} alt="Smart Deals" className="w-30 h-30 mt-4 md:mt-0 md:ml-4 absolute bottom-0 right-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPropexHomes;
