import { OnResultFunction } from 'react-qr-reader';
import { UCProcessQrCode } from '../useCases/UCProcessQrCode';
import {
  QrScannerAction,
  QrScannerActionId,
  VMQrScannerWndData,
} from '../viewModels/VMQrScannerWnd';
import { debounce } from 'lodash';

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

  const boundProcessQrCode = ucPQC.processQrCode.bind(ucPQC);

  const debouncedProcessQrCode = debounce(boundProcessQrCode, 5000, {
    leading: true,
    trailing: false,
  });

  const onQrCodeScanned: OnResultFunction = (result, error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(utils);

    debouncedProcessQrCode(result?.getText() ?? '', utils);
  };

  return {
    onQrCodeScanned,
  };
}
