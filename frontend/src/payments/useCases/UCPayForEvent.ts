import { PPayWnd } from '../presenters/PPayWnd';
import { IPayments } from '../services/IPayments';
import { IEvents } from '../services/IEvents';
import { IUsers } from '../services/IUsers';
import { generateHappyUrl, generateSadUrl } from '../views/utils/utils';

export class UCPayForEvent {
  ppw: PPayWnd;
  iP: IPayments;
  iEv: IEvents;
  iU: IUsers;

  constructor(ppw: PPayWnd, pay: IPayments, ev: IEvents, us: IUsers) {
    this.ppw = ppw;
    this.iP = pay;
    this.iEv = ev;
    this.iU = us;
  }

  payForEvent(
    eventId: string,
    userId: string, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    utils: { changeView: (viewId: string) => void; clippy: any }
  ) {
    // Mock

    this.iP.payForEvent(eventId, userId).then(
      () => {
        generateHappyUrl().subscribe((url) => {
          utils.clippy.play('Congratulate');
          utils.clippy.speak(
            'Płatność zakończona sukcesem. Gratulujemy i życzymy miłego dnia!'
          );
          utils.changeView(url);
        });
      },
      () => {
        generateSadUrl().subscribe((url) => {
          utils.clippy.play('Alert');
          utils.clippy.speak(
            'Płatność zakończona niepowodzeniem. Prosimy spróbować ponownie.'
          );
          utils.changeView(url);
        });
      }
    );
  }

  async getEventDetails(eventId: string) {
    // Mock
    const eventDetails = await this.iEv.getEventDetails(eventId);
    this.ppw.setPrice(eventDetails.price);
  }

  async showPaymentMethods() {
    // Mock
    const methods = await this.iP.getPaymentMethods();
    this.ppw.updatePaymentMethods(methods);
  }
}
