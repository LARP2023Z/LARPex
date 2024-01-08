import { InteractResponse } from 'src/api/larpexApi';

export interface IInteractions {
  processQrCode(qrCode: string): Promise<InteractResponse>;
}
