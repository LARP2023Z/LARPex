import { UCPayForEvent } from '../useCases/UCPayForEvent';
import {
  PayAction,
  PayActionId,
  PaymentFormData,
  VMPayWndData,
} from '../viewModels/VMPayWnd';
import { generateHappyUrl, generateSadUrl } from '../views/aux/utils';

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
  utils: { changeView: (viewId: string) => void }
) {
  function onPaymentFormSubmit(values: PaymentFormData) {
    ucPFE.payForEvent('eventId', 'userId').then(
      () => {
        generateHappyUrl().subscribe((url) => {
          utils.changeView(url);
        });
      },
      () => {
        generateSadUrl().subscribe((url) => {
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
