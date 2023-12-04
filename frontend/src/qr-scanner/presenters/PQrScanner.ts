import { Dispatch } from 'react';
import {
  QrScannerAction,
  QrScannerActionId,
  VMQrScannerWndData,
} from '../viewModels/VMQrScannerWnd';

export class PQrScanner {
  vmqs?: VMQrScannerWndData;
  uv?: Dispatch<QrScannerAction>;

  injectDataHandle(vmqs: VMQrScannerWndData, uv: Dispatch<QrScannerAction>) {
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
