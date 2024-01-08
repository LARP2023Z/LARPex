import { InitializePaymentCommand } from 'src/api/larpexApi';
import { PaymentMethod } from '../types/PaymentMethod';

export type PaymentMethodDto = InitializePaymentCommand['paymentMethod'];

export interface IPayments {
  payForEvent(
    eventId: string,
    userId: string,
    amount: number,
    method: PaymentMethodDto
  ): Promise<void>;
  getPaymentMethods(): Promise<PaymentMethod[]>;
}
