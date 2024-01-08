import { api } from 'src/api/apiClient';
import { PaymentMethod } from '../types/PaymentMethod';
import { IPayments, PaymentMethodDto } from './IPayments';

export class PaymentProxyMock implements IPayments {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async payForEvent(
    eventId: string,
    userId: string,
    amount: number,
    method: PaymentMethodDto
  ): Promise<void> {
    await api.payments.postConfirm({
      amount: amount,
      eventId: eventId,
      userId: userId,
      paymentMethod: method,
    });

    await api.payments.getConfirm({
      eventId: eventId,
      userId: userId,
    });
  }

  getPaymentMethods(): Promise<PaymentMethod[]> {
    return Promise.resolve([
      { name: 'Przelew', icon: 'Przelew' },
      { name: 'BLIK', icon: 'BLIK' },
    ]);
  }
}
