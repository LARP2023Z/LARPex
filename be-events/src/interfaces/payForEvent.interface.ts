import {
  PayForEventCommand,
  PayForEventResponse,
  ConfirmThatPaymentExistsRequest,
  ConfirmThatPaymentExistsResponse,
} from "../dataobjects";

export default interface IPayForEvent {
  payForEvent(command: PayForEventCommand): Promise<PayForEventResponse>;

  confirmThatPaymentExists(
    command: ConfirmThatPaymentExistsRequest
  ): Promise<ConfirmThatPaymentExistsResponse>;
}
