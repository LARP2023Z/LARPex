import { create } from 'zustand';
import { PaymentMethod } from '../types/PaymentMethod';

export class VMPayWndData {
  availablePaymentMethods: PaymentMethod[] = [];
  price = 0;
}

export enum PayActionId {
  UPDATE_METHODS,
  PAY,
}

type PayActionData = PaymentMethod[];

export type PayAction = {
  type: PayActionId;
  data?: PayActionData;
};

export type PaymentFormData = {
  amount: number;
  currency: Currency;
  paymentMethod: string;
};

export type Currency = {
  name: string;
  code: string;
};

export enum PayWindowId {
  PAYMENT_RESULT,
  PAYMENT_FORM,
}

const usePaymentsPageStore = create((set) => ({
  visibleWindows: [PayWindowId.PAYMENT_FORM],
  setVisibleWindows: (visibleWindows: PayWindowId[]) => set({ visibleWindows }),
}));
