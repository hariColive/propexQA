
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./PropertyList.css";
import AccordionFilter from "./AccordionFilter";
import configs from '../../Utils/configs'
import { Link } from 'react-router-dom'
import { postAPICall } from "../../Utils/Network";
import LocationIcon from "../../assets/icons/Property/marker.png";
import iconnect from "../../assets/icons/Property/iconnect.png";
import Watsapp from "../../assets/icons/Property/watsapp.png";
import enquire from "../../assets/icons/Property/enquire.png";
import schedulevisit from "../../assets/icons/Property/schedulevisit.png";
import call from "../../assets/icons/Property/call.png";
import Sidenav from "../Sidenav/Sidenav";
import EnquireFormModal from "../EnquireFormModal";
import ScheduleVisitFormModal from "../ScheduleVisitFormModal";
import PropertyExchangeTable from "../Index/PropertyExchangeTable";
import Filters from "./Filters";
import loader from '/icons/loader.gif';


const PropertyList = () => {
const [properties, setProperties] = useState([]);
const [City, setCity] = useState([]);
const [SaleType, setSaleType] = useState([]);
const [ProjectStatus, setProjectStatus] = useState([]);
const [HouseType, setHouseType] = useState([]);
const [PopularLocations, setPopularLocations] = useState([]);
const [PropertyType, setPropertyType] = useState([]);
const [Amenities, setAmenities] = useState([]);
const [priceRange, setPriceRange] = useState([1000000, 200000000]);
const [sortedProperties, setSortedProperties] = useState([]);
const [filteredProperties, setFilteredProperties] = useState([]);
const [currentSortType, setCurrentSortType] = useState("");
 const [isEnquireModalOpen,setIsEnquireModalOpen] = useState(false);
  const [isScheduleModalOpen,setIsScheduleModalOpen] = useState(false)

const [selectedFilters, setSelectedFilters] = useState({
  cities: [],
  saleTypes: [],
  statuses: [],
  houseTypes: [],
  amenities: [],
  bedrooms: [],
  priceRange: [10_00_000, 20_00_00_000],
});
const clearAllFilters = () => {
  setSelectedFilters({
    cities: [],
    saleTypes: [],
    statuses: [],
    houseTypes: [],
    amenities: [],
    bedrooms: [],
    priceRange: [10_00_000, 20_00_00_000], // ₹10L to ₹20Cr (your original default)
  });
  setCurrentSortType(""); // Reset sorting
};

const truncate = (text, max = 20) =>
  text.length > max ? text.slice(0, max) + '...' : text;

//Formateprice
const formatPrice = (amount) => {
  if (amount >= 10000000) {
    return `${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `${(amount / 100000).toFixed(2)} Lakh`;
  } else if (amount >= 1000) {
    return `${(amount / 1000).toFixed(2)} K`;
  } else {
    return `${amount}`;
  }
};

const handleCheckboxChange = (filterType, value) => {
  setSelectedFilters((prevFilters) => {
    const currentValues = prevFilters[filterType] || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    return {
      ...prevFilters,
      [filterType]: newValues,
    };
  });
};


const settings = {
    dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
useEffect(() => {
getFilter();
getFilter1();

let result = [...properties];
  if (selectedFilters.cities.length) {
    result = result.filter((item) =>
      selectedFilters.cities.includes(item.City)
    );
  }

   if (selectedFilters.saleTypes.length) {
    result = result.filter((item) =>
      selectedFilters.saleTypes.includes(item.SaleType)
    );
  }

   if (selectedFilters.houseTypes.length) {
    result = result.filter((item) =>
      selectedFilters.houseTypes.includes(item.HouseType)
    );
  }

  if (selectedFilters.bedrooms.length > 0) {
    result = result.filter((property) =>
      selectedFilters.bedrooms.includes(property.PropertyTypeName)
    );
  }

   if (selectedFilters.amenities.length) {
    result = result.filter((item) =>
      selectedFilters.amenities.every((a) =>
        item.Amenities?.some((am) => am.Name === a)
      )
    );
  }

  result = result.filter((item) => {
    const price = parseInt(item.Price);
    return (
      price >= selectedFilters.priceRange[0] &&
      price <= selectedFilters.priceRange[1]
    );
  });

 setFilteredProperties(result);
 
 // Apply current sorting to the filtered results
 if (currentSortType) {
   let sorted = [...result];
   if (currentSortType === "lowToHigh") {
     sorted.sort((a, b) => a.Price - b.Price);
   } else if (currentSortType === "highToLow") {
     sorted.sort((a, b) => b.Price - a.Price);
   } else if (currentSortType === "nameAZ") {
     sorted.sort((a, b) => a.PropertyName.localeCompare(b.PropertyName));
   } else if (currentSortType === "nameZA") {
     sorted.sort((a, b) => b.PropertyName.localeCompare(a.PropertyName));
   } else if (currentSortType === "roiHigh") {
     sorted.sort((a, b) => (b.ROIPercentage || 0) - (a.ROIPercentage || 0));
   } else if (currentSortType === "roiLow") {
     sorted.sort((a, b) => (a.ROIPercentage || 0) - (b.ROIPercentage || 0));
   }
   setSortedProperties(sorted);
 } else {
   setSortedProperties(result);
 }
}, [selectedFilters, properties, currentSortType]);

const getFilter = () => {
        var config = { "Access-Control-Allow-Origin": "*" };
        var url = 'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetails_Propex';
        var param = {
            PropertyID: "",
        };
        postAPICall(
            url,
            param,
            (res) => {
              console.log(res.Data);
//console.log(res.Data.Filter.Amenities, "this is Amenities");

setCity(res.Data.Filter.Locations.slice(0, 10));
setSaleType(res.Data.Filter.SaleType.slice(0, 2));
setProjectStatus(res.Data.Filter.ProjectStatus.slice(0, 4));
setHouseType(res.Data.Filter.HouseType);
setPopularLocations(res.Data.Property).slice(2, 10);
            },
            config
        );
    };

const getFilter1 = () => {
        var config = { "Access-Control-Allow-Origin": "*" };
        var url = 'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetails_Propex';
        var param = {
            PropertyID: "",
        };
        postAPICall(
            url,
            param,
            (res) => {
              console.log(res.Data);
//console.log(res.Data.Filter.Amenities, "this is Amenities");


setPropertyType(res.Data.Filter.PropertyType.slice(0, 10));
setAmenities(res.Data.Filter.Amenities.slice(0, 15));

setProperties(res.Data.Property);
setSortedProperties(res.Data.Property); // Initialize sorted properties
setIsLoading(false);
console.log(res.Data.Filter.Amenities.slice(0, 6), "Amenities");
            },
            config
        );
    };
const handleSort = (type) => {
  setCurrentSortType(type);
  
  let sorted = [...filteredProperties];

  if (type === "lowToHigh") {
    sorted.sort((a, b) => a.Price - b.Price);
  } else if (type === "highToLow") {
    sorted.sort((a, b) => b.Price - a.Price);
  } else if (type === "nameAZ") {
    sorted.sort((a, b) => a.PropertyName.localeCompare(b.PropertyName));
  } else if (type === "nameZA") {
    sorted.sort((a, b) => b.PropertyName.localeCompare(a.PropertyName));
  } else if (type === "roiHigh") {
    sorted.sort((a, b) => (b.ROIPercentage || 0) - (a.ROIPercentage || 0));
  } else if (type === "roiLow") {
    sorted.sort((a, b) => (a.ROIPercentage || 0) - (b.ROIPercentage || 0));
  } else {
    // If no sorting is selected, use the original filtered properties
    sorted = [...filteredProperties];
  }

  setSortedProperties(sorted);
};



return (
  <>
<div className="flex grid-cols-12 gap-4">
   <div className="basis-1/5 pr-2 pl-2.5">
      <div className="mt-20 p-2 border">
       <Link
  onClick={clearAllFilters}
  className="text-red-400  px-1 py-1 rounded mb-4 transition"
>
  Clear All
</Link>

<AccordionFilter
  title="City"
  items={City}
  type="cities"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<AccordionFilter
  title="Sale Type"
  items={SaleType}
  type="saleTypes"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<AccordionFilter
  title="Project Status"
  items={ProjectStatus}
  type="projectStatus"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<AccordionFilter
  title="Project Type"
  items={HouseType}
  type="houseTypes"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<AccordionFilter
  title="Amenities"
  items={Amenities}
  type="amenities"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<AccordionFilter
  title="Bedrooms"
  items={PropertyType}
  type="bedrooms"
  selectedFilters={selectedFilters}
  onChange={handleCheckboxChange}
/>
<div className="mb-4">
  <h2 className="font-semibold mb-2">Price Range (₹)</h2>
  <div className="flex gap-4 items-center">
    <input
      type="number"
      min={1000000}
      max={200000000}
      value={selectedFilters.priceRange[0]}
      onChange={(e) =>
        setSelectedFilters((prev) => ({
          ...prev,
          priceRange: [Number(e.target.value), prev.priceRange[1]],
        }))
      }
      className="border p-2 w-1/2 rounded"
    />
    <span className="text-gray-600">to</span>
    <input
      type="number"
      min={1000000}
      max={200000000}
      value={selectedFilters.priceRange[1]}
      onChange={(e) =>
        setSelectedFilters((prev) => ({
          ...prev,
          priceRange: [prev.priceRange[0], Number(e.target.value)],
        }))
      }
      className="border p-2 w-1/2 rounded"
    />
  </div>
</div>

      </div>
   </div>
   <div className="basis-4/5 mt-20 mb-10 relative">
    <select
  value={currentSortType}
  onChange={(e) => handleSort(e.target.value)}
  className="p-2 my-2 mx-4 border rounded-md shadow-sm  float-right sort-by">
  <option value="">Sort By</option>
  <option value="lowToHigh">Price: Low to High</option>
  <option value="highToLow">Price: High to Low</option>
  <option value="nameAZ">Name: A to Z</option>
  <option value="nameZA">Name: Z to A</option>
  <option value="roiHigh">ROI: High to Low</option>
  <option value="roiLow">ROI: Low to High</option>
</select>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-12">
  {sortedProperties.length === 0 ? (
    <div className="text-center text-gray-500 py-8">No property available.</div>
  ) : (
    sortedProperties.map((item, index) => (
    <div key={index} className="px-3 py-2 overflow-hidden">
      <div className="bg-white flex flex-col h-full rounded-xl shadow-lg hover:shadow-xl transition">
        <div className="w-full relative">
          <Slider {...settings}>
            {item.Images && item.Images.length > 0 ? (
              item.Images.map((img, i) => (
                <img
                  key={i}
                  src={img.Image || 'https://qa.propex.ai/assets/images/buytolet/Property-card.png'}
                  alt={`Property Image ${i + 1}`}
                  className="w-full h-40 sm:h-48 object-cover"
                />
              ))
            ) : (
              <img
                src="https://qa.propex.ai/assets/images/buytolet/Property-card.png"
                alt="Fallback"
                className="w-full h-40 sm:h-48 object-cover"
              />
            )}
          </Slider>
          <div className="absolute top-2 right-2 block sm:hidden bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {item.Images ? item.Images.length : 1} photos
          </div>
        </div>
              <div className="pt-4 pb-2 pl-4 pr-2">
                 <Link to={`/property/${item.PropertyID}`}><h3 className="text-md pb-2 font-semibold text-gray-800">
                  <span className="truncate block max-w-xs"
                   title={item.PropertyName}>
                  {truncate(item.PropertyName)}
                  </span></h3></Link>
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
        ))
  )}
        </div>
  
</div>
<Sidenav />
 <EnquireFormModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} leadSource="" LPId={78} mobNumValidate={false} otpVerify={false}/>
    <ScheduleVisitFormModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} leadSource="" LPId={78} mobNumValidate={false} otpVerify={false}/>
</div>
<PropertyExchangeTable />
</>
);
}
export default PropertyList