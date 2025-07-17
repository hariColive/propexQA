import React from "react";
import { useProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { filteredProducts } = useProductContext();

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;




