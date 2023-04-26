import classes from "./CartGamesSummary.module.css";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { addToPurchase } from "../../Store/Store";
import { useEffect } from "react";
const CartGamesSummary = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.epic.cart);
  const userId = useSelector((state) => state.epic.id);
  const totalPrice = props.totalPrice;
  const totalGames = props.totalGames;
  // useEffect(() => {
  //   dispatch(addToPurchase({ userId, cart }));
  // }, []);
  // const totalPrice = useSelector((state) => state.games.totalPrice);
  return (
    <div className={classes.gamesSummary}>
      <h2>Games and Apps Summary</h2>
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>Total Games</h4>
          <h4>Total Price</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>{totalGames}</h4>
          <h4 className="font-bold">${totalPrice}</h4>
        </div>
        {/* <div className={classes.line}></div> */}
      </div>
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
    </div>
  );
};

export default CartGamesSummary;
