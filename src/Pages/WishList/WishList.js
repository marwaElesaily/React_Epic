import { Fragment } from "react";
import GameCard from "../../Components/GameCard/GameCard";
import CartGamesSummary from "../../Components/CartGamesSummary/CartGamesSummary";
import classes from "./WishList.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWishList, removeFromWishList } from "../../Store/Store";
import { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";

const WishList = () => {
  const dispatch = useDispatch();
  let id = useSelector((state) => state.epic.id);
  let loader = useSelector((state) => state.epic.loader);
  const [gameRemoved, setGameRemoved] = useState(false);
  let games = useSelector((state) => state.epic.wishList);
  function removeFromWishListHandler(gameId) {
    dispatch(removeFromWishList({ userId: id, gameId }));
    setGameRemoved(!gameRemoved);
  }
  useEffect(() => {
    dispatch(getWishList({ id }));
  }, [gameRemoved]);

  const gamesList = games.map((game) => {
    return (
      <GameCard
        key={game._id}
        id={game._id}
        platform={game.platform}
        gameName={game.gameName}
        price={game.Price}
        imgURL={game.Photos[0]}
        moveTo={"Cart"}
        removeFromCartorWishListHandler={() =>
          removeFromWishListHandler(game._id)
        }
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>My WishList</h1>
      {loader ? (
        <Spinner />
      ) : (
        <div className={classes.wishlist}>
          <div className={classes.games}>
            {games.length === 0 ? (
              <h1 className={classes.wishlistEmpty}>
                Your Wishlist is empty
                <CartDashFill />
              </h1>
            ) : (
              gamesList
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default WishList;
