import { PEventsListWindow } from '../eventslistview/PEventsListWindow';
import { IEventFetch } from '../interfaces/IEventFetch';

export class UShowEventList {
  pEL: PEventsListWindow;
  iEF: IEventFetch;

  constructor(pEL: PEventsListWindow, iEF: IEventFetch) {
    this.iEF = iEF;
    this.pEL = pEL;
  }

  fetchEvents() {
    this.iEF
      .listsEvents()
      .then((events) => {
        this.pEL.handleShowPaginatedEvents(events);
      })
      .catch((err) => {
        alert(err);
        this.pEL.handleShowPaginatedEvents([]);
      });
  }

  onSelectEvent(eventId: string) {
    this.pEL.handleChangeEvent(eventId);
  }
}
