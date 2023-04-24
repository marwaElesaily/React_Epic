import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartList } from "../../Store/Store";
import { useEffect, useState } from "react";
const GameCheckout = (props) => {
  const [gameExist, setGameExist] = useState(false);
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.epic.cart);
  let userId = useSelector((state) => state.epic.id);
  let game = props.game;
  // let gameExist = cart.find((cartGame) => cartGame._id === game._id);

  const addToCartHandler = () => {
    dispatch(addToCart({ userId, gameId: game._id }));
    setGameExist(true);
  };

  return (
    <div className={classes.gamesSummary}>
      <img src={game.photos && game.Photos[0]} alt="" />
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>Refund Type</h4>
          <h4>Developer</h4>
          <h4>Publisher</h4>
          <h4>Release Date</h4>
          <h4>Platform</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>Self-Refundable</h4>
          <h4>{game.Developer}</h4>
          <h4>{game.publisherName}</h4>
          <h4>{new Date(game.createdAt).toLocaleDateString()}</h4>
          <h4>{game.platForm === "windows" ? <Windows /> : <Apple />}</h4>
        </div>
      </div>
      <button>BUY NOW</button>
      <button
        className={`${
          gameExist ? "bg-red-500" : "bg-transparent"
        } border-solid `}
        onClick={addToCartHandler}
      >
        {gameExist ? "REMOVE FROM CART" : "ADD TO CART"}
      </button>
      <button className="bg-transparent border-solid">ADD TO WISHLIST</button>
    </div>
  );
};

export default GameCheckout;
