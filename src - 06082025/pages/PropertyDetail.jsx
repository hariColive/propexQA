import React, { useEffect, useState } from "react";
import axios from "axios";
import MarketTrend from "../components/Property/MarketTrend";
// ...other imports as needed

const PropertyDetail = ({ property }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.post('https://api.propex.ai/web/qa/api/Propex/GetPropExBuyToLet', {});
        setApiData(response.data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMarketData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* ...other property details... */}
      <MarketTrend property={property} Data={apiData} />
    </div>
  );
};

export default PropertyDetail; 