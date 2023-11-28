import {
  ConfirmThatPaymentExistsRequest,
  ConfirmThatPaymentExistsResponse,
  PayForEventCommand,
  PayForEventResponse,
} from "../dataobjects";
import IPayForEvent from "../interfaces/payForEvent.interface";
import restClient from "../utils/rest";

// FIXME:
const PAYMENT_ENDPOINT_ROOT = "/payment-service/";

export const payment: IPayForEvent = {
  payForEvent: async function (
    command: PayForEventCommand
  ): Promise<PayForEventResponse> {
    try {
      const { userId, eventId, method } = command;
      const { data: jsonFromPaymentBackEnd } = await restClient.get(
        `${PAYMENT_ENDPOINT_ROOT}/xd`
      );
      const payForEventResponse: PayForEventResponse = {
        amount: 0,
        paymentDate: new Date(Date.now()),
        eventName: "",
        externalPaymentId: "",
      };
      return jsonFromPaymentBackEnd;
    } catch (error) {
      throw new Error("Error to pay for event");
    }
  },
  confirmThatPaymentExists: async function (
    command: ConfirmThatPaymentExistsRequest
  ): Promise<ConfirmThatPaymentExistsResponse> {
    try {
      const { userId, eventId } = command;
      const { data: jsonFromPaymentBackEnd } = await restClient.get(
        PAYMENT_ENDPOINT_ROOT
      );
      const confirmThatPaymentExistsResponse: ConfirmThatPaymentExistsResponse =
        {
          exists: jsonFromPaymentBackEnd.exists,
        };
      return confirmThatPaymentExistsResponse;
    } catch (error) {
      throw new Error("Error to confirm that payment exists");
    }
  },
};
