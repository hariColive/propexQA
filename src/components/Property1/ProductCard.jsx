import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Location from '/images/sidenav/location.png';

const ProductCard = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="border-[#243c5a] p-0 rounded-lg shadow-md bg-white">
      {/* Image Slider */}
      <Slider {...settings}>
        <img src={product.ImageName} alt={product.title} className="h-48 w-full object-cover rounded-md" />
        <img src={product.ImageName} alt={product.title} className="h-48 w-full object-cover rounded-md" />
      </Slider>
      
      {/* Product Details */}
      <h2 className="text-lg font-bold mt-2">{product.PropertyName}</h2>
      <p className="text-gray-600 flex items-center"><img src={Location} alt="Location" className='w-[16px] h-[16px]' />{product.LocationName}&nbsp;{product.City}</p>
      <p className="text-yellow-500">₹{product.MarketPrice}</p>
      <p className="text-yellow-500">{product.ROIPercentage}%</p>
      <p className="text-yellow-500">{product.IRRPercentage}%</p>
      {/* <div className="sidemenuwrap flex">
        <div><img src={iConnect} alt="iConnect" className='w-[] ' /></div>
        <div><img src={Enquire} alt="Enquire" className='w-[] ' /></div>
        <div><img src={Whatsapp} alt="Whatsapp" className='w-[] ' /></div>
        <div><img src={schedule} alt="schedule-visit" className='w-[] ' /></div>
       
      </div> */}
    </div>
  );
};

export default ProductCard;




