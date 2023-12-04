import { IQrCode } from './IQrCode';

export class QrCode implements IQrCode {
  async processQrCode(qrCode: string): Promise<void> {
    // Mock
    return Promise.resolve();
  }
}
