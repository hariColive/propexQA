import React from 'react'
import { ProductProvider } from "./ProductContext";
import ProductList from "./ProductList";
import Filters from "./Filters";

const Properties = () => {
  return (
    <ProductProvider>
    <div className="container mx-auto p-6 mt-20">
    <div className="grid grid-cols-5 gap-4">
    <div className=""><Filters /></div>
    <div className="col-span-4"><ProductList /></div>
    </div>
    </div>
  </ProductProvider>
  )
}

export default Properties
