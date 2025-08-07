import { useState, useEffect } from 'react';

export default function FilterSidebar({ filters, selectedFilters, onFilterChange }) {
  const handleCheckboxChange = (type, value) => {
    const updated = selectedFilters[type]?.includes(value)
      ? selectedFilters[type].filter(v => v !== value)
      : [...(selectedFilters[type] || []), value];

    onFilterChange({ ...selectedFilters, [type]: updated });
  };

  return (
    <div>
      <h3>Categories</h3>
      {filters.categories.map(cat => (
        <label key={cat}>
          <input
            type="checkbox"
            checked={selectedFilters.category?.includes(cat)}
            onChange={() => handleCheckboxChange('category', cat)}
          />
          {cat}
        </label>
      ))}

      <h3>Brands</h3>
      {filters.brands.map(brand => (
        <label key={brand}>
          <input
            type="checkbox"
            checked={selectedFilters.brand?.includes(brand)}
            onChange={() => handleCheckboxChange('brand', brand)}
          />
          {brand}
        </label>
      ))}
    </div>
  );
}
