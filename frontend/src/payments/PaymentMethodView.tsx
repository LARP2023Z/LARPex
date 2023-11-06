import { FC } from 'react';
import { PaymentMethod } from './types/PaymentMethod';
import { GroupBox, TextInput, Select } from 'react95';

type PaymentMethodViewProps = {
  paymentMethods: PaymentMethod[];
};

export const PaymentMethodView: FC<PaymentMethodViewProps> = ({
  paymentMethods,
}) => {
  const options = paymentMethods.map((paymentMethod) => ({
    value: paymentMethod.name,
    label: paymentMethod.name,
  }));

  return (
    <>
      <GroupBox label="Kwota do zapłaty">
        <TextInput defaultValue="123.45 PLN" disabled />
      </GroupBox>

      <GroupBox label="Metoda płatności">
        <Select options={options} />
      </GroupBox>
    </>
  );
};
