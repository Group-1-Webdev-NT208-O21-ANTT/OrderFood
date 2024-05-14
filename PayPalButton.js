import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onCancel, onError }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AR8EANiNREfNLxKUpSHYJrorMpp_A1BEO19T0xbI6knffZd2sI1H3r5zB4HawLTjaltVc1lvedw5EHt6" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details);
          });
        }}
        onCancel={onCancel}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
