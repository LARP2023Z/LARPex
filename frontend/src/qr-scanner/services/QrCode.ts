import { api } from 'src/api/apiClient';
import { IInteractions } from './IInteractions';
import { currentUserId } from 'src/api/user';
import { InteractResponse } from 'src/api/larpexApi';

export class Interactions implements IInteractions {
  async processQrCode(qrCode: string): Promise<InteractResponse> {
    return api.interactions.postInteract({
      qrCode: qrCode,
      userId: currentUserId,
    });
  }
}
