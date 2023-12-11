import { EventPanelDataResponse } from "./EventPanelDataResponse";

export class MenuState {
  selectedEventId: string;
  eventsList: Array<EventPanelDataResponse>;

  constructor() {
    this.selectedEventId = "";
    this.eventsList = new Array<EventPanelDataResponse>();
  }
}
