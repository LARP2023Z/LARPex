import { PaymentMethod } from '../types/PaymentMethod';
import { IPayments } from './IPayments';

export class PaymentProxyMock implements IPayments {
  payForEvent(eventId: string, userId: string): Promise<void> {
    return Math.random() > 0.5 ? Promise.resolve() : Promise.reject();
  }

  getPaymentMethods(): Promise<PaymentMethod[]> {
    return Promise.resolve([
      { name: 'Przelew', icon: 'Przelew' },
      { name: 'Karta', icon: 'Karta' },
      { name: 'PayPal', icon: 'PayPal' },
    ]);
  }
}
