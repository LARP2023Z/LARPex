import { UCPayForEvent } from '../useCases/UCPayForEvent';
import {
  PayAction,
  PayActionId,
  PaymentFormData,
  VMPayWndData,
} from '../viewModels/VMPayWnd';

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

export function CPayWnd(ucPFE: UCPayForEvent) {
  function onPaymentFormSubmit(values: PaymentFormData) {
    ucPFE.payForEvent('eventId', 'userId');
  }

  function onPageLoadEvent() {
    ucPFE.getPaymentMethods();
  }

  return {
    onPageLoadEvent,
    onPaymentFormSubmit,
  };
}
