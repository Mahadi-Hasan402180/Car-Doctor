import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";




const Products = () => {
  const[products,setProducts] = useState([]);

  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))

  },[])

  return (
    <div>
      <div className="border-2 border-y-blue-200 text-blue-700 p-4">
        <h2 className="text-center   text-5xl font-bold mt-8 mb-4">
          Browse Our Products
        </h2>
        <p className="text-center mb-4 text-black">
        Top-notch automotive products at Car-Doctor! Diverse range, quality assured, and customer satisfaction guaranteed. <br /> Explore now for all your car needs under one roof
        </p>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        {
          products.map(product => <ProductCard

            key={products.id}
            product={product}
          >
          </ProductCard>)
        }
      </div>
    </div>
  );
};

export default Products;
