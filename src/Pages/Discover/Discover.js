import React, { useState } from "react";
// import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios'
// import axiosInstance from './../../axiosConfig/instanc';
import TopSeller from "../../Components/TopSeller/topSeller";
import StoreSlider from "../../Components/StoreSlider/StoreSlider";
import "./Discover.css";
import FreeGames from "../../Components/freeGames/freeGames";
import { GamesOnSale } from "../../Components/gamesOnSale/gamesOnSale";

const Discover = () => {
  // const [search, setsearch] = useState("");

  // py-40 px-20
  return (
    <section className="">
      <section className="p-20">
        <StoreSlider></StoreSlider>
      </section>
      <section className="p-20">
        <GamesOnSale></GamesOnSale>
      </section>
      <section className="p-20">
        <FreeGames></FreeGames>
      </section>
      <section className="w-full h-full place-items-center">
        <div className="flex py-40 px-20  Container">
          {/* section 1 w-6/12 h-2/4*/}

          <div className="mb-7 Section">
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white">
                Top Sellers
              </p>
              <button className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                VIEW MORE
              </button>
            </div>

            {/* Games */}
            <div className="cards">
              <TopSeller></TopSeller>
            </div>
          </div>

          {/* section 2 */}

          <div className="mb-7 Section">
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white">
                Most Played
              </p>
              <button className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                VIEW MORE
              </button>
            </div>

            {/* Games */}
            <div className="cards">
              <TopSeller></TopSeller>
            </div>
          </div>

          {/* section 3 */}

          <div className="mb-7" id="Section3">
            <div className="flex mb-7 w-full header">
              <p className="title text-2xl font-bold text-left text-white">
                Top Player Rating
              </p>
              <button className="titlebtn text-white p-4 rounded-lg text-xs hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ">
                VIEW MORE
              </button>
            </div>

            {/* Games */}
            <div className="cards">
              <TopSeller></TopSeller>
            </div>
          </div>

          {/* <Outlet  context={[search, setsearch]}/> */}
        </div>
      </section>
    </section>
  );
};

export default Discover;
