import { UCPayForEvent } from '../useCases/UCPayForEvent';
import {
  PayAction,
  PayActionId,
  PaymentFormData,
  VMPayWndData,
} from '../viewModels/VMPayWnd';
import { generateHappyUrl, generateSadUrl } from '../views/utils/utils';

export function updatePayView(
  state: VMPayWndData,
  action: PayAction
): VMPayWndData {
  const newState = { ...state };

  switch (action.type) {
    case PayActionId.UPDATE_METHODS:
      if (!action.data)
        throw new Error('UPDATE_METHODS action should have data');
      return { ...state, availablePaymentMethods: action.data };
  }

  return newState;
}

export function CPayWnd(
  ucPFE: UCPayForEvent,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  utils: { changeView: (viewId: string) => void; clippy: any }
) {
  function onPaymentFormSubmit(_values: PaymentFormData) {
    ucPFE.payForEvent('eventId', 'userId').then(
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

  function onPageLoadEvent() {
    ucPFE.showPaymentMethods();
  }

  return {
    onPageLoadEvent,
    onPaymentFormSubmit,
  };
}
