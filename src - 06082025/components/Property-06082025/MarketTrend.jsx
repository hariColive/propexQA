import React, { useEffect, useState } from 'react';
import { postAPICall } from '../../Utils/Network';

const MarketTrend = ({ locationLink }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch all properties
    const url = 'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetails_Propex';
    postAPICall(url, {}, (res) => {
      // 2. Find property by LocationLink
      const found = res.Data.Property.find(
        (p) => p.LocationLink === locationLink
      );
      if (found) {
        // 3. Fetch details using PropertyID
        const detailsUrl = 'https://api.propex.ai/web/qa/api/Propex/GetPropExBuyToLet';
        postAPICall(detailsUrl, { PropertyID: found.PropertyID }, (res2) => {
          if (res2?.Data?.Details?.length) {
            setDetails(res2.Data.Details[0]);
          }
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });
  }, [locationLink]);

  return (
    <div>
      <h4>Current Launch Price</h4>
      {loading ? (
        <p>Loading...</p>
      ) : details.CurrentLaunchPrice !== undefined ? (
        <p>{details.CurrentLaunchPrice}</p>
      ) : (
        <p>Data Not Fetched</p>
      )}
    </div>
  );
};

export default MarketTrend;