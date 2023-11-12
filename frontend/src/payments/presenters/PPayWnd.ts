import { Dispatch } from 'react';
import { PayAction, PayActionId, VMPayWndData } from '../viewModels/VMPayWnd';
import { pipe } from 'fp-ts/function';
import { fromNullable, fold } from 'fp-ts/Option';
import { Either, left, right } from 'fp-ts/Either';
import { PaymentMethod } from '../types/PaymentMethod';
export class PPayWnd {
  // Pattern z wykładu - obfuskacja poprzez kilkuliterowe nazwy zmiennych
  vmpw?: VMPayWndData;
  uv?: Dispatch<PayAction>;

  injectDataHandle(vmpw: VMPayWndData, uv: Dispatch<PayAction>) {
    this.vmpw = vmpw;
    this.uv = uv;
  }

  setPrice(price: number): Either<Error, number> {
    return pipe(
      fromNullable(this.vmpw),
      fold(
        () => left(new Error('vmpw is not injected')),
        (vmpw) => {
          vmpw.price = price;
          return right(price);
        }
      )
    );
  }

  updatePaymentMethods(methods: PaymentMethod[]) {
    this.uv?.({ type: PayActionId.UPDATE_METHODS, data: methods });
  }
}
