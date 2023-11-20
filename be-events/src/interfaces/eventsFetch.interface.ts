import { GetEventDetailsResponse, EventListRow } from "../dataobjects";

export default interface IEventsFetch {
  listEvents(): Promise<EventListRow[]>;
  getEventDetails(eventId: string): Promise<GetEventDetailsResponse>;
}
