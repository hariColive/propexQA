import { useEffect, useState } from 'react';
import FilterSidebar from '../components/Property/FilterSidebar';
import PriceSlider from '../components/Property/PriceSlider';
import axios from 'axios';

export default function ProductListing() {
  const [filters, setFilters] = useState({ categories: [], brands: [], priceRange: { min: 0, max: 0 } });
  const [selectedFilters, setSelectedFilters] = useState({ category: [], brand: [] });
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then(res => {
      setFilters(res.data.filters);
      setPriceRange([res.data.filters.priceRange.min, res.data.filters.priceRange.max]);
    });
  }, []);

  useEffect(() => {
    const params = {
      category: selectedFilters.category?.join(','),
      brand: selectedFilters.brand?.join(','),
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    axios.post('https://api.propex.ai/web/live/CRMapi/PropertyCRM/GetPropertyDetails_Propex', { params }).then(res => setProducts(res.data.products));
  }, [selectedFilters, priceRange]);

  return (
    <div className="flex">
      <div className="w-1/4">
        <FilterSidebar filters={filters} selectedFilters={selectedFilters} onFilterChange={setSelectedFilters} />
        <PriceSlider min={filters.priceRange.min} max={filters.priceRange.max} value={priceRange} onChange={setPriceRange} />
      </div>
      <div className="w-3/4 grid grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="border p-4">{p.name} - ₹{p.price}</div>
        ))}
      </div>
    </div>
  );
}
