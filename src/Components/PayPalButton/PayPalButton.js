import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = (props) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AfKb6OZQq0_qqMOnYdv4rBStU5BwTwgTeHXy3B-epdDJFFUETUSwCUYjfQ0g4rLJJgog9JkwPXmsijji",
      }}
    >
      <PayPalButtons
        className="w-full"
        style={{ color: "blue", label: props.label }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: String(props.totalPrice),
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          return actions.order.capture().then(props.PayPalCallBackFn);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
