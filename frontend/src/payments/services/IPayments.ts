export interface IPayments {
  payForEvent(eventId: string, userId: string): Promise<void>;
}
