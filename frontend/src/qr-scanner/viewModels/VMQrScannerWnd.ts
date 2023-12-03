export class VMQrScannerWnd {
  currentCode: string | null | undefined;
}

export enum QrScannerActionId {
  UPDATE_CODE = 'UPDATE_CODE',
}

type QrScannerActionData = Hehe;

export type QrScannerAction = {
  type: QrScannerActionId;
  data?: QrScannerActionData;
};

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<RecursivePartial<U>>
    : RecursivePartial<T[P]>;
};

type CircularReference<T> = {
  next: CircularReference<T> | T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Hehe = RecursivePartial<CircularReference<RecursivePartial<any>>> | any;
