import { Dispatch } from 'react';
import {
  QrScannerAction,
  QrScannerActionId,
  VMQrScannerWnd,
} from '../viewModels/VMQrScannerWnd';

export class PQrScanner {
  vmqs?: VMQrScannerWnd;
  uv?: Dispatch<QrScannerAction>;

  injectDataHandle(vmqs: VMQrScannerWnd, uv: Dispatch<QrScannerAction>) {
    this.vmqs = vmqs;
    this.uv = uv;
  }

  updateCurrentText(text: string) {
    if (this.vmqs) {
      this.uv?.({
        type: QrScannerActionId.UPDATE_CODE,
        data: text,
      });
    }
  }
}
