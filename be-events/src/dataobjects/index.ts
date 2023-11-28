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

const payForEventCommandSchema = z.object({
  userId: z.string(),
  eventId: z.string(),
  method: z.string(),
});

const payForEventResponseSchema = z.object({
  amount: z.number(),
  paymentDate: z.date(),
  eventName: z.string(),
  externalPaymentId: z.string(),
});

const confirmThatPaymentExistsRequestSchema = z.object({
  userId: z.string(),
  eventId: z.string(),
});

const confirmThatPaymentExistsResponseSchema = z.object({
  exists: z.boolean(),
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

export type PayForEventCommand = z.infer<typeof payForEventCommandSchema>;
export type PayForEventResponse = z.infer<typeof payForEventResponseSchema>;
export type ConfirmThatPaymentExistsRequest = z.infer<
  typeof confirmThatPaymentExistsRequestSchema
>;
export type ConfirmThatPaymentExistsResponse = z.infer<
  typeof confirmThatPaymentExistsResponseSchema
>;
