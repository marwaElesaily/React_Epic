import classes from "./CartGamesSummary.module.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { addToPurchase } from "../../Store/store";
import { useTranslation } from "react-i18next";

const CartGamesSummary = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.epic.cart);
  const userId = useSelector((state) => state.epic.id);
  const totalPrice = props.totalPrice;
  const totalGames = props.totalGames;

  return (
    <div className={classes.gamesSummary}>
      <h2>{t("GamesandAppsSummary")}</h2>
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>{t("TotalGames")}</h4>
          <h4>{t("TotalPrice")}</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>{lang === "en"
            ? `${totalGames}`
            : `${new Intl.NumberFormat("ar-EG").format(
              totalGames
            )}`}</h4>
          <h4 className="font-bold">{lang === "en"
            ? `$${totalPrice}`
            : `${new Intl.NumberFormat("ar-EG").format(
              totalPrice
            )} US$`}</h4>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
      {cart.length === 0 ? (
        ""
      ) : (
        <PayPalScriptProvider
          options={{
            "client-id":
              "AfKb6OZQq0_qqMOnYdv4rBStU5BwTwgTeHXy3B-epdDJFFUETUSwCUYjfQ0g4rLJJgog9JkwPXmsijji",
          }}
        >
          <PayPalButtons
            className="w-full"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: String(totalPrice),
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              return actions.order.capture().then(function (details) {
                dispatch(addToPurchase({ userId, cart }));
                alert("Transaction completed, Thanks");
              });
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default CartGamesSummary;
