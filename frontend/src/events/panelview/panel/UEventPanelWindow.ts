import { PEventPanelWindow } from "./PEventPanelWindow";

export class UEventPanelWindow {
  pEM: PEventPanelWindow;

  constructor(pEM: PEventPanelWindow) {
    this.pEM = pEM;
  }

  goBack() {
    this.pEM.handleGoBack();
  }
}
