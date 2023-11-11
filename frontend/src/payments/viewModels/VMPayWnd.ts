import { PaymentMethod } from '../types/PaymentMethod';

export class VMPayWndData {
  availablePaymentMethods: PaymentMethod[] = [];
  price = 0;
}

export enum PayActionId {}

export type PaymentFormData = {
  amount: number;
  currency: Currency;
  paymentMethod: string;
};

export type Currency = {
  name: string;
  code: string;
};
