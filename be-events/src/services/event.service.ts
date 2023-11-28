import {
  EventListRow,
  GetEventDetailsResponse,
  RegisterToEventResponse,
} from "../dataobjects";
import IEventsFetch from "../interfaces/eventsFetch.interface";
import IEventsRegistration from "../interfaces/eventsRegistration.interface";
import prisma from "../utils/prisma";
export const eventsRegistration: IEventsRegistration = {
  registerToEvent: async function (
    _userId: string,
    eventId: string
  ): Promise<RegisterToEventResponse> {
    try {
      const _event_exists = await prisma.event.findUniqueOrThrow({
        where: { id: eventId },
      });

      const successResponse: RegisterToEventResponse = {
        status: "Success",
      };
      return successResponse;
    } catch (error) {
      const errorResponse: RegisterToEventResponse = {
        status: "SystemError",
      };
      return errorResponse;
    }
  },
};

export const eventsFetch: IEventsFetch = {
  listEvents: async function (): Promise<EventListRow[]> {
    try {
      const events = await prisma.event.findMany();

      const eventsMapped: EventListRow[] = events.map((event) => {
        return {
          eventId: event.id,
          status: event.status,
          name: event.name,
          hostname: event.host_id,
          startDate: event.start_date,
          endDate: event.end_date,
          isCurrentUserParticipating: Math.random() > 0.5,
        };
      });

      return eventsMapped;
    } catch (error) {
      throw new Error("Failed to fetch events");
    }
  },
  getEventDetails: async function (
    eventId: string
  ): Promise<GetEventDetailsResponse> {
    try {
      const event = await prisma.event.findUniqueOrThrow({
        where: {
          id: eventId,
        },
      });
      const plays = await prisma.play.findMany({
        where: {
          event_id: event.id,
        },
      });

      const eventDetailsResponse: GetEventDetailsResponse = {
        eventId: event.id,
        status: event.status,
        hostname: event.host_id,
        startDate: event.start_date,
        endDate: event.end_date,
        name: event.name,
        games: plays.map((play) => ({
          id: play.game_id,
        })),
        isCurrentUserParticipating: false,
      };
      return eventDetailsResponse;
    } catch (error) {
      throw new Error("Failed to fetch event details.");
    }
  },
};
