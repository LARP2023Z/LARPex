import { z } from "zod";

const registrationStatusSchema = z.enum([
  "Success",
  "TooLate",
  "TooManyPlayers",
  "SystemError",
]);

const registerToEventResponseSchema = z.object({
  status: registrationStatusSchema,
});

const eventListRowSchema = z.object({
  eventId: z.string(),
  name: z.string(),
  hostname: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.string(),
  isCurrentUserParticipating: z.boolean(),
});

const eventsResponseSchema = z.object({
  events: eventListRowSchema.array(),
});

const gameListRowSchema = z.object({
  id: z.string(),
});

const getEventDetailsResponseSchema = z.object({
  eventId: z.string(),
  name: z.string(),
  hostname: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.string(),
  games: gameListRowSchema.array(),
  isCurrentUserParticipating: z.boolean(),
});

export type RegistrationStatus = z.infer<typeof registrationStatusSchema>;
export type RegisterToEventResponse = z.infer<
  typeof registerToEventResponseSchema
>;

export type GetEventDetailsResponse = z.infer<
  typeof getEventDetailsResponseSchema
>;
export type EventListRow = z.infer<typeof eventListRowSchema>;
export type EventsResponse = z.infer<typeof eventsResponseSchema>;
export type GameListRow = z.infer<typeof gameListRowSchema>;
