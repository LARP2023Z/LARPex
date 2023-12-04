import { OnResultFunction } from 'react-qr-reader';
import { UCProcessQrCode } from '../useCases/UCProcessQrCode';
import {
  QrScannerAction,
  QrScannerActionId,
  VMQrScannerWndData,
} from '../viewModels/VMQrScannerWnd';

export function updateQRScannerView(
  state: VMQrScannerWndData,
  action: QrScannerAction
): VMQrScannerWndData {
  switch (action.type) {
    case QrScannerActionId.UPDATE_CODE:
      if (!action.data)
        throw new Error('UPDATE_METHODS action should have data');
      return { ...state, currentCode: action.data };
  }
}

export function CQRScannerWnd(
  ucPQC: UCProcessQrCode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  utils: { changeView: (viewId: string) => void; clippy: any }
) {
  console.log(utils);
  const onQrCodeScanned: OnResultFunction = (result, error) => {
    if (error) {
      console.log(error);
      return;
    }

    alert(result?.getText() ?? '');

    ucPQC.processQrCode(result?.getText() ?? '', utils);
  };

  return {
    onQrCodeScanned,
  };
}
