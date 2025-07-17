import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import loader from '/icons/loader.gif';

import ExploreHome from './ExploreHome';
import PropertyDesc from './PropertyDesc';
import BookPropexHomes from './BookPropexHomes';

import { postAPICall } from '../../Utils/Network'; 

const PropertyDetail = () => {
  const { id } = useParams();  // <-- Get ID from route /property/:id
  const [property, setProperty] = useState(null);
  const [occupancyDetails, setOccupancyDetails] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      const url = 'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetailsByIdForWeb_V2';
      const param = { PropertyID: id };
      console.log("Fetching property details for ID:", id);
      try {
        postAPICall(url, param, (res) => {
          console.log("Property Details Response:", res);
          if (res?.Data?.Property?.length) {
            setProperty(res.Data.Property[0]); // Assuming Property is an array
          }
        });
      } catch (error) {
        console.error("Failed to fetch property details", error);
      }
    };
    const fetchOccupancyDetails = async () => {
      const url = 'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetAvailableOccupancyTypeByPropertyId_Propex';
      const param = { PropertyID: id, VerticalId: 3 }; // Assuming VerticalId is always 1 for this API
      console.log("Property details for ID:", id);

      postAPICall(url, param, (res) => {
  //console.log("Property Details:", res);

  if (res?.Message && res?.Data) {
    setOccupancyDetails(res.Data[0]);
      console.log("Property Details:", res.Data[0]);

  } else {
    console.log("Occupancy API returned empty or failed response.");
    setOccupancyDetails(null);
  }
});

    };

    fetchProperty();
    fetchOccupancyDetails();
    window.scrollTo(0, 0); // Optional: scroll to top when navigated
  }, [id]);

   useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']")
  }, [property]);

  const formatPrice = (amount) => {
    if (amount >= 10000000) return `${(amount / 10000000).toFixed(2)} Cr`;
    if (amount >= 100000) return `${(amount / 100000).toFixed(2)} Lakh`;
    return amount;
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // if (!property) return <p className="text-center mt-20">Loading property details...</p>;
  if (!property) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" rounded-full h-16 w-16 ">
        <img src={loader}/>
      </div>
    </div>
  );
}

  return (
    <div className=" mx-auto mt-20">
      {/* Breadcrumb */}
    <div className="text-sm breadcrumbs bg-[#f9f9f9] mb-4 p-4 text-gray-600">
      <ul className="flex space-x-2">
        <li>
          <a href="/" className="hover:underline text-blue-600">Home</a>
          <span className="mx-1">/</span>
        </li>
        <li>
          <a href="/properties" className="hover:underline text-blue-600">Properties</a>
          <span className="mx-1">/</span>
        </li>
        <li className="text-gray-800 font-medium">
          {property?.PropertyName}
        </li>
      </ul>
    </div>
    <div className='p-4'>
      <h1 className="text-4xl font-extrabold mb-8 text-center">{property.PropertyName}</h1>
      {/* <p className="text-gray-600 mb-4">{property.LocationName}, {property.City}</p>
      <p>{property.Description}</p>
      <p>City: {property.City}</p>
      <p>Price: ₹{property.Price}</p> */}

      {/* Display images with +more */}
      {property.Images?.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mb-4 relative">
          {property.Images.slice(0, 3).map((img, i) => (
            <a
              key={i}
              data-fancybox="gallery"
              href={img.Image}
              className="relative block"
            >
              <img
                src={img.Image}
                alt={`Image ${i + 1}`}
                className="rounded shadow-sm w-full object-cover"
              />
              {i === 2 && property.Images.length > 3 && (
                <div className="absolute inset-0 bg-grey bg-opacity-50 flex items-center justify-center rounded">
                  <span className="text-black text-xl font-semibold">
                    +{property.Images.length - 3} more
                  </span>
                </div>
              )}
            </a>
          ))}

          {property.Images.slice(3).map((img, i) => (
            <a
              key={`hidden-${i}`}
              data-fancybox="gallery"
              href={img.Image}
              style={{ display: "none" }}
            />
          ))}
        </div>
      )
      }
      <div className="grid grid-flow-row-dense bg-[#f40f9e17] p-4 grid-cols-4 md:grid-cols-2 gap-4">
      <div className="col-span-1 text-center">
       <h5 className='text-xl font-bold'>Location</h5>
        {property.SubLocation}
      </div>
      <div className='col-span-1 text-center'>
        <h5 className='text-xl font-bold'>Size</h5>
        {occupancyDetails.ProjectSize} acres
      </div>
       <div className='col-span-1 text-center'>
        <h5 className='text-xl font-bold'>Status</h5>
        {occupancyDetails.ProjectStatus} 

      </div>
       <div className='col-span-1 text-center'>
        <h5 className='text-xl font-bold'>Possession Date</h5>
        {occupancyDetails.PossessionDate} 
      </div>
      </div>
      <ExploreHome property={property} />
      <PropertyDesc property={property} />
      <BookPropexHomes />
      {/* Optional Contact Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Enquire Now</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Schedule Visit</button>
        <a
          href="https://api.whatsapp.com/send/?phone=918185800800"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          WhatsApp
        </a>
      </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
