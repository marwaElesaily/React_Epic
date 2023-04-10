import React from "react";
import './productList.css'
function ProductList({ products }) {

  return (
    <>
    <div className="flex flex-wrap justify-center">
  {products.map((product) => (
    <div className="sm:w-2/5 md:w-1/5 mx-2 my-4 shadow-lg productList">
      <a href="#!" data-te-ripple-init data-te-ripple-color="light">
        <img className="h-72 object-cover productList-img" src={product.background_image} alt="" />
      </a>
      <div className="">
        <p className="my-2 text-xs text-zinc-400">BASE GAME</p>
        <h5 className="mb-2 text-m font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {product.name}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          ${product.playtime}
        </p>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default ProductList;

