import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "test",
  currency: "CAD",
  // intent: "capture",
  // "data-client-token": "abc123xyz==",
};

const amount = "100";
const currency = "CAD";

const ButtonWrapper = ({
  currency,
  showSpinner,
}: {
  currency: string;
  showSpinner: boolean;
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  React.useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, []);

  return (
    <>
      {(showSpinner && isPending) && <p>Pending</p>}
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log(orderId)
              return orderId;
            });
        }}
        onApprove={function (data, actions: any) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            console.log("approved");
          });
        }}
      />
    </>
  );
};

export default function Paypal() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons></PayPalButtons>
      {/* <ButtonWrapper currency={currency} showSpinner={true}/> */}
    </PayPalScriptProvider>
  );
}
