import { PEventMenuWindow } from "./PEventMenuWindow";
import { IEventPanel } from "./IEventPanel";

export class UEventMenuWindow {
  pEM: PEventMenuWindow;
  iEP: IEventPanel;

  constructor(pEM: PEventMenuWindow,
              iEP: IEventPanel) {
    this.pEM = pEM;
    this.iEP = iEP;
  }

  goBack() {
    this.pEM.handleGoBackEvent();
  }

  selectEvent(e: string) {
    this.pEM.handleSelectEvent(e);
  }

  showEventPanel(e: string) {
    this.pEM.handleShowEventPanel(e);
  }

  loadPageData() {
    console.log("UC load");
    const data = this.iEP.getEventData();
    this.pEM.handleShowMenuEvents(data);
  }
}