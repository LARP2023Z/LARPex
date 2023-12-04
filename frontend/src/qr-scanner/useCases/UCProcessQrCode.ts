import { PQrScanner } from '../presenters/PQrScanner';
import { IQrCode } from '../services/IQrCode';

export class UCProcessQrCode {
  pqs: PQrScanner;
  iqc: IQrCode;

  constructor(pqs: PQrScanner, qc: IQrCode) {
    this.pqs = pqs;
    this.iqc = qc;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  processQrCode(qrCode: string, utils: { clippy: any }) {
    console.log(utils);
    this.iqc.processQrCode(qrCode);
    utils.clippy.play('GestureDown');
    utils.clippy.speak(
      `Snif, snif, czy czujesz to co ja? Tak! To swieżutki kod QR: ${qrCode}`
    );
  }
}
