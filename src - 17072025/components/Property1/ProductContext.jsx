import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "", price: "", rating: "", search: "" });

  useEffect(() => {
    //axios.get("https://fakestoreapi.com/products") // Example API
    axios.post("https://api.propex.ai/web/staging/api/Propex/GetPropertyDetails_Propex",{})
      .then(response => {
        let responseData = response.data.Data;
        console.log("response",response);
        console.log("response1",responseData.Data)
        console.log("images",responseData.Property)
        setProducts(responseData.Property)})
        
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Filter logic
  const filteredProducts = products.filter((product) =>
    (filters.category ? product.category.includes(filters.category) : true) &&
    (filters.price ? product.price <= filters.price : true) &&
    (filters.rating ? product.rating >= filters.rating : true) &&
    (filters.search ? product.title.toLowerCase().includes(filters.search.toLowerCase()) : true)
  );

  return (
    <ProductContext.Provider value={{ filteredProducts, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
