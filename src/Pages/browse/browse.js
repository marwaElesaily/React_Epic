import React, { useState, useEffect } from "react";
import ProductList from "../../Components/productList/productList";
import FilterSide from "../../Components/filterSide/filterSide";
import { useDispatch, useSelector } from "react-redux";
import GamesRedThunk from "../../Store/actions/GamesRedThunk";
import './browse.css'
import Accordion from "../../Components/accordion/accordion";



function Browse() {
  let MyGames = useSelector((state) => state.changeGames);
  MyGames = MyGames.Games;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GamesRedThunk());
    console.log(MyGames);
  }, []);
  const [filterItem, setFilterItem] = useState('all')
  const [filterItemGenre, setFilterItemGenre] = useState('all')
  const [filterItemPlatform, setFilterItemPlatform] = useState('all')

  const filteredProductsByPrice = MyGames.filter((product) => {
    if (filterItem === '5') return product.playtime < 5
    else if (filterItem === '10') return product.playtime < 10
    else if (filterItem === '20') return product.playtime < 20
    else if (filterItem === '30') return product.playtime < 30
    else if (filterItem === '14') return product.playtime >= 14
    else return product
  })


  var filteredProductsByGenre = filteredProductsByPrice
  if (filterItemGenre === 'action') {
    filteredProductsByGenre = filteredProductsByPrice.filter((product) => {
      for (let i = 0; i < product.genres.length; i++) {
        if (product.genres[i].name === 'Action') {
          return product
        }
      }
    })

  }
  else if (filterItemGenre === 'shooter') {

    filteredProductsByGenre = filteredProductsByPrice.filter((product) => {
      for (let i = 0; i < product.genres.length; i++) {
        if (product.genres[i]?.name === 'Shooter') {
          return product
        }
      }
    })
  }


  var filteredProductsByPlatform = filteredProductsByGenre
  if (filterItemPlatform === 'windows') {
    filteredProductsByPlatform = filteredProductsByGenre.filter((product) => {
      for (let i = 0; i < product.parent_platforms.length; i++) {
        if (product.parent_platforms[i].platform.slug === 'pc') {
          return product
        }
      }
    })

  }
  else if (filterItemPlatform === 'mac') {
    filteredProductsByPlatform = filteredProductsByGenre.filter((product) => {
      for (let i = 0; i < product.parent_platforms.length; i++) {
        if (product.parent_platforms[i].platform.slug === 'mac') {
          return product
        }
      }
    })

  }

  return (
    <>

      <div
        type="button"
        className="inline-block lg:hidden px-6 pb-2 pt-2.5 text-base cursor-pointer leading-normal text-white filter-smallDevices"
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        data-te-ripple-color="light">
        <span className="me-2"> Filter</span>
        <i className="bi bi-filter"></i>
      </div>

      <div
        data-te-modal-init
        className="fixed sm:left-1/4 md:left-32 top-0  z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
          <div
            className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col border-none bg-black bg-clip-padding text-current shadow-lg outline-none bg-black">
            <div
              className="flex h-24  flex-shrink-0 items-center justify-around  border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 accor">

              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalLabel">
                Filters
              </h5>

              <button
                type="button"
                className="block ml-80 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative flex-auto p-4" data-te-modal-body-ref>
              <Accordion
                filterItem={filterItem} setFilterItem={setFilterItem}
                filterItemGenre={filterItemGenre} setFilterItemGenre={setFilterItemGenre}
                filterItemPlatform={filterItemPlatform} setFilterItemPlatform={setFilterItemPlatform}
              />
            </div>
            <div
              className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block  px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:my-10 sm:w-full sm-ml-0 md-ml-0 md:w-full  lg:w-4/5 lg:ml-20 xl:ml-40">
        <div className="sm:w-full lg:w-3/4">
          <ProductList products={filteredProductsByPlatform} />
        </div>
        <div className="sm:hidden lg:block browse-filterSide  w-1/5">
          <FilterSide filterItem={filterItem} setFilterItem={setFilterItem}
            filterItemGenre={filterItemGenre} setFilterItemGenre={setFilterItemGenre}
            filterItemPlatform={filterItemPlatform} setFilterItemPlatform={setFilterItemPlatform}
          />
        </div>

      </div>
    </>
  );
}

export default Browse;
















