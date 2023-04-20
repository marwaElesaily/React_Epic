import { Fragment, useEffect } from "react";
import classes from "./Cart.module.css";
import { CartDashFill } from "react-bootstrap-icons";
import CartGamesSummary from "../../Components/CartGamesSummary/CartGamesSummary";
import GameCard from "../../Components/GameCard/GameCard";
import { useTranslation } from 'react-i18next';

const Cart = () => {

  const { t, i18n } = useTranslation();

  const games = [
    {
      id: 0,
      gameName: "Marvel's Spider-Man Remastered",
      platform: "windows",
      price: 6.09,
      imgURL:
        "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808",
    },
    {
      id: 1,
      gameName: "PUBG",
      platform: "windows",
      price: 6.09,
      imgURL: "https://i.ebayimg.com/images/g/NFYAAOSwtoVbOU2~/s-l500.jpg",
    },
    {
      id: 2,
      gameName: "Need For Speed",
      platform: "mac",
      price: 6.09,
      imgURL:
        "https://cdnb.artstation.com/p/assets/images/images/020/435/641/large/sneaky-arts-80s-heat-min.jpg?1567753592",
    },
    {
      id: 3,
      gameName: "ICY TOWER",
      platform: "mac",
      price: 6.09,
      imgURL:
        "https://m.media-amazon.com/images/M/MV5BZmRkMDZhNzctYzkwZi00MTk3LWJkZDUtNGE1NDczODk0N2M1XkEyXkFqcGdeQXVyMTA3OTExMjU2._V1_FMjpg_UX1000_.jpg",
    },
  ];

  const gamesList = games.map((game) => {
    return (
      <GameCard
        key={game.id}
        platform={game.platform}
        gameName={game.gameName}
        price={game.price}
        imgURL={game.imgURL}
        moveTo={t('wishlist')}
      ></GameCard>
    );
  });
  return (
    <Fragment>
      <h1 className={classes.sectionName}>{t('MyCart')}</h1>
      <div className={classes.cart}>
        <div className={classes.games}>
          {games.length === 0 ? (
            <h1 className={classes.cartEmpty}>
              {t('cartEmpty')}
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
