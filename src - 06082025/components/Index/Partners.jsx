import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PartnersLogo} from '../../data/partners';

function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container body-container">
        <div className='mt-12'>
    <Slider {...settings}>
    {PartnersLogo.map((partner) => (
        <div key={partner.id} className="flex">
          <img
            src={partner.img}
            alt={partner.name}
            className="max-w-[200px] max-h-[130px]"
          />
        </div>
      ))}
    </Slider>
    </div>
  </div>
  )
}

export default Partners
