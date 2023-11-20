import { RegisterToEventResponse } from "../dataobjects";

export default interface IEventsRegistration {
  registerToEvent(
    userId: string,
    eventId: string
  ): Promise<RegisterToEventResponse>;
}
