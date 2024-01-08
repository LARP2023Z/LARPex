import { Request, Response } from "express";
import { payment } from "../services/payment.service";
import {
  ConfirmThatPaymentExistsRequest,
  PayForEventCommand,
} from "../dataobjects";

const payForEvent = async (req: Request, res: Response) => {
  const eventId: string = req.params.eid;
  const userId: string = req.params.uid;
  const method: string = req.params.method;
  const command: PayForEventCommand = {
    userId: userId,
    eventId: eventId,
    method: method,
  };

  try {
    const payForEventResponse = await payment.payForEvent(command);
    res.json(payForEventResponse);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

const confirmThatPaymentExists = async (req: Request, res: Response) => {
  const eventId: string = req.params.eid;
  const userId: string = req.params.uid;
  const command: ConfirmThatPaymentExistsRequest = {
    userId: userId,
    eventId: eventId,
  };

  try {
    const confirmThatPaymentExistsResponse =
      await payment.confirmThatPaymentExists(command);
    res.json(confirmThatPaymentExistsResponse);
  } catch (err: any) {
    res.status(400).json({ status: err.message });
  }
};

export default {
  payForEvent,
  confirmThatPaymentExists,
};
