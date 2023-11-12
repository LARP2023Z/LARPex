import { PaymentMethod } from '../../types/PaymentMethod';

export function mapPaymentMethodToSelectOption(paymentMethod: PaymentMethod) {
  return {
    value: paymentMethod.name,
    label: paymentMethod.name,
  };
}
