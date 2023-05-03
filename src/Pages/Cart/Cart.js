import { Fragment, useEffect } from "react";
import classes from "./Cart.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import CartGamesSummary from "../../Components/CartGamesSummary/CartGamesSummary";
import GameCard from "../../Components/GameCard/GameCard";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { epicActions, getCartList, removeFromCart } from "../../Store/store";
import { useCallback } from "react";
import { useState } from "react";
import Spinner from "../../Components/spinner/spinner";
import { Link } from "react-router-dom";
const Cart = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const games = useSelector((state) => state.epic.cart);
  const totalPrice = useSelector((state) => state.epic.totalPrice.toFixed(2));
  const id = useSelector((state) => state.epic.id);
  const loader = useSelector((state) => state.epic.loader);
  const [gameRemoved, setGameRemoved] = useState(false);
  function removeFromCartHandler(gameId) {
    dispatch(removeFromCart({ userId: id, gameId }));
    setGameRemoved(!gameRemoved);
  }
  useEffect(() => {
    dispatch(getCartList({ id }));
    // dispatch(epicActions.getTotalPrice());
  }, [gameRemoved, totalPrice]);
  console.log(totalPrice);

  const gamesList = games.map((game) => {
    return (
      <GameCard
        key={game._id}
        id={game._id}
        platform={game.platform}
        gameName={game.gameName}
        price={game.Price}
        imgURL={game.Photos[0]}
        moveTo={t("wishlist")}
        removeFromCartorWishListHandler={() => removeFromCartHandler(game._id)}
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>{t("MyCart")}</h1>
      {loader ? (
        <Spinner />
      ) : (
        <div className={classes.cart}>
          <div className={classes.games}>
            {games.length === 0 ? (
              <h1 className={classes.cartEmpty}>
                {t("cartEmpty")}
                <Link
                  to={"/browse"}
                  className="text-lg underline transition-all hover:font-bold"
                >
                 {t("ShopForGamesNow")} 
                </Link>
                <CartDashFill />
              </h1>
            ) : (
              gamesList
            )}
          </div>
          <div className={classes.gamesSummary}>
            <CartGamesSummary
              totalGames={games.length}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
