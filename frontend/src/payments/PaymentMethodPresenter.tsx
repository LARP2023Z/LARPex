import { FC } from 'react';
import { PaymentMethod } from './types/PaymentMethod';
import { PaymentMethodView } from './PaymentMethodView';

export const PaymentMethodPresenter: FC = () => {
  const options: PaymentMethod[] = [
    { name: 'Przelew', icon: 'Przelew' },
    { name: 'Karta', icon: 'Karta' },
    { name: 'PayPal', icon: 'PayPal' },
  ];

  return <PaymentMethodView paymentMethods={options} />;
};
