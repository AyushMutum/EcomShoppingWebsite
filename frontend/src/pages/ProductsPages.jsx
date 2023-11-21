import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";
import { productData } from "../static/data";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import ProductCart from "../components/Route/ProductCard/ProductCard";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import { useSelector } from "react-redux";


const ProductsPages = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  // const {allProducts, isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    if (categoryData === null) {
      const d = productData;
      setData(d);
    } else {
      const d =
      productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products found!
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsPages;
