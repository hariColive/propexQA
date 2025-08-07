import axios from 'axios';

export const fetchFilteredProducts = async (filters) => {
  const res = await axios.post(
    'https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetails_Propex',
    filters
  );
  return res.data;
};
