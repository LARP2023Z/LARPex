import { IEventRegistration } from '../interfaces/IEventRegistration';
import { EventSignUpDto } from '../types/EventSignUpDto';
import { PSignUpWindow } from '../signupview/PSignUpWindow';

export class USignUpForEvent {
  pES: PSignUpWindow;
  iES: IEventRegistration;

  constructor(pES: PSignUpWindow, iES: IEventRegistration) {
    this.pES = pES;
    this.iES = iES;
  }

  signUp(data: EventSignUpDto) {
    const reponse = this.iES.signUp(data);
    this.pES.handleSignUpEvent(reponse);
  }

  closeWindow() {
    this.pES.handleCloseWindow();
  }
}
