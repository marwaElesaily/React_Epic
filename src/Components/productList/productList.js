import React from "react";
import './productList.css'
function ProductList({ products }) {

  // console.log(products);
  return (
    <>
      {(products.length > 0) ?
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <div className="sm:w-2/5 md:w-1/5 mx-2 my-4 shadow-lg productList" key={index}>
              <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <img className="h-72 object-cover productList-img" src={product.Photos[0]} alt="" />
              </a>
              <div className="">
                <p className="my-2 text-xs text-zinc-400">BASE GAME</p>
                <h5 className="mb-2 text-m font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {product.gameName}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  ${product.Price}
                </p>
              </div>
            </div>
          ))}
        </div>
        : <div className="flex flex-col justify-center items-center my-32">
          <p className="xl:text-6xl lg:text-6xl md:text-6xl mb-6 mobileMediaP1">No results found</p>
          <p className="xl:text-3xl lg:text-xl md:text-lg text-center mobileMediaP2">Unfortunately I could not find any results matching your search.</p>
        </div>}
    </>
  );
}

export default ProductList;

