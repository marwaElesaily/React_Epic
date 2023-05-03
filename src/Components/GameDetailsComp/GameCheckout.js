import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToPurchase,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "../../Store/store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PayPalButton from "../PayPalButton/PayPalButton";

const GameCheckout = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // const [gameExistCart, setGameExistCart] = useState(false);
  // const [gameExistWishList, setGameExistCartWishList] = useState(false);
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.epic.cart);
  let wishList = useSelector((state) => state.epic.wishList);
  let userId = useSelector((state) => state.epic.id);
  let game = props.game;
  let gameExistCart = cart.some((cartGames) => cartGames._id === game._id);
  let gameExistWishList = wishList.some(
    (wishListGames) => wishListGames._id === game._id
  );
  // console.log(gameExist);
  useEffect(() => {
    // if (cart.some((cartGames) => cartGames._id === game._id)) {
    //   setGameExistCart(true);
    //   console.log("added");
    // }
    // if (wishList.some((wishListGames) => wishListGames._id === game._id)) {
    //   setGameExistCartWishList(true);
    //   console.log("added");
    // }
  }, [cart, wishList]);

  const removeFromWishListHandler = () => {
    dispatch(removeFromWishList({ userId, gameId: game._id })).then((res) => {
      if (gameExistWishList) {
        // setGameExistCartWishList(false);
      }
    });
  };
  const removeFromCartHandler = () => {
    dispatch(removeFromCart({ userId, gameId: game._id })).then((res) => {
      if (gameExistCart) {
        // setGameExistCart(false);
      }
    });
  };
  const addToWishListHandler = () => {
    dispatch(addToWishList({ userId, gameId: game._id }));
  };
  const addToCartHandler = () => {
    dispatch(addToCart({ userId, gameId: game._id }));
  };
  const gamesCheckoutPayPalCallBack = () => {
    dispatch(addToPurchase({ userId, cart: [game._id] }));
  };

  return (
    <div className={classes.gamesSummary}>
      <img src={game.photos && game.Photos[0]} alt="" />
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>{t("RefundType")}</h4>
          <h4>{t("Developer")}</h4>
          <h4>{t("Publisher")}</h4>
          <h4>{t("ReleaseDate")}</h4>
          <h4>{t("Platform")}</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>{t("Self-Refundable")}</h4>
          <h4>{game.Developer}</h4>
          <h4>{game.publisherName}</h4>
          <h4>{new Date(game.createdAt).toLocaleDateString()}</h4>
          <h4>{game.platForm === "windows" ? <Windows /> : <Apple />}</h4>
        </div>
      </div>
      <PayPalButton
        PayPalCallBackFn={gamesCheckoutPayPalCallBack}
        label="buynow"
        totalPrice={game.Price}
      />
      {/* <button>{t("BUYNOW")}</button> */}
      {gameExistCart ? (
        <button
          className={"bg-red-600 border-solid "}
          onClick={removeFromCartHandler}
        >
          {t("REMOVEFROMCART")}
          {/* {gameExist ? `${t("REMOVEFROMCART")} ` : `${t("ADDTOCART")} `} */}
        </button>
      ) : (
        <button
          className={"bg-transparent border-solid "}
          onClick={addToCartHandler}
        >
          {t("ADDTOCART")}
          {/* {gameExist ? `${t("REMOVEFROMCART")} ` : `${t("ADDTOCART")} `} */}
        </button>
      )}
      {gameExistWishList ? (
        <button
          onClick={removeFromWishListHandler}
          className="bg-red-600 border-solid"
        >
          {t("REMOVE")}
        </button>
      ) : (
        <button
          onClick={addToWishListHandler}
          className="bg-transparent border-solid"
        >
          {t("ADDTOWISHLIST")}
        </button>
      )}
    </div>
  );
};

export default GameCheckout;
