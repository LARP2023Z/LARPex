import { Dispatch } from 'react';
import { PayActionId, VMPayWndData } from '../viewModels/VMPayWnd';
import { pipe } from 'fp-ts/function';
import { fromNullable, fold } from 'fp-ts/Option';
import { Either, left, right } from 'fp-ts/Either';
export class PPayWnd {
  vmpw?: VMPayWndData;
  uv?: Dispatch<PayActionId>;

  injectDataHandle(vmpw: VMPayWndData, uv: Dispatch<PayActionId>) {
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
}
