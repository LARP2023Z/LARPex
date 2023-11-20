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
    console.log(data);
    this.iES
      .signUp(data)
      .then((response) => {
        console.log('WTF? ', response);
        // console.log("WTF? ", response.status.status);
        this.pES.handleSignUpEvent(response);
      })
      .catch((reason) => alert(reason));
  }

  closeWindow() {
    this.pES.handleCloseWindow();
  }
}
