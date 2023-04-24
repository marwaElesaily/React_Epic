import { Fragment, useEffect } from "react";
import classes from "./Cart.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import CartGamesSummary from "../../Components/CartGamesSummary/CartGamesSummary";
import GameCard from "../../Components/GameCard/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { getCartList, removeFromCart } from "../../Store/Store";
const Cart = () => {
  const games = useSelector((state) => state.epic.cart);
  const id = useSelector((state) => state.epic.id);
  const loader = useSelector((state) => state.epic.loader);
  const dispatch = useDispatch();
  function removeFromCartHandler(gameId) {
    dispatch(removeFromCart({ userId: id, gameId }));
  }
  useEffect(() => {
    dispatch(getCartList({ id }));
  }, []);

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
        removeFromCartHandler={removeFromCartHandler}
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>My Cart</h1>
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
          <CartGamesSummary />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
