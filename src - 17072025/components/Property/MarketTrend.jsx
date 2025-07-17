import React from 'react'
import './MarketTrend.css'

const MarketTrend = ({ property }) => {
    
    return (
      <>
        <div className="market-trend-header">
          <div className="market-trend-line" />
          <h1 className="market-trend-title">
            Market Sale Price & Value Trend
          </h1>
          <div className="market-trend-line" />
        </div>
        <div class="grid grid-cols-3 gap-4">
      <div className="col-span-2">04</div>
      <div className="MarketSale"><img src={property.Images[0].Image} alt="Market Trend" />
      <h3>{property.ApartmentName}</h3>
      <p>{property.Area},&nbsp;{property.City}</p>
      </div>
    </div>
      </>
    );
  }

export default MarketTrend
