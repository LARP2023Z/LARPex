import { fa, faker, tr } from "@faker-js/faker";
import {
  EventListRow,
  EventStatus,
  GetEventDetailsResponse,
  GetEventManagementDetailsRequest,
  LaunchEventCommand,
  LaunchResponse,
  ManagementEventDetails,
  RegisterToEventResponse,
} from "../dataobjects";
import IEventManager from "../interfaces/eventManager.interface";
import IEventsFetch from "../interfaces/eventsFetch.interface";
import IEventsRegistration from "../interfaces/eventsRegistration.interface";
import prisma from "../utils/prisma";
export const eventsRegistration: IEventsRegistration = {
  registerToEvent: async function (
    userId: string,
    eventId: string
  ): Promise<RegisterToEventResponse> {
    try {
      const event = await prisma.event.findUniqueOrThrow({
        where: { id: eventId },
      });

      if ((event.status as EventStatus) !== "Planned") {
        const tooLateResponse: RegisterToEventResponse = {
          status: "TooLate",
        };
        return tooLateResponse;
      }

      //check if too many players
      const userEvents = await prisma.userEvent.findMany({
        where: {
          event_id: eventId,
        },
      });
      // TODO: call /games -> const xd = min()
      //minimum out of all games in event
      const _mock_min_max_players = faker.number.int({ min: 0, max: 100 });
      const usersIn = userEvents.length;

      if (usersIn >= _mock_min_max_players) {
        return {
          status: "TooManyPlayers",
        };
      }

      await prisma.userEvent.create({
        data: {
          event_id: eventId,
          user_id: userId,
        },
      });
      return {
        status: "Success",
      };
    } catch (error) {
      return {
        status: "SystemError",
      };
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
          hostId: event.host_id,
          startDate: event.start_date,
          endDate: event.end_date,
          // TODO: there's no userId in params
          isCurrentUserParticipating: false,
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
        hostId: event.host_id,
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

export const eventManager: IEventManager = {
  launchEvent: async function (
    command: LaunchEventCommand
  ): Promise<LaunchResponse> {
    try {
      const { eventId } = command;
      const event = await prisma.event.findUniqueOrThrow({
        where: { id: eventId },
      });

      if (event.status !== "Planned") {
        throw new Error("Event cannot be started.");
      }

      const newEventStatus: EventStatus = "InProgress";

      await prisma.event.update({
        where: { id: eventId },
        data: { status: newEventStatus },
      });

      const launchResponse: LaunchResponse = {};

      return launchResponse;
    } catch (error: any) {
      throw new Error(error.message || "Failed to launch event.");
    }
  },
  getEventManagementDetails: async function (
    command: GetEventManagementDetailsRequest
  ): Promise<ManagementEventDetails> {
    const { eventId } = command;
    try {
      const {
        name,
        status,
        start_date: startDate,
        end_date: endDate,
        price,
        host_id: hostId,
        plays,
        userEvents,
      } = await prisma.event.findUniqueOrThrow({
        where: {
          id: command.eventId,
        },
        include: { plays: true, userEvents: true },
      });
      const games = plays.map((play) => {
        return { id: play.game_id };
      });
      const managmentEventDetails: ManagementEventDetails = {
        status,
        eventId,
        name,
        hostId,
        startDate,
        endDate,
        games,
        numberOfParticipants: userEvents.length,
        price,
      };

      return managmentEventDetails;
    } catch (error) {
      throw new Error("Failed to fetch mangement event details.");
    }
  },
};
