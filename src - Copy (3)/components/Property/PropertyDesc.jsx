import React, { useState } from 'react';

const PropertyDesc = ({ property }) => {
  const [readMore, setReadMore] = useState(false);
  const developer = property.Developers?.[0];
 console.log("Builder Description:", property?.Developers?.[0]?.Description);
    const scrollWithOffset = (id, offset = -70) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
 const getShortDescription = (text, maxChars = 250) => {
    if (!text) return "";
    if (text.length <= maxChars) return text;
    return readMore ? text : `${text.substring(0, maxChars)}...`;
  };

  return (
    <div>
      <div class="flex justify-around bg-[#F5F5F5] p-2.5 border-solid border-[#dee2e6] border-[1px] mt-5">
    <div className='font-bold hover:border-b border-[#c23962] border-solid cursor-pointer' onClick={() => scrollWithOffset('proprty-highlight')}>Property Highlights</div>
    <div className='font-bold hover:border-b border-[#c23962] border-solid cursor-pointer' onClick={() => scrollWithOffset('price-wrap')}>Price List </div>
    <div className='font-bold hover:border-b border-[#c23962] border-solid cursor-pointer' onClick={() => scrollWithOffset('amenities')}>Amenities</div>
    <div className='font-bold hover:border-b border-[#c23962] border-solid cursor-pointer' onClick={() => scrollWithOffset('location-highlight')}>Location Highlights</div>
    <div className='font-bold hover:border-b border-[#c23962] border-solid cursor-pointer' onClick={() => scrollWithOffset('about-builder')}>About Builser</div>
</div>
    <div id="proprty-highlight" className='property-highlights bg-[#f40f9e14] px-8 py-5'>
        <h4 className='font-bold text-lg pb-4'>About the Property</h4>
        <p className='text-md'>{property.LocationDescription}</p>
    </div>
    <div id="price-wrap" className='price-wrap mt-5 '>
     <div className='price-list bg-[#F5F5F5] p-4'>
        <h4 className='font-bold text-lg'>Price List</h4>
    </div>
    <div className='price-list-details grid grid-cols-3 gap-4 p-4 shadow-xl'>
        <div className='col-span-1 text-center'>
            <h5 className='font-bold -mb-40'>Category</h5>
            <p>{property.PropertyCategory}</p>
        </div>
        <div className='col-span-1 text-center'>
            <h5 className='font-bold mb-4'>Area (sq. ft)</h5>
            <p>{property.SquareFeet}</p>
        </div>
         <div className='col-span-1 text-center'>
            <h5 className='font-bold mb-4'>Price (Rs.)</h5>
            <p>₹ {property.PricePerMonth }</p>
        </div>
    </div>
    </div>
  {/* Amenities Section */}
<div id="amenities" className="bg-[#f5f5f5] px-8 py-5 mt-5">
  <h4 className="font-bold text-lg pb-4">Amenities</h4>

  {property?.Amenities?.length ? (
    <div className="grid grid-cols-6 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {property.Amenities.flatMap(group => group.Utility).map((amenity, index) => (
        <div key={index} className="flex flex-col items-center text-center p-3 bg-white rounded shadow-sm">
          <img
            src={amenity.Image}
            alt={amenity.AmenityName}
            className="w-12 h-12 object-contain mb-2"
          />
          <span className="text-sm font-medium">{amenity.AmenityName}</span>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-600">No amenities available for this property.</p>
  )}
</div>
<div id="location-highlight" className='location-highlight mt-4'>
    <h4 className='font-bold text-lg px-8 py-5 bg-[#F5F5F5]'>Location Highlights</h4>
    <div className='px-8 py-5 bg-[#f40f9e14]'>
        <p className='text-md'>{property.LocationHighlights}</p>
    </div>
</div>
 
      <div id="about-builder" className="about-builder mt-4">
        <h4 className="font-bold text-lg px-8 py-5 bg-[#F5F5F5]">About Builder</h4>
        <div className="px-8 py-5 grid grid-cols-6  mt-4 gap-4 shadow-md border-1 border-solid border-[#dee2e6]">
          <div className="col-span-1">
            {developer?.Image && (
              <img src={developer.Image} alt="Builder Logo" className="w-full h-auto rounded shadow" />
            )}
          </div>
          <div className="col-span-5">
            <p className="text-md mb-2">
              {readMore || !developer?.Description
                ? developer?.Description
                : `${developer.Description.slice(0, 250)}...`}
              {developer?.Description?.length > 250 && (
                <span
                  className="text-blue-500 cursor-pointer ml-2"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? 'Read less' : 'Read more'}
                </span>
              )}
            </p>
            {developer?.Address && (
              <p className="text-md mb-1">
                <span className="font-semibold">Address:</span> {developer.Address}
              </p>
            )}
            {developer?.ContactNumber && (
              <p className="text-md">
                <span className="font-semibold">Contact:</span> {developer.ContactNumber}
              </p>
            )}
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyDesc
