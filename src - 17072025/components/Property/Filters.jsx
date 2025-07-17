import React from 'react';

const Filters = ({ selectedFilters, setSelectedFilters }) => {
  // Example: hardcoded city options for demonstration
  const cities = ['Bangalore', 'Hyderabad', 'Mumbai', 'Ayodhya', 'Goa'];

  const handleCityChange = (city) => {
    setSelectedFilters((prev) => {
      const exists = prev.cities.includes(city);
      return {
        ...prev,
        cities: exists ? prev.cities.filter((c) => c !== city) : [...prev.cities, city],
      };
    });
  };

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">City</h2>
      <div className="flex flex-col gap-2 mb-4">
        {cities.map((city) => (
          <label key={city} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFilters.cities.includes(city)}
              onChange={() => handleCityChange(city)}
            />
            <span>{city}</span>
          </label>
        ))}
      </div>
      {/* Add more filter controls here as needed */}
    </div>
  );
};

export default Filters;
