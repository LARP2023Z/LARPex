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
    this.iES
      .signUp(data)
      .then((response) => {
        this.pES.handleSignUpEvent(response);
      })
      .catch((reason) => alert(reason));
  }

  closeWindow() {
    this.pES.handleCloseWindow();
  }
}
