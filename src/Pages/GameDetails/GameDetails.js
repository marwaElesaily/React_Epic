import { StarFill, StarHalf } from "react-bootstrap-icons";
import Slider from "../../Components/GameDetailsComp/Slider";
import GameCheckout from "../../Components/GameDetailsComp/GameCheckout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getCategories, getGameById } from "../../Store/store";
import Spinner from "../../Components/spinner/spinner";
import { useTranslation } from "react-i18next";

const GameDetails = () => {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  let { id } = useParams();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.epic.loader);
  const userId = useSelector((state) => state.epic.id);
  const game = useSelector((state) => state.epic.gameDetails);
  const categories = useSelector((state) => state.epic.categories);

  const cart = useSelector((state) => state.epic.cart);

  useEffect(() => {
    dispatch(getGameById({ id }));
    dispatch(getCategories());
    
  }, []);
  
  
  const ratingIcons = [];
  const fullStars = Math.floor(game.Rating);
  const halfStars = Math.ceil(game.Rating - fullStars);
  // geners=categories.map(category => 
  //   {if(category._id===game._id) {
  //     console.log(`category.name  ${category.name}`);
  //     return category.name}
    
  //   }
  //   )



  for (let i = 0; i < fullStars; i++) {
    ratingIcons.push(<StarFill key={i} />);
  }

  for (let i = 0; i < halfStars; i++) {
    ratingIcons.push(<StarHalf key={i + fullStars} />);
  }
  return (
    <div>
      {loader ? (
        <Spinner />
      ) : (
        <div className="p-20 flex flex-col w-full justify-between">
          <div className="w-9/12">
            <h1 className="text-5xl">{game.gameName}</h1>
            <div className="flex py-3 ">
              <div className="flex justify-center items-center">
                {ratingIcons}
              </div>
              <p className="ml-2 p-1 rounded-md bg-neutral-800 flex justify-center items-center">
                {game.Rating}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between ">
            <div className="w-9/12">
              <Slider game={game} />
              <div className="mt-4 text-xl inline-block">Genres :
              {/* {geners.map(gener => 
                <span>{gener.name}</span>
                )} */}
               </div>
              <p className="mt-4 text-xl">{lang==='en'?game.Description:game.Discription_ar}</p>
              <p className="mt-12 text-4xl">{t('EpicPlayerRatings')}</p>
              <p className="text-sm mt-2">
              {t('Captured')}
              </p>
              <div className="flex justify-center text-5xl">
                <p className="ml-2 p-1 flex justify-center items-center">
                  {game.Rating}
                </p>
                <div className="flex justify-center items-center">
                  {ratingIcons}
                </div>
              </div>
            </div>
            <div className="w-1/5 sticky top-0">
              {/* {game.photos[0]} */}
              <GameCheckout game={game} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetails;
