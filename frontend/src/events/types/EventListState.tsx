import {EventsListDto} from "./EventsListDto";

export class EventListState {
    selectedEventId: string
    eventsList: Array<EventsListDto>

    constructor() {
        this.selectedEventId = ""
        this.eventsList = new Array<EventsListDto>()
    }
}
