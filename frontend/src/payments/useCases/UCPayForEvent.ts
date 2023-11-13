import { PPayWnd } from '../presenters/PPayWnd';
import { EventDetails } from '../viewModels/VMEventWnd';
import { IPayments } from '../services/IPayments';
import { IEvents } from '../services/IEvents';

export class UCPayForEvent {
  ppw: PPayWnd;
  iP: IPayments;
  iEv: IEvents;

  constructor(ppw: PPayWnd, pay: IPayments, ev: IEvents) {
    this.ppw = ppw;
    this.iP = pay;
    this.iEv = ev;
  }

  payForEvent(eventId: string, userId: string): Promise<void> {
    // Mock
    return this.iP.payForEvent(eventId, userId);
  }

  getEventDetails(eventId: string): Promise<EventDetails> {
    // Mock
    return this.iEv.getEventDetails(eventId);
  }

  async showPaymentMethods() {
    // Mock
    const methods = await this.iP.getPaymentMethods();
    this.ppw.updatePaymentMethods(methods);
  }
}
