import { StarFill, StarHalf } from "react-bootstrap-icons";
import Slider from "../../Components/GameDetailsComp/Slider";
import GameCheckout from "../../Components/GameDetailsComp/GameCheckout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCartList, getGameById } from "../../Store/store";
import Spinner from "../../Components/Spinner/spinner";

const GameDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.epic.loader);
  const userId = useSelector((state) => state.epic.id);
  const game = useSelector((state) => state.epic.gameDetails);
  const cart = useSelector((state) => state.epic.cart);
  useEffect(() => {
    dispatch(getGameById({ id }));
  }, []);

  const ratingIcons = [];
  const fullStars = Math.floor(game.Rating);
  const halfStars = Math.ceil(game.Rating - fullStars);

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
              <p className="mt-4 text-xl ">Genres : Action, Open World</p>
              <p className="mt-4 text-xl">{game.Description}</p>
              <p className="mt-12 text-4xl">Epic Player Ratings</p>
              <p className="text-sm mt-2">
                Captured from players in the Epic Games ecosystem.
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
