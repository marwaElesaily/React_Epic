import { Fragment, useEffect } from "react";
import classes from "./Cart.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import CartGamesSummary from "../../Components/CartGamesSummary/CartGamesSummary";
import GameCard from "../../Components/GameCard/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { epicActions, getCartList, removeFromCart } from "../../Store/Store";
import { useCallback } from "react";
import { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";
const Cart = () => {
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
        moveTo={"Wishlist"}
        removeFromCartorWishListHandler={() => removeFromCartHandler(game._id)}
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>My Cart</h1>
      {loader ? (
        <Spinner />
      ) : (
        <div className={classes.cart}>
          <div className={classes.games}>
            {games.length === 0 ? (
              <h1 className={classes.cartEmpty}>
                Your cart is empty
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
