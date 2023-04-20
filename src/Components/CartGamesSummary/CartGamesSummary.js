import classes from "./CartGamesSummary.module.css";
import { useTranslation } from 'react-i18next';

const CartGamesSummary = () => {
  // const totalPrice = useSelector((state) => state.games.totalPrice);

  const { t, i18n } = useTranslation();

  return (
    <div className={classes.gamesSummary}>
      <h2>{t('GamesandAppsSummary')}</h2>
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>{t('cart-price')}</h4>
          <h4>{t('cart-taxes')}</h4>
          <h4>{t('cart-Subtotal')}</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>22</h4>
          <h4>{t('cart-CalculatedCheckout')}</h4>
          <h4>22</h4>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
      <button>{t('cart-CHECKOUT')}</button>
    </div>
  );
};

export default CartGamesSummary;
