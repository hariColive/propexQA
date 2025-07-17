import React from 'react'

const Filters = () => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10 clear-both">
              {filteredProperties.map((item, index) => (
                <div key={index} className="px-3 py-2">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                     <Slider {...settings} >
              {item.Images && item.Images.length > 0 ? (
                item.Images.map((img, i) => (
                  <img
                    key={i}
                    src={img.Image || "https://qa.propex.ai/assets/images/buytolet/Property-card.png"}
                    alt={`Property Image ${i + 1}`}
                    className="w-full h-48 object-cover"
                  />
                ))
              ) : (
                <img
                  src="https://qa.propex.ai/assets/images/buytolet/Property-card.png"
                  alt="Fallback"
                  className="w-full h-48 object-cover"
                />
              )}
            </Slider>
                    <div className="pt-4 pb-2 pl-4 pr-2">
                      <h3 className="text-md pb-2 font-semibold text-gray-800">
                        <span className="truncate block max-w-xs"
                         title={item.PropertyName}>
                        {truncate(item.PropertyName)}
                        </span></h3>
                      <p className="text-sm items-center text-gray-500 flex"><img src={LocationIcon} className="w-4 h-4" />&nbsp;{item.LocationName}&nbsp;{item.City}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pl-2 pr-2 pb-2">
                       <div className="items-center text-center">
                        <p>Asset Value</p>
                        <p className="text-black-500 mt-1">
                        ₹ {formatPrice(item.Price)}</p>
                       </div>
                       <div className="items-center text-center"><p>ROI</p>
                       {item.ROIPercentage}%
                       </div>
                       <div className="items-center text-center"><p>ROI</p>
                       {item.IRRPercentage}%
                       </div>
                    </div>
                    <div className="card-icons flex ">
                          <div className="card-icon h-11 place-items-center place-content-center">
                            <img  src={iconnect} className="" alt="Iconnect" />
                          </div>
                           <div className="card-icon  h-11 place-items-center place-content-center" onClick={()=>setIsEnquireModalOpen(true)}>
                            <img src={enquire} className="" />
                          </div>
                          <div className="card-icon  h-11 place-items-center place-content-center">
                            <a href='https://api.whatsapp.com/send/?phone=918185800800&text=Hi+PropEx%21+I%27m+looking+for+a+property&type=phone_number&app_absent=0' target='_blank'><img src={Watsapp} className="" /></a>
                          </div>
                          <div className="card-icon  h-11 place-items-center place-content-center" onClick={()=>setIsScheduleModalOpen(true)}>
                            <img src={schedulevisit} className="" />
                          </div>
                          <div className="card-icon  h-11 place-items-center place-content-center">
                            <img src={call} className="" />
                          </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
    </>
  )
}

export default Filters
