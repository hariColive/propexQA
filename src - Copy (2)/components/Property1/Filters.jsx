import React from "react";
import { useProductContext } from "./ProductContext";

const Filters = () => {
  const { setFilters } = useProductContext();

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Products..."
        className="p-2 border rounded w-60"
        onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
      />

      {/* Category Filter */}
      <select className="p-2 border rounded" onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Price Filter */}
      <select className="p-2 border rounded" onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}>
        <option value="">All Prices</option>
        <option value="50">Below $50</option>
        <option value="100">Below $100</option>
        <option value="500">Below $500</option>
      </select>

      {/* Rating Filter */}
      <select className="p-2 border rounded" onChange={(e) => setFilters((prev) => ({ ...prev, rating: e.target.value }))}>
        <option value="">All Ratings</option>
        <option value="3">3⭐ & above</option>
        <option value="4">4⭐ & above</option>
        <option value="5">5⭐</option>
      </select>
    </div>
  );
};

export default Filters;


