import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Collections.css";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../Store/store";
// import changeGames from '../../Store/reducers/Games';

const Collections = () => {
  //   const dispatch = useDispatch();
  //   let games = useSelector((state) => state.epic.games);
  //   console.log(games);

  //   useEffect(() => {
  //     // use Redux Thunk
  //     dispatch(getGames());
  //   }, []);

  const games = [
    {
      name: "Limbo",
      background_image:
        "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    },
    {
      name: "God of War (2018)",
      background_image:
        "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    },
    {
      name: "Life is Strange",
      background_image:
        "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    },
  ];

  // useEffect(() => {

  //     // use Redux Thunk
  //     dispatch(GamesRedThunk());

  // const hide = (id) => {
  //   var p = document.getElementById(id);
  //   p.className = "clPlus invisible font-bold text-xs pl-1";
  // };

  const MyGames = [
    {
      name: "Limbo",
      background_image:
        "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    },
    {
      name: "God of War (2018)",
      background_image:
        "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    },
    {
      name: "Life is Strange",
      background_image:
        "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    },
  ];

  const show = (id) => {
    var p = document.getElementById(id);
    p.className = "clPlus visible font-bold text-xs pl-1";
  };

  const hide = (id) => {
    var p = document.getElementById(id);
    p.className = "clPlus invisible font-bold text-xs pl-1";
  };

  return (
    <div className="container my-6 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* <!-- Column --> */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-9">
          {/* <!-- Article 1 --> */}
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a
              href="#"
              onMouseOver={() => {
                show("clPlus1");
              }}
              onMouseOut={() => {
                hide("clPlus1");
              }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[0].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              <p
                id="clPlus1"
                className="clPlus invisible font-bold text-xs pl-1 md:ml-11"
              >
                +
              </p>
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline text-white" href="#">
                  {MyGames[0].name}
                </a>
              </h1>

              <div className="inh">
                Immerse yourself in the Star Trek universe and unravel a
                sinister mystery.{MyGames[0].Description}
              </div>
              {/* <div className='inh'>{MyGames[0].Description}</div> */}
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">Save Now</p>
              </a>
              <a
                className="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
          {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-9">
          {/* <!-- Article 2 --> */}
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a
              href="#"
              onMouseOver={() => {
                show("clPlus2");
              }}
              onMouseOut={() => {
                hide("clPlus2");
              }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[1].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              <p
                id="clPlus2"
                className="clPlus invisible font-bold text-xs pl-1"
              >
                +
              </p>
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline  text-white" href="#">
                  {MyGames[1].name}
                </a>
              </h1>
              <div className="inh">
                Immerse yourself in the Star Trek universe and unravel a
                sinister mystery.
              </div>
            </header>
            {/* css-1h3di0n */}
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">Play For Free</p>
              </a>
              <a
                className="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
          {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}

        {/* <!-- Column --> */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          {/* <!-- Article 3 --> */}
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a
              href="#"
              onMouseOver={() => {
                show("clPlus3");
              }}
              onMouseOut={() => {
                hide("clPlus3");
              }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[2].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              <p
                id="clPlus3"
                className="clPlus invisible font-bold text-xs pl-1"
              >
                +
              </p>
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline  text-white" href="#">
                  {MyGames[2].name}
                </a>
              </h1>
              <div className="inh">
                Immerse yourself in the Star Trek universe and unravel a
                sinister mystery.
              </div>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">Wishlist Now</p>{" "}
                {/* border-b-neutral-700 */}
              </a>
              <a
                className="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
          {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}
      </div>
    </div>
  );
};

export default Collections;
