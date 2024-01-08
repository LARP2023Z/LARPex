import { PQrScanner } from '../presenters/PQrScanner';
import { IInteractions } from '../services/IInteractions';

export class UCProcessQrCode {
  pqs: PQrScanner;
  iqc: IInteractions;

  constructor(pqs: PQrScanner, qc: IInteractions) {
    this.pqs = pqs;
    this.iqc = qc;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async processQrCode(qrCode: string, utils: { clippy: any }) {
    console.log(qrCode);
    const res = await this.iqc.processQrCode(qrCode);

    utils.clippy.play('GestureDown');
    utils.clippy.speak(`Interaction ${res.interactionType} has been used`);
  }
}
