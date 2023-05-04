import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Collections.css";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../Store/store";
// import changeGames from '../../Store/reducers/Games';
import { useTranslation } from "react-i18next";

const Collections = () => {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  //   const dispatch = useDispatch();
  //   let games = useSelector((state) => state.epic.games);
  //   console.log(games);

  //   useEffect(() => {
  //     // use Redux Thunk
  //     dispatch(getGames());
  //   }, []);

  // useEffect(() => {

  //     // use Redux Thunk
  //     dispatch(GamesRedThunk());

  // const hide = (id) => {
  //   var p = document.getElementById(id);
  //   p.className = "clPlus invisible font-bold text-xs pl-1";
  // };

  const MyGames = [
    {
      _id: "6434816028fbef397fc88bcb",
      name: "League of Legends",
      background_image:
        "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LoL_1200x1600-15ad6c981af8d98f50e833eac7843986?h=480&quality=medium&resize=1&w=360",
      Description: "Showcase your skills in the ultimate 5v5 battle arena that combines team strategy with solo mastery. Pick your role, perfect your build, and fight your way across the map to destroy the enemy Nexus. Always free to play—may the best team win.",
      Description_ar: 'اعرض مهاراتك في ساحة معركة 5 ضد 5 المطلقة التي تجمع بين إستراتيجية الفريق والإتقان الفردي. اختر دورك ، واتقن بنائك ، وشق طريقك عبر الخريطة لتدمير العدو Nexus. دائمًا مجاني للعب - قد يفوز الفريق الأفضل',
    },
    {
      _id: "6435b547b45deb54cb4dd500",
      name: "VALORANT",
      background_image:
        "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-03324a2dfe6b0b9557ce96f23681c859?h=480&quality=medium&resize=1&w=360",
      Description: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork. | FIGHT AROUND THE WORLD .",
      Description_ar: "VALORANT هي لعبة إطلاق نار تكتيكية 5 ضد 5 تعتمد على الشخصيات ويتم وضعها على المسرح العالمي. خداع المنافسة وتفوقها في اللعب وتفوقها على منافسيك بقدرات تكتيكية وألعاب نارية دقيقة وعمل جماعي قابل للتكيف. | قتال في جميع أنحاء العالم."
    },
    {
      _id: "6434971928fbef397fc88bcd",
      name: "PUBG BATTLEGROUNDS",
      background_image:
        "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/download-pubg-battlegrounds-offer-1er5e.jpg?h=480&quality=medium&resize=1&w=360",
      Description: "LAND, LOOT, SURVIVE! | Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer. | PUBG: BATTLEGROUNDS is a free-to-play game.",
      Description_ar: "الأرض ، الكثير ، البقاء على قيد الحياة! | شكّل فريقًا وانضم إلى Battlegrounds للاستمتاع بتجربة Battle Royale الأصلية التي لا يمكن أن تقدمها سوى PUBG: BATTLEGROUNDS. | PUBG: BATTLEGROUNDS هي لعبة مجانية للعب."
    },
  ];

  // const show = (id) => {
  //   var p = document.getElementById(id);
  //   p.className = "clPlus visible font-bold text-xs pl-1";
  // };

  // const hide = (id) => {
  //   var p = document.getElementById(id);
  //   p.className = "clPlus invisible font-bold text-xs pl-1";
  // };

  return (
    <div className="container my-6 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {/* <!-- Column --> */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-9">
          {/* <!-- Article 1 --> */}
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a
              href="#"
              // onMouseOver={() => {
              //   show("clPlus1");
              // }}
              // onMouseOut={() => {
              //   hide("clPlus1");
              // }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[0].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              {/* <p
                id="clPlus1"
                className="clPlus invisible font-bold text-xs pl-1 md:ml-11"
              >
                +
              </p> */}
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline text-white" href="#">
                  {MyGames[0].name}
                </a>
              </h1>

              <div className="inh">
                {lang==='en'?MyGames[0].Description:MyGames[0].Description_ar}
              </div>
              {/* <div className='inh'>{MyGames[0].Description}</div> */}
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">{t('SaveNow')}</p>
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
              // onMouseOver={() => {
              //   show("clPlus2");
              // }}
              // onMouseOut={() => {
              //   hide("clPlus2");
              // }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[1].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              {/* <p
                id="clPlus2"
                className="clPlus invisible font-bold text-xs pl-1"
              >
                +
              </p> */}
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline  text-white" href="#">
                  {MyGames[1].name}
                </a>
              </h1>
              <div className="inh">
              {lang==='en'?MyGames[1].Description:MyGames[1].Description_ar}
              </div>
            </header>
            {/* css-1h3di0n */}
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">{t('PlayForFree')}</p>
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
              // onMouseOver={() => {
              //   show("clPlus3");
              // }}
              // onMouseOut={() => {
              //   hide("clPlus3");
              // }}
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                alt="Placeholder"
                className="block h-auto w-full rounded-lg opacity-80 hover:opacity-100"
                src={MyGames[2].background_image}
                style={{ zIndex: "1", display: "block", objectFit: "fill" }}
              />
              {/* <p
                id="clPlus3"
                className="clPlus invisible font-bold text-xs pl-1"
              >
                +
              </p> */}
            </a>

            <header className="block items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a className="no-underline  text-white" href="#">
                  {MyGames[2].name}
                </a>
              </h1>
              <div className="inh">
              {lang==='en'?MyGames[2].Description:MyGames[2].Description_ar}
              </div>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline  text-white"
                href="#"
              >
                <p className="ml-2 fotPP">{t('WishlistNow')}</p>{" "}
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
