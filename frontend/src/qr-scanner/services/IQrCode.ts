export interface IQrCode {
  processQrCode(qrCode: string): Promise<void>;
}
