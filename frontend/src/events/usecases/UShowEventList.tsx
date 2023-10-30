import {PEventsListWindow} from "../eventslistview/PEventsListWindow";
import {IEventFetch} from "../interfaces/IEventFetch";

export class UShowEventList {
    pEL: PEventsListWindow;
    iEF: IEventFetch;

    constructor(pEL: PEventsListWindow,
                iEF: IEventFetch) {
        this.iEF = iEF;
        this.pEL = pEL;
    }

    fetchEvents() {
        const events = this.iEF.listsEvents();
        this.pEL.handleShowPaginatedEvents(events)
    }

    onSelectEvent(eventId: string) {
        this.pEL.handleChangeEvent(eventId)
    }
}
