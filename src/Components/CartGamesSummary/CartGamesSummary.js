import classes from "./CartGamesSummary.module.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { addToPurchase } from "../../Store/store";
import { useTranslation } from "react-i18next";
import PayPalButton from "../PayPalButton/PayPalButton";

const CartGamesSummary = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const games = useSelector((state) => state.epic.cart);
  const userId = useSelector((state) => state.epic.id);
  const totalPrice = props.totalPrice;
  const totalGames = props.totalGames;
  const cart = games.map((game) => game._id);

  function gamesSummaryPayPalCallBack(details) {
    dispatch(addToPurchase({ userId, cart }));
    alert("Transaction completed, Thanks");
  }

  return (
    <div className={classes.gamesSummary}>
      <h2>{t("GamesandAppsSummary")}</h2>
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>{t("TotalGames")}</h4>
          <h4>{t("TotalPrice")}</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>
            {lang === "en"
              ? `${totalGames}`
              : `${new Intl.NumberFormat("ar-EG").format(totalGames)}`}
          </h4>
          <h4 className="font-bold">
            {lang === "en"
              ? `$${totalPrice}`
              : `${new Intl.NumberFormat("ar-EG").format(totalPrice)} US$`}
          </h4>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
      {cart.length === 0 ? (
        ""
      ) : (
        <PayPalButton
          label="checkout"
          totalPrice={totalPrice}
          PayPalCallBackFn={gamesSummaryPayPalCallBack}
        />
      )}
    </div>
  );
};

export default CartGamesSummary;
