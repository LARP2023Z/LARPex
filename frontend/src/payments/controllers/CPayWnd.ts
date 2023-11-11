import { UCPayForEvent } from '../useCases/UCPayForEvent';
import { PaymentFormData, VMPayWndData } from '../viewModels/VMPayWnd';

export function CPayWnd(ucPFE: UCPayForEvent) {
  function onPaymentFormSubmit(values: PaymentFormData) {
    ucPFE.payForEvent('eventId', 'userId');
  }

  return {
    onPaymentFormSubmit,
  };
}
