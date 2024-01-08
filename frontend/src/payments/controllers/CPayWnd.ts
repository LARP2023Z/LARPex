import { currentUserId } from 'src/api/user';
import { UCPayForEvent } from '../useCases/UCPayForEvent';
import {
  PayAction,
  PayActionId,
  PaymentFormData,
  VMPayWndData,
} from '../viewModels/VMPayWnd';
import { NavigateFunction } from 'react-router';

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
  utils: { changeView: NavigateFunction; clippy: any }
) {
  function onPaymentFormSubmit(values: PaymentFormData, eventId: string) {
    const paymentMethod = values.paymentMethod === 'BLIK' ? 'BLIK' : 'TRANSFER';

    ucPFE.payForEvent(
      eventId,
      currentUserId,
      values.amount,
      paymentMethod,
      utils
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
