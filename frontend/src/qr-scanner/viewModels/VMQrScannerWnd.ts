export class VMQrScannerWndData {
  currentCode: string | null | undefined;
}

export enum QrScannerActionId {
  UPDATE_CODE = 'UPDATE_CODE',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type QrScannerActionData = any;

export type QrScannerAction = {
  type: QrScannerActionId;
  data?: QrScannerActionData;
};
