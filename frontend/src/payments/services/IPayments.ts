import { PaymentMethod } from '../types/PaymentMethod';

export interface IPayments {
  payForEvent(eventId: string, userId: string): Promise<void>;
  getPaymentMethods(): Promise<PaymentMethod[]>;
}
