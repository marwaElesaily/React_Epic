import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartList } from "../../Store/store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GameCheckout = (props) => {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // const [gameExist, setGameExist] = useState(false);
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.epic.cart);
  let userId = useSelector((state) => state.epic.id);
  let game = props.game;
  let gameExist = cart.some((cartGame) => cartGame._id === game._id);
  // console.log(gameExist);
  // useEffect(() => {}, [cart]);

  const addToCartHandler = () => {
    dispatch(addToCart({ userId, gameId: game._id }));
  };

  return (
    <div className={classes.gamesSummary}>
      <img src={game.photos && game.Photos[0]} alt="" />
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>{t('RefundType')}</h4>
          <h4>{t('Developer')}</h4>
          <h4>{t('Publisher')}</h4>
          <h4>{t('ReleaseDate')}</h4>
          <h4>{t('Platform')}</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>{t('Self-Refundable')}</h4>
          <h4>{game.Developer}</h4>
          <h4>{game.publisherName}</h4>
          <h4>{new Date(game.createdAt).toLocaleDateString()}</h4>
          <h4>{game.platForm === "windows" ? <Windows /> : <Apple />}</h4>
        </div>
      </div>
      <button>{t('BUYNOW')}</button>
      <button
        className={`${
          gameExist ? "bg-red-500" : "bg-transparent"
        } border-solid `}
        onClick={addToCartHandler}
      >
        {gameExist ? `${t("REMOVEFROMCART")} `:`${t("ADDTOCART")} `}
      </button>
      <button className="bg-transparent border-solid">{t('ADDTOWISHLIST')}</button>
    </div>
  );
};

export default GameCheckout;
