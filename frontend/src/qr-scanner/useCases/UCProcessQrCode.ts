import { PQrScanner } from '../presenters/PQrScanner';

export class UCProcessQrCode {
  pqs: PQrScanner;

  constructor(pqs: PQrScanner) {
    this.pqs = pqs;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  processQrCode(qrCode: string, utils: { clippy: any }) {
    console.log(utils);
    utils.clippy.play('GestureDown');
    utils.clippy.speak(
      `Snif, snif, czy czujesz to co ja? Tak! To swieżutki kod QR: ${qrCode}`
    );
  }
}
