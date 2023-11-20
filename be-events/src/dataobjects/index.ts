import { z } from "zod";

// userSchema.parse({ username: "Ludwig" });
// const paymentSummarySchema = z.object({
//   amount: z.number(),
//   paymentDate: z.date(),
//   eventName: z.string(),
//   paymentId: z.string(),
// });

// const fiscalSystemPaymentSummarySchema = z.object({
//   amount: z.number(),
//   paymentDate: z.date(),
//   eventId: z.string(),
//   playerName: z.string(),
// });

const registrationStatusSchema = z.enum([
  "Success",
  "TooLate",
  "TooManyPlayers",
  "SystemError",
]);

const eventStatusSchema = z.enum(["InProgress", "Finished", "Planned"]);

// const paymentMethodSchema = z.enum(["Blik", "Card", "SMS", "Paypal", "Bank"]);

const registerToEventResponseSchema = z.object({
  status: registrationStatusSchema,
});

// const paymentIdentitySchema = z.object({
//   userId: z.string(),
//   eventId: z.string(),
//   paymentMethod: paymentMethodSchema,
//   amount: z.number(),
//   paymentDate: z.date(),
// });

const eventListRowSchema = z.object({
  id: z.string(),
  name: z.string(),
  host: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.string(),
  // status: eventStatusSchema,
  isCurrentUserParticipating: z.boolean(),
});

// const userDetailResponseSchema = z.object({
//   Id: z.number(),
//   Alias: z.string(),
//   Name: z.string(),
//   Surname: z.string(),
//   birthDate: z.date(),
//   email: z.string(),
// });

const eventsResponseSchema = z.object({
  events: eventListRowSchema.array(),
});

const gameListRowSchema = z.object({
  id: z.string(),
});

const getEventDetailsResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  host: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  status: z.string(),
  games: gameListRowSchema.array(),
  isCurrentUserParticipating: z.boolean(),
});

// FIXME:
// const paymentSystemResponseSchema = z.object({});
// FIXME:
// const paymentConfirmationResponseSchema = z.object({});
// FIXME:
// const paymentDetailsRequestSchema = z.object({});

// export type PaymentSummary = z.infer<typeof paymentSummarySchema>;
// export type PaymentMethod = z.infer<typeof paymentMethodSchema>;
export type RegistrationStatus = z.infer<typeof registrationStatusSchema>;
// export type FiscalSystemPaymentSummary = z.infer<
//   typeof fiscalSystemPaymentSummarySchema
// >;
export type RegisterToEventResponse = z.infer<
  typeof registerToEventResponseSchema
>;
// export type PaymentIdentity = z.infer<typeof paymentIdentitySchema>;

export type GetEventDetailsResponse = z.infer<
  typeof getEventDetailsResponseSchema
>;
export type EventListRow = z.infer<typeof eventListRowSchema>;
// export type UserDetailResponse = z.infer<typeof userDetailResponseSchema>;
export type EventsResponse = z.infer<typeof eventsResponseSchema>;
export type GameListRow = z.infer<typeof gameListRowSchema>;

// export type PaymentSystemResponse = z.infer<typeof paymentSystemResponseSchema>;
// export type PaymentConfirmationResponse = z.infer<
//   typeof paymentConfirmationResponseSchema
// >;
// export type PaymentDetailsRequest = z.infer<typeof paymentDetailsRequestSchema>;
