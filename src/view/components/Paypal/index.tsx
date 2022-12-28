import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// const initialOptions = {
//   "client-id":
//     "ASauZ1kVM0kTP8lL9O0rnSOtm5reVWEI3rLAik4LM0bWOCkTPd_gXZpEzInq5-he6TKmfFotn9JDgGgr",
//   currency: "CAD",
//   // intent: "capture",
//   // "data-client-token": "abc123xyz==",
// };

const amount = "2";
const currency = "CAD";
const style = { layout: "vertical" as "vertical" | "horizontal" | undefined };

export default function Paypal({
  currency,
  showSpinner,
}: {
  currency: string;
  showSpinner: boolean;
}) {
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
      {showSpinner && isPending && <p>Pending</p>}
      <PayPalButtons
        style={style}
        forceReRender={[amount, currency, style]}
        createOrder={(data: any, actions: any) => {
          console.log(data);
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
            .then((orderId: any) => {
              // Your code here after create the order
              console.log(orderId);
              return orderId;
            });
        }}
        onApprove={function (data: any, actions: any) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            console.log("approved");
          });
        }}
      />
    </>
  );
}

// export default function Paypal() {
//   return <ButtonWrapper currency={currency} showSpinner={true} />;
// }
// export default function Paypal() {
//   return <PayPalButtons />
// }
